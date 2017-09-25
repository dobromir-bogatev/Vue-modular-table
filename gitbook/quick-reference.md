# Quick reference

---

### TableDefinition Methods

| Method | Description |
| :--- | :--- |
| addColumn\(columnConfig\) | Adds a column to the table. |
| addField\(dataProperty, title, fieldConfig\) or addField\(dataProperty, title\) or addField\(dataProperty\) | Adds a field to a column. **dataProperty** is the name of the property in the data, **title** is the header. |
| class\(classList\) | Adds the passed classes to the field. |
| formatter\(formatter\) | Applies the passed formatter to the field. |
| titleFormatter\(formatter\) | Applies the passed formatter to the field's header. |
| nullOrUndefinedDisplayValue\(value\) | Defines what to display instead of null or undefined if it occurs. |
| sortable\(\) | Marks the field as sortable. Does not yet support multi-sorting. **You need to bind "sorting" property of the table to update the table's sorting.** |

### Table properties

| Property | Description |
| :--- | :--- |
| data | The data you want to display in the table. **Type:** Array of normal or JSON objects. |
| definition | The definition of the table made through the TableDefinition class. **Type: TableDefinition** |
| sorting | The sorting information of the table. **Type: Object** containing direction and field. |
| device | Pass a number which represents the current device. Usually going 0 - Mobile, 1 - Tablet and so on. **Type: Number** |
| mobileViewThreshold | Defines below and including which number the mobile view will be displayed. **Type: Number**, **Default: 0** |
| isLoading | Pass variable that changes to \_true \_when the client is waiting for response. **Type: Boolean** |
| loaderWaitTime | Defines how much the loader will wait before appearing. Works as debouncer. **Type: number** representing milliseconds, **Default: 250** |
| wrapperClass | Pass your class to the div wrapping the table. **Type: String**, **Default: modular-table-wrapper** |
| tableClass | Pass your class to the table. **Type: String**, **Default: modular-table** |
| tableMobileClass | Pass your class to the mobile view of the table. **Type: String**, **Default: modular-table-mobile** |
| loaderClass | Pass your class to the div responsible for the loading. You can also access the span inside to add an animation or text. **Type: String**, **Default: loader** |

### Table events

| Event | Description |
| :--- | :--- |
| modular-table-sort | If the column is sortable and its header is clicked this event will fire and carry the sort object as payload. |
| modular-table-row | When a row is clicked this event will fire. As payload it carries the click event as first property and the data of the row as second property. |



