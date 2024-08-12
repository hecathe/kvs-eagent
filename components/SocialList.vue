<template>
	<ul class="social-list">
		<li class="social-list__item" v-for="(item, index) in socials" :key="index">
			<nuxt-link
				class="social-list__link"
				:to="item.link"
				target="_blank"
				:style="{ backgroundImage: `url(${item.icon})` }"
			>
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		socials: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.social-list {
	display: flex;
	column-gap: 10px;

	&__link {
		width: 32px;
		height: 32px;
		display: flex;
		background-color: $dark-70;
		background-repeat: no-repeat;
		background-size: 24px;
		background-position: center;
		border-radius: 100%;

		&:hover {
			background-color: $dark-40;
		}
	}
}
</style>