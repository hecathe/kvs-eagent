<template>
	<ul class="header-menu-main">
		<li class="header-menu-main__item" v-for="(item, index) in list" :key="index">
			<nuxt-link class="header-menu-main__link" :to="item.link">{{ item.title }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.header-menu-main {
	height: 100%;
	display: flex;
	column-gap: 28px;

	&__link {
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		font-size: 18px;
		color: white;
		box-sizing: border-box;

		&:hover {
			color: $dark-40;

			&::after {
				position: absolute;
				content: '';
				left: 0;
				bottom: 0;
				width: 100%;
				height: 2px;
				background-color: $orange-50;
			}
		}
	}
}

@media screen and (max-width: 1359px) {
	.header-menu-main {
		column-gap: 16px;
	}
}

@media screen and (max-width: 975px) {
	.header-menu-main {
		flex-direction: column;
		align-items: flex-start;

		&__item {
			width: 100%;
		}

		&__link {
			justify-content: flex-start;
			width: 100%;
			font-size: 16px;
			color: $dark-80;
			border-top: 1px solid $grey-15;
			padding: 20px 0;

			&:hover {
				&::after {
					display: none;
				}
			}
		}
	}
}
</style>