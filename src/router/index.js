import { createRouter, createWebHashHistory } from "vue-router";
import HeaderBank from '@/components/HeaderBank'
import ClientBank from '@/components/ClientBank'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		// {
		// 	path: '/',
		// 	component: HeaderBank
		// },
		{
			path: '/ClientBank',
			name: 'ClientBank',
			component: ClientBank
		}
	]
})