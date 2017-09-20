<template>
    <div id="app">
        <modular-table
                :definition="basicTableDefnition"
                :data="staticData"
                @modular-table-row="rowClick">
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
		methods: {
			rowClick(event, row) {
				alert(JSON.stringify(row));
			},
		},
		components: { ModularTable },
	}
</script>

<style>
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

    .modular-table th, .modular-table td {
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

    .modular-table-mobile {
        border-collapse: collapse;
        width: 100%;
    }

    .modular-table-mobile td {
        display: block;
        text-align: left;
        padding: 8px;
    }

    .modular-table-mobile td div span {
        font-size: 1.1em;
        font-weight: bold;
    }

    .modular-table-mobile tr:nth-child(odd) {
        background-color: #f2f2f2
    }

    .modular-table-mobile th {
        background-color: #4CAF50;
        color: white;
    }

    /
    /
    colors
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
