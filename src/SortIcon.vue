<template>
	<span class="arrow-icons">
		<span v-if="direction > 0" class="modular-table-sort-asc">&#x2191;</span>
		<span v-else-if="direction < 0" class="modular-table-sort-desc">&#x2193;</span>
		<span class="modular-table-sort-desc" v-else>&#x2195;</span>
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