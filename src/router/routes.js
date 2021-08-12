export const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { title: 'Домашняя страница' },
		component: () => import('../views/Auth.vue')
	},
];
