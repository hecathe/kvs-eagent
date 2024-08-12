<template>
	<div class="header-user">
		<span class="header-user__name">{{ user.name }}</span>
		<span class="header-user__title">{{ user.title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			default: () => {},
		}
	}
}
</script>

<style lang="scss" scoped>
.header-user {
	display: grid;
	justify-items: flex-end;
	align-content: center;
	row-gap: 4px;
	text-align: right;
	margin: 0 20px;

	&__title {
		font-size: 12px;
		text-transform: uppercase;
	}
}
</style>