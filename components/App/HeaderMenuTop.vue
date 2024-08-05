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

	&__link {
		display: flex;
		font-weight: 500;
		padding: 12px;

		&:hover {
			color: $dark-40;
		}
	}
}
</style>