import axios from "axios"

export default {
	state: {
		clients: []
	},
	actions: {
		getClientsFromBack(){
			const CliBack = []
			axios.
				get('https://jsonplaceholder.typicode.com/posts?_limit=10')
				  .then((Response) => {
						CliBack = Response.data;
					})
		}
  },
	mutations: {
		getClientsFromBackM(state, CliBack) {
			state.clients = CliBack
		}
	},
  getters: {
	},
}