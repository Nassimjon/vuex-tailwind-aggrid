<template>
	<button @click="fillLarge" class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Auto-Size All</button>
	<button @click="sizeToFit()" class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Size to Fit </button>
	<button class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">Auto-Size AllSkipHeader</button>

  <ag-grid-vue
    class="ag-theme-alpine"
    style="height: 70vh; min-width: 100%"
    :columnDefs="columnDefs"
    :rowData="getClients"
		:rowSelection="rowSelection"
		:animateWidth="true"
		@grid-ready="onGridReady"
		@autoSizeAll="autoSizeAll"
  >
  </ag-grid-vue>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { field: "userId", resizable: true, sortable: true, width: 50 },
        { field: "id", resizable: true, sortable: true, },
        { field: "title", resizable: true, sortable: true, filter: true },
        { field: "body", resizable: true, sortable: true },
      ],
			rowData: null,
			rowSelection: null,
			height: '100%',
      width: '100%',
    };
  },
	computed: mapGetters(["getClients"]),
	// methods: mapActions(['get']),
	methods: {
		
    onGridReady(params) {
			
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      params.api.sizeColumnsToFit();
      window.addEventListener('resize', function () {
        setTimeout(function () {
          params.api.sizeColumnsToFit();
        });
      });
      params.api.sizeColumnsToFit();
    },
		fillLarge() {
      this.setWidthAndHeight('100%', '100%');
			console.log('nassim')
    },
		...mapActions(['get'])
  },

	async mounted() {
		this.rowSelection = 'multiple'
		this.get(12);
	}
};
</script>

<style scoped>

</style>
