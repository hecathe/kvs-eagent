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

		<div class="header__mobile-wrap">
			<AppHeaderUser :user="user"></AppHeaderUser>
			<button
				@click="opened = !opened"
				class="header__burger"
				:class="{open: opened}"
			>
				<span></span>
			</button>
		</div>

		<div class="header__mobile-menu" v-if="opened">
			<AppHeaderUserActions></AppHeaderUserActions>
			<Slogan></Slogan>

			<div class="header__mobile-lists">
				<AppHeaderMenuMain :list="menu_bottom"></AppHeaderMenuMain>
				<AppHeaderMenuTop :list="menu_top"></AppHeaderMenuTop>
			</div>
		</div>

		<div class="header__top">
			<div class="header__wrapper">
				<AppHeaderMenuTop :list="menu_top"></AppHeaderMenuTop>
				<Slogan></Slogan>
			</div>
		</div>
		<div class="header__bottom">
			<div class="header__wrapper">
				<AppHeaderMenuMain :list="menu_bottom"></AppHeaderMenuMain>

				<div class="header__user-wrap">
					<img
						class="header__eagent"
						src="/assets/svg/eagent.svg"
						alt=""
					>

					<AppHeaderUser :user="user"></AppHeaderUser>
					<AppHeaderUserActions></AppHeaderUserActions>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			opened: false,
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
					icon: 'icons/school.svg',
					link: '#',
				},
				{
					icon: 'icons/telegram-black.svg',
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
			],
			user: {
				name: 'Контентов Контент',
				title: 'STAFF KVS'
			}
		}
	},
}
</script>

<style lang="scss" scoped>
.header {
	position: relative;

	&__mobile-wrap {
		display: none;
	}

	&__mobile-menu {
		// display: none;
		position: absolute;
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		position: absolute;
		width: 100%;
		height: calc(100vh - 64px);
		top: 64px;
		left: 0;
		min-height: max-content;
		background-color: $white;
		padding: 30px 16px;
		z-index: 3;
	}

	&__logo {
		position: absolute;
		top: 50%;
		left: 32px;
		transform: translateY(-50%);
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: calc(50% - 715px);
		padding-left: 16px;
	}

	&__top {
		// min-height: 40px;
		padding-right: 16px;
	}

	&__bottom {
		color: $white;
		background-color: $dark-80;
	}

	&__eagent {
		max-width: 200px;
	}

	&__user-wrap {
		display: flex;
	}

	&__burger {
		position: relative;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		padding: 22px;
		box-sizing: border-box;
		border-left: 1px solid #40464D;

		span {
			width: 20px;
			height: 2px;
			background-color: #ffffff;
			transition: width 150ms ease-in-out;
		}

		&::before,
		&::after {
			position: absolute;
			content: '';
			height: 2px;
			background-color: #ffffff;
			transition: transform 150ms ease-in-out;
		}

		&::before {
			width: 20px;
			top: 24px;
		}

		&::after {
			width: 16px;
			bottom: 24px;
		}

		&.open {
			span {
				width: 0;
			}

			&::before {
				transform: rotate(45deg) translate(5px, 5px);
			}

			&::after {
				width: 20px;
				transform: rotate(-45deg) translate(5px, -5px);
			}
		}
	}
}

@media screen and (max-width: 1919px) {
	.header {
		&__wrapper {
			margin-left: calc(1rem + 125px);
		}
	}
}

@media screen and (max-width: 1570px) {
	.header {
		&__eagent {
			display: none;
		}
	}
}

@media screen and (max-width: 1420px) {
	.header {
		&__logo {
			max-width: 70px;
			left: 16px;
		}

		&__wrapper {
			margin-left: calc(1rem + 58px);
		}
	}
}

@media screen and (max-width: 975px) {
	.header {
		display: flex;
		justify-content: space-between;
		background-color: $dark-80;

		&__logo {
			position: static;
			display: flex;
			max-width: 67px;
			margin-left: 16px;
			transform: none;
		}

		&__mobile-wrap {
			display: flex;
			color: $white;
		}

		&__top {
			display: none;
		}

		&__bottom {
			display: none;
		}
	}
}
</style>