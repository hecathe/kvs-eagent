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
	display: flex;

	&__link {
		display: flex;
		color: white;
		padding: 14px;
	}
}
</style>