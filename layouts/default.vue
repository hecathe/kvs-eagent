<template>
	<div class="content">
		<AppHeader></AppHeader>
		<slot></slot>
		<AppFooter></AppFooter>
	</div>
</template>

<style lang="scss" scoped>
.content {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>