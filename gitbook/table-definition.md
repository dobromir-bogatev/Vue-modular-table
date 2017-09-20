# Table definition

---

The class TableDefinition is where most of the magic happens. With its help the table and the formatting of the fields are defined. It has methods that can be chained in order to produce readable and understandable definition without the need for you to write a complex object to define your table. In this chapter we will look at the available methods and ways to build your table.

### The class instance

The class instance has only one method which is the first step of building our table.

```js
let myTableDefinition = new TableDefinition();
```

* **addColumn \(columnConfig\) - **pretty straight forward, it adds a column to our table. Whats more interesting is the column config or more generally the config properties.

#### Config properties

The config properties, like columnConfig above, allow us to keep the definition explicit and clean. In the place of a config property an ES6 arrow function should be passed and in it you chain further definition. For example:

```js
myTableDefinition
    .addColumn(column => column
        .addField('name', 'Name'));
```

### Table column

The table column much like the class instance has only one method.

* **addField\(dataProperty, title, fieldConfig\) - **the method adds a field to every cell in the column and defines the title displayed in the header.
  * **dataProperty -** The data's property name that you wish to be displayed in this field. It is mandatory.
  * **title - **The title of your column. It can be anything and it will be displayed as the column header. It is not mandatory. If you leave it empty the header of the column will be empty.
  * **fieldConfig - **Allows you to further define the field. Read more about the config properties above. 
  * **Function overloads: addField\(dataProperty\), addField\(dataProperty, fieldConfig\)**

You can add multiple fields to a column, which means that you can make columns with combined data. A little trick you can use is  write the title of the column only in the first field in the combination. Lets see an example for clarification.

```js
myTableDefinition
    .addColumn(column => column
        .addField('email', 'Contacts') // Only one title for the whole column.
        .addField('phone')
        .addField('facebook'));
```

### Table field

The table field is the place that we can modify our table the most. When you apply a method on a field, make note that a field figurates in every cell in its column.

* **class\(classList\) - **With this method you can attach your CSS classes. You can can pass them as array or simply with comma.

```js
myTableDefinition
    .addColumn(column => column
        .addField('name','Name', field => field
            .class('is-primary', 'bg-dark')));
```

* **formatter\(formatter\) **and **titleFormatter\(formatter\) -** Through this method you can modify the fields further. You can use regular or arrow function as a formatter. You can add HTML that will render as well. **formatter **will format the fields in the column. **titleFormatter **will format the header of the column.

```js
myTableDefinition
    .addColumn(column => column
        .addField('name','Name', field => field
            .formatter(value => `<b>${value}</b>`))); // Bolding with string interpolation.
```

_Note: We added a small library with general formatters that are used often. Look at the chapter **Formatters **for more information_.

* **nullOrUndefinedDisplayValue\(value\) - **If **null **or **undefined **results appear in your data and you don't want your table to display them just like that, you can set the value for these results. For example _"No information" instead of just _"null".

* **sortable\(\) - **Marks the column as sortable. This will make the header clickable. On click the table will emit Vue event with the name of **"modular-table-sort" **which carries a payload with the info of the sorting in the following format:`{ direction: sortingDirection, field: nameOfTheSortedField }`On the first click the direction is 1 which you may consider ascending while -1 can be descending.

```js
{
    direction: 1,
    field: "name"
}
```

_Note: Adding sortable\(\) to the field will only make it clickable and will emit event, however it will not automatically update the field. To make it update you need to bind the table's property **:sorting **to object with the same format. The table does not store the sorting data itself, because if you work with Vuex store you will need to store the sorting and similar data in the store instead of in the objects. If you are not using Vuex you can simply update a variable when the event fires and then pass it to the table prop._

```markdown
<modular-table
    :sorting="dummySorting"
    @modular-table-sort="updateSorting">
</modular-table>
```

```js
export default {
    data() {
        return {
            dummySorting = null;    
        }
    },
    methods: {
        updateSorting(payload) {
            this.dummySorting = payload;
        }
    }
}
```

_Note: The sorting does not yet support multi-sorting. The object will always contain the only field that is currently sorted and its direction._

