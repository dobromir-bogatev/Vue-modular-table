import { TableDefinition } from '../../../dist/vue-modular-table';
import { combinedFormatter, prefixFormatter, suffixFormatter, divFormatter } from "../../../dist/vue-modular-table";

const colorFormatter = (v) => `<span class="${v}">${v}</span>`;

export default new TableDefinition()
	.addColumn(col => col
		.addField('name', 'Name'))
	.addColumn(col => col
		.addField('height', 'Height', field => field
			.formatter(suffixFormatter(' cm')))
		.addField('mass', 'Mass', field => field
			.formatter(combinedFormatter(divFormatter(),suffixFormatter(' kg')))
			.nullOrUndefinedDisplayValue('Nobody knows his ')))
	.addColumn(col => col
		.addField('hair_color', 'Definition', field => field
			.formatter(combinedFormatter(divFormatter(), prefixFormatter('<i>Hair: </i>'), colorFormatter)))
		.addField('skin_color', '', field => field
			.formatter(combinedFormatter(divFormatter(), prefixFormatter('<i>Skin: </i>'), colorFormatter)))
		.addField('eye_color', '', field => field
			.formatter(combinedFormatter(divFormatter(), prefixFormatter('<i>Eyes: </i>'), colorFormatter))));