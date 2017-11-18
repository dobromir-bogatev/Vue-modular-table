<template>
    <div :class="wrapperClass">
        <table :class="tableClass" v-if="device > mobileViewThreshold || device === null">
            <thead>
            <tr>
                <th v-for="col in definition.columns">
                    <field-header v-for="field in col.fields"
                                  :key="field.path"
                                  v-if="field.title"
                                  :sorting="sorting"
                                  :sortIcons="sortIcons"
                                  :field="field"
                                  @modular-table-sort="sortClick">
                    </field-header>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in data" @click="rowClick($event, row)">
                <td v-for="col in definition.columns">
                    <slot :name="'col-'+col.name" :row="row" :col="col">
						<span v-for="field in col.fields" :class="field.classList"
                              v-html="field.format(field._getValue(row), row)">
                        </span>
                    </slot>
                </td>
            </tr>
            </tbody>
        </table>
        <table :class="tableMobileClass" v-else>
            <tbody>
            <template v-for="row in data" @click="rowClick($event, row)">
                <tr class="separator seperator-top"><td colspan="2"></td></tr>
                <template v-for="col in definition.columns">
                    <tr>
                        <th>
                            <field-header v-for="field in col.fields"
                                          :key="field.path"
                                          v-if="field.title"
                                          :sorting="sorting"
                                          :field="field"
                                          @modular-table-sort="sortClick">
                            </field-header>
                        </th>
                        <td>
                            <slot :name="'col-'+col.name" :row="row" :col="col">
                                <span v-for="field in col.fields"
                                      :class="field.classList"
                                      v-html="field.format(field._getValue(row), row)">
                                </span>
                            </slot>
                        </td>
                    </tr>
                </template>
                <tr class="separator seperator-bottom"><td colspan="2"></td></tr>
            </template>
            </tbody>
        </table>
        <slot name="loader" v-if="showLoader">
            <div :class="loaderClass">
                <span>Loading....</span>
            </div>
        </slot>
    </div>
</template>

<script>
	import TableDefinition from './TableDefinition';
	import FieldHeader from './FieldHeader.vue';

	const TABLE_SORT_EVENT = 'modular-table-sort';
	const ROW_CLICK_EVENT = 'modular-table-row';

	export default {
		data() {
			return {
				showLoader: false,
				loaderTimer: null,
			};
		},
		watch: {
			isLoading(newState) {
				if (newState && !this.loaderTimer) {
					this.loaderTimer = setTimeout(() => {
						this.showLoader = true;
					}, this.loaderWaitTime);
				} else if (!newState) {
					this.showLoader = false;
					clearTimeout(this.loaderTimer);
					this.loaderTimer = null;
				}
			},
		},
		name: 'ModularTable',
		props: {
			device: {
				type: Number,
				default: null,
			},
			mobileViewThreshold: {
				type: Number,
				default: 0,
			},
			data: {
				type: Array,
				default: [],
			},
			sorting: {
				type: Object,
				default() { return null; },
			},
            sortIcons:{
				type: Object,
                    default(){ return null;},
             },
			definition: {
				type: TableDefinition,
				required: true,
			},
			wrapperClass: {
				type: String,
				default: 'modular-table-wrapper',
			},
			tableClass: {
				type: String,
				default: 'modular-table',
			},
			tableMobileClass: {
				type: String,
				default: 'modular-table-mobile',
			},
			loaderClass: {
				type: String,
				default: 'loader',
			},
			config: {
				type: Object,
				default() {
					return {};
				},
			},
			isLoading: {
				type: Boolean,
				default: false,
			},
			loaderWaitTime: {
				type: Number,
				default: 250,
			},
		},
		methods: {
			sortClick(sort) {
				this.$emit(TABLE_SORT_EVENT, sort);
			},
			rowClick(event, row) {
				this.$emit(ROW_CLICK_EVENT, event, row);
			}
		},
		components: {
			FieldHeader,
		},
	};
</script>
