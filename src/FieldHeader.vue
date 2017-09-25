<template>
	<div @click="sortClick()" v-if="field.sortPath" class="modular-table-sortable">
		<span v-html="field.formatTitle(field.title)"></span>
		<template scope="sorting" direction="direction"></template>
		<sort-icon :field="field" :sorting="sorting" :sortIcons="sortIcons"></sort-icon>
	</div>
	<div v-else>
		<span v-html="field.formatTitle(field.title)"></span>
	</div>
</template>

<script>
	import SortIcon from './SortIcon.vue';
	import { TableField } from './TableDefinition';

	const TABLE_SORT_EVENT = 'modular-table-sort';

	export default {
		name: 'FieldHeader',
		props: {
			field: {
				type: TableField,
				required: true,
			},
			sorting: {
				type: Object,
				default() { return null; },
			},
			sortIcons:{
				type: Object,
				default(){ return null;},
			},
		},
		computed: {
			direction() {
				if (!this.sorting || this.sorting.field !== this.field.sortPath)
					return 0;
				return this.sorting.direction;
			},
		},
		methods: {
			sortClick() {
				const direction = (!this.sorting ||
					this.sorting.field !== this.field.sortPath ||
					this.sorting.direction !== 1) ? 1 : -1;
				const sort = {
					field: this.field.sortPath,
					direction,
				};
				this.$emit(TABLE_SORT_EVENT, sort);
			},
		},
		components: {
			SortIcon,
		},
	};
</script>
