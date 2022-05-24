import { createStore } from 'vuex'
import axios from 'axios'
import clients from './Clients/clients'

export default createStore({  
	actions: {
		get(ctx){
			
			axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
				  .then((Response) => {
						let CliBack = []
						CliBack = Response.data;
						ctx.commit('getClientsFromBack', CliBack)
					})
					
		}
  },
	mutations: {
		getClientsFromBack(state, CliBack) {
			state.clients = CliBack
		}
	},
  state: {
		clients: []
		// clients: [ 
		// 	{ make: "Vauxhall", model: "Corsa", price: 1720 },
		// 	{ make: "Ford", model: "Fiesta", price: 1800 },
		// 	{ make: "Volkswagen", model: "Golf", price: 2600 },
		// ]
  },
  getters: {
		getClients(state) {
			return state.clients
		}
  },
  modules: {

  }
})
