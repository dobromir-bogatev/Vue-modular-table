# Examples

### Basic

In this basic example we will show some of the functionality of vue-modular-table including combining fields, using and creating your formatter. For the full repo you can use this link: // TODO link to Basic example



```js
import { TableDefinition } from '../../../dist/vue-modular-table';
import { combinedFormatter, prefixFormatter, suffixFormatter, divFormatter } from "../../../src/formatters";

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
```

```markdown
<template>
    <div id="app">
        <modular-table
                :definition="basicTableDefnition"
                :data="staticData">
        </modular-table>
    </div>
</template>

<script>
    import ModularTable from '../../../dist/vue-modular-table';
    import basicTableDefnition from './basicTableDefinition';
    import staticData from './static-data';

    export default {
        name: 'app',
        data() {
            return {
                basicTableDefnition,
                staticData
            }
        },
        components: { ModularTable },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .modular-table {
        border-collapse: collapse;
        width: 100%;
    }

    .modular-table th, td {
        text-align: left;
        padding: 8px;
    }

    .modular-table tr:nth-child(even) {
        background-color: #f2f2f2
    }

    .modular-table th {
        background-color: #4CAF50;
        color: white;
    }

    // colors
    .blond {
        color: #c4c496;
    }

    .orange {
        color: #dc8900;
    }

    .fair {
        color: #b78e5c;
    }

    .yellow {
        color: #aeaa17;
    }

    .hazel {
        color: #665927;
    }

    .blue {
        color: dodgerblue;
    }

    .brown {
        color: saddlebrown;
    }

    .black {
        color: black;
    }

    .green {
        color: green;
    }

</style>
```

### Request

```js
import { TableDefinition } from '../../../dist/vue-modular-table';
import { linkFormatter, divFormatter } from "../../../src/formatters";


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
```

```markdown
<template>
    <div id="app">
        <modular-table
                :data="requestData"
                :definition="requestTableDefinition"
                :isLoading="dummyLoading"
                :sorting="sorting"
                @modular-table-sort="sortData">
            <div slot="loader" class="modular-table-loading-blur">
                <span class="modular-table-loader"></span>
            </div>
        </modular-table>
        <button class="button" @click="getData">Request data</button>
        <button class="button" @click="clearData">Clear data</button>
        <button class="button" @click="triggerLoading">Trigger Loading</button>
    </div>
</template>

<script>
    import ModularTable from '../../../dist/vue-modular-table';
    import requestTableDefinition from './requestTableDefinition';

    export default {
        name: 'app',
        data() {
            return {
                requestData: null,
                requestTableDefinition,
                loading: false,
                dummyLoading: false,
                sorting: null,
            }
        },
        methods: {
            getData() {
                this.loading = true;
                this.axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
                    this.requestData = response.data;
                    this.loading = false;
                });
            },
            sortData(sortObject) {
                const direction = sortObject.direction === 1 ? 'asc' : 'desc';
                this.loading = true;
                this.axios.get(`https://jsonplaceholder.typicode.com/users?_sort=${sortObject.field}&_order=${direction}`).then((response) => {
                    this.requestData = response.data;
                    this.sorting = sortObject;
                    this.loading = false;
                })
            },
            clearData() {
                this.requestData = null;
            },
            triggerLoading() {
                this.dummyLoading = !this.dummyLoading;
            }
        },
        components: { ModularTable },
    }
</script>

<style>
    *, body {
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .button {
        font-size: 1rem;
        background-color: white;
        border: 1px solid #9f9f9f;
        border-radius: 3px;
        cursor: pointer;
        user-select: none;
        line-height: 1.5;
        outline: none;
        padding: calc(0.375em - 1px) calc(0.625em - 1px) calc(0.375em - 1px) calc(0.625em - 1px);
        margin-top: calc(0.625em - 1px);
    }

    .button:hover {
        border-color: #6e6e6e;
    }

    .button:focus {
        border-color: dodgerblue;
    }

    .button:active {
        border-color: black;
    }

    .modular-table-wrapper {
        position: relative;
    }

    .modular-table {
        border-collapse: collapse;
        width: 100%;
    }

    .modular-table th, td {
        text-align: left;
        padding: 8px;
    }

    .modular-table tr:nth-child(even) {
        background-color: #f2f2f2
    }

    .modular-table th {
        background-color: dodgerblue;
        color: white;
    }

    .modular-table-loader {
        display: block;
        margin: 0 auto;
        border: 1em solid grey;
        border-top: 1em solid dodgerblue;
        border-radius: 50%;
        width: 3em;
        height: 3em;
        animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .modular-table-loading-blur {
        background-color: rgba(255, 255, 255, 0.6);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
</style>
```



