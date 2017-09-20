import { TableDefinition } from '../../../dist/vue-modular-table';
import { divFormatter, linkFormatter } from "../../../dist/vue-modular-table";


export default new TableDefinition()
	.addColumn(col => col
		.addField('id', 'id', field => field
			.sortable()))
	.addColumn(col => col
		.addField('name', 'Name', field => field
			.sortable()))
	.addColumn(col => col
		.addField('phone', 'Contacts', field => field
			.formatter(divFormatter()))
		.addField('email'))
	.addColumn(col => col
		.addField('website', 'Website', field => field
			.formatter(linkFormatter(true, 'http://'))));