<template>
	<div class="content">
		<AppHeader :template="template"></AppHeader>
		<slot></slot>
		<AppFooter :social="social"></AppFooter>
	</div>
</template>

<script>
export default {
	data() {
		return {
			template: {
				menu_top: [
					{
						title: 'База знаний',
						link: '#',
					},
					{
						title: 'Акции',
						link: '#',
					},
					{
						title: 'Новости',
						link: '#',
					},
					{
						title: 'Избранное',
						link: '#',
					},
					{
						title: 'Контакты',
						link: '/contacts/',
					},
					{
						icon: '/kvs-eagent/icons/school.svg',
						link: '#',
					},
					{
						icon: '/kvs-eagent/icons/telegram-black.svg',
						link: '#',
					}
				],
				menu_bottom: [
					{
						title: 'Объекты в продаже',
						link: '#',
					},
					{
						title: 'Шахматка',
						link: '#',
					},
					{
						title: 'Мои клиенты',
						link: '/clients/',
					},
					{
						title: 'Записаться на показ',
						link: '#',
					},
					{
						title: 'Мои сделки',
						link: '#',
					},
				],
				user: {
					name: 'Контентов Контент',
					title: 'STAFF KVS'
				},
				kvs_logo: '/kvs-eagent/icons/logo.svg',
				eagent_logo: '/kvs-eagent/icons/eagent.svg',
			},
			social: [
				{
					link: '#',
					icon: '/kvs-eagent/icons/telegram-white.svg',
				},
				{
					link: '#',
					icon: '/kvs-eagent/icons/youtube.svg',
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.content {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>