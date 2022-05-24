import axios from "axios"

export default {
	actions: {
		get(ctx, limit = 3){
			
			axios.get('https://jsonplaceholder.typicode.com/posts?_limit=' +limit)
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
  },
  getters: {
		getClients(state) {
			return state.clients
		}
  },

}