import dotProp from 'es5-dot-prop';

const defaultFormatter = value => value;

class TableFilter {
	constructor(type) {
		this.type = type;
		this.options = [];
	}

	addOption(value, title) {
		if (this.type !== 'enum')
			throw new Error('Options are usable only on enum filters!');

		if (!title)
			title = value;
		this.options.push({ value, title });

		return this;
	}
}

export class TableField {
	constructor(path, title) {
		// header specific
		this.title = title;
		this.sortPath = null;
		this.formatTitle = defaultFormatter;

		this.nullValue = undefined;

		this.classList = [];
		// cell specific
		this.path = path;
		this.format = defaultFormatter;
	}

	class(...classList) {
		this.classList = classList;
		return this;
	}

	titleFormatter(formatter) {
		this.formatTitle = formatter;
		return this;
	}

	nullOrUndefinedDisplayValue(value) {
		this.nullValue = value;
		return this;
	}

	formatter(formatter) {
		this.format = formatter;
		return this;
	}

	sortable(sortPath = this.path) {
		this.sortPath = sortPath;
		return this;
	}

	_getValue(rowData) {
		const value = dotProp.get(rowData, this.path);
		if (this.nullValue === undefined)
			return value;
		if (value === null || value === undefined)
			return this.nullValue;
		return value;
	}
}

class TableColumn {
	constructor(name) {
		this.name = name;
		this.fields = [];
	}

	addField(path, title, builder = null) {
		if (builder === null && typeof title !== 'string') {
			builder = title;
			title = null;
		}


		this.fields.push(builder ? builder(new TableField(path, title)) : new TableField(path, title));
		return this;
	}
}

export default class TableDefinition {
	constructor() {
		this.columns = [];
	}

	addColumn(name, columnConfig) {
		if (typeof name === 'string' && typeof columnConfig === 'string') {
			name = this.columns.length;
			this.columns.push(columnConfig(new TableColumn(name).addField(name, columnConfig)));
			return this;
		}
		if (!columnConfig) {
			columnConfig = name;
			name = this.columns.length;
		}
		this.columns.push(columnConfig(new TableColumn(name)));
		return this;
	}
}
