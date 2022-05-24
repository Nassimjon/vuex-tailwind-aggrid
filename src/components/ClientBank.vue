<template>
	<h1>Test</h1>
  <ag-grid-vue
    class="ag-theme-alpine-dark"
    style="height: 200px; min-width: 100%"
    :columnDefs="columnDefs"
    :rowData="getClients"
		:animateWidth="true"
		@grid-ready="onGridReady"

  >
  </ag-grid-vue>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { field: "userId", resizable: true },
        { field: "id", resizable: true },
        { field: "title", resizable: true },
        { field: "body", resizable: true },
      ],
      rowData: [],
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
		...mapActions(['get'])
  },

	async mounted() {
		this.get();
		//this.$store.dispatch('get')
		
		
	}
};
</script>

<style scoped>

</style>
