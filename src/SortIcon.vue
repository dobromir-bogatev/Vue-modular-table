<template>
	<span class="arrow-icons" v-if="sortIcons === null">
		<span v-if="direction > 0" class="modular-table-sort-asc">&#x2191;</span>
		<span v-else-if="direction < 0" class="modular-table-sort-desc">&#x2193;</span>
		<span class="modular-table-sort-desc" v-else>&#x2195;</span>
	</span>
	<span class="arrow-icons" v-else>
		<span v-if="direction > 0" v-html="sortIcons.asc"></span>
		<span v-else-if="direction < 0" v-html="sortIcons.desc"></span>
		<span v-else v-html="sortIcons.none"></span>
	</span>
</template>

<script>
	import { TableField } from './TableDefinition';

	export default {
		name: 'SortIcon',
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
	};
</script>