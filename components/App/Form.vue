<template>
	<form 
		class="form" 
		:class="{
				'form_border': border,
				'form_grid-3': threeColumns,
			}"
		>
		<slot></slot>
	</form>
</template>

<script>
export default {
	props: {
		border: {
			type: Boolean,
			default: false,
		},
		threeColumns: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.form {
	display: grid;
	gap: 20px;

	&_border {
		border: 1px solid $grey-15;
		border-radius: 4px;
		padding: 20px;
	}

	&_grid-3 {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>