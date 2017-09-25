# Getting started

---

To start using vue-modular-table simply import the component and add it to your components list.

```js
import ModularTable from 'vue-modular-table'

export default {
    components: { ModularTable }
}
```

Dont forget that pascal case becomes kebab case when you use it as HTML tag.

```markdown
<modular-table> </modular-table>
```

The basic properties the table needs to work are **data** and **definition**.

### Data

The data should be an array of objects. The objects can be basic javascript objects or JSON.

```js
let myTableData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net"
  },
]
```

### Definition

The definition of the table is made with the class TableDefinition which is contained in the component. If you prefer to define your table in separate file import TableDefinition from vue-modular-table.

```js
import { TableDefinition } from 'vue-modular-table';
```

Now that we have TableDefinition class available we can make a new instance of it and with dot notation we add columns to the table and fields in the columns. Let's see a basic example with the data from above.

```js
let myTableDefinition = new TableDefinition()
    .addColumn(column => column
        .addField('id', 'id'))
    .addColumn(column => column
        .addField('name', 'Names'))
```

This way we will make a table with two columns. Note that even though our data has _email_ as well we didn't add it as a column. The table will just skip it. **addColumn** naturally adds column to our table. In the function call we use arrow function from ES6 to define our column further. **addField** adds a field in each cell of the column. You will usually have one field per cell, but sometimes you may need to combine information to make your table neater. For example if the data had **firstName** and **lastName** instead of just **name** we could combine them in one column. The first property of **addField** is the name of the property we want to display from the data. The second property of **addField** is the title of the column in the header.

### Result

Now that we have our basic requirements for the table to work we just bind them to the table.

```markdown
<modular-table
    v-bind:data="myTableData"
    v-bind:definition="myTableDefinition">
</modular-table>
```

_Note: The shorthand of "v-bind:" in Vue is just ":". We will use the shorthand in the examples from now on._

And here is the result.

![](/assets/GettingStartedResult.png)

_Note: The CSS styles of the table are not built in. If you don't write your own CSS your table will appear as text only._

