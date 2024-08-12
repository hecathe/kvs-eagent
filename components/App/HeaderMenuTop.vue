<template>
	<ul class="header-menu-top">
		<li class="header-menu-top__item" v-for="(item, index) in list" :key="index">
			<nuxt-link class="header-menu-top__link" v-if="item.icon" :to="item.link">
				<img :src="item.icon" :alt="item.title">
				{{ item.title }}
			</nuxt-link>
			<nuxt-link class="header-menu-top__link" v-else :to="item.link">{{ item.title }}</nuxt-link>
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
	},
}
</script>

<style lang="scss" scoped>
.header-menu-top {
	display: flex;
	align-items: center;
	column-gap: 24px;

	&__link {
		display: flex;
		font-weight: 500;
		padding: 12px 0;

		&:hover {
			color: $dark-40;
		}
	}
}

@media screen and (max-width: 1359px) {
	.header-menu-top {
		column-gap: 16px;
	}
}

@media screen and (max-width: 975px) {
	.header-menu-top {
		flex-direction: column;
		align-items: flex-start;

		&__item {
			width: 100%;
		}

		&__link {
			width: 100%;
			font-weight: 700;
			color: $dark-80;
			border-top: 1px solid $grey-15;
			padding: 20px 0;
		}
	}
}
</style>