<template>
	<section class="section">
		<slot v-if="wide"></slot>

		<div v-else class="container">
			<slot></slot>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		wide: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss" scoped>
.section {
	margin-bottom: 60px;
}
</style>