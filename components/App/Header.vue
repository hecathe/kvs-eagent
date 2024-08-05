<template>
	<header class="header">
		<nuxt-link
			class="header__logo"
			to="/"
		>
			<img
				src="/assets/svg/logo.svg"
				alt=""
			>
		</nuxt-link>
		<div class="header__top">
			<AppHeaderMenuTop :list="menu_top"></AppHeaderMenuTop>
			<Slogan></Slogan>
		</div>
		<div class="header__bottom">
			<AppHeaderMenuMain :list="menu_bottom"></AppHeaderMenuMain>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
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
					link: '#',
				},
				{
					icon: '/icons/school.svg',
					link: '#',
				},
				{
					icon: '/icons/telegram.svg',
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
					link: '#',
				},
				{
					title: 'Записаться на показ',
					link: '#',
				},
				{
					title: 'Мои сделки',
					link: '#',
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.header {
	position: relative;

	&__logo {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 32px;
	}

	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: calc(50% - 715px);
		padding-right: 16px;
	}

	&__bottom {
		background-color: $dark-80;
		padding-left: calc(50% - 715px);
		padding-right: 16px;
	}
}
</style>