# Vue-modular-table

> Flexible and covenient data table with Vue2 and no jquery

# Usage

## Installation

### Using yarn

`yarn add data-table-ec`

### Using npm

`npm i --save data-table-ec`

## Quick setup 

Import vue-modular-table

`import ModularTable from 'vue-modular-table'

export default {
    components: { ModularTable }
}`

and use it 

`<modular-table> </modular-table>`

## Requirements

### Data

In order to work the table needs data in form of array of basic JS object or in JSON format

`[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv"
  }
 ]`
 
 ### Definition
 
 The unique part of Vue-modular-table is its definition.
 First you need to import the class that is responsible for construction of the definition.
 
 `import { TableDefinition } from 'vue-modular-table';`
 
 Then you need to define your table.
 
 `let myTableDefinition = new TableDefinition()
    .addColumn(column => column
        .addField('id', 'id'))
    .addColumn(column => column
        .addField('name', 'Names'))`
        
 For more detailed information how to define the table and use its functionality read the documentation.

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
