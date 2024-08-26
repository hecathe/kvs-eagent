<template>
	<div class="select">
		<USelectMenu
			:options="options"
			v-model="selected"
			placeholder="Регион"
			searchable
		></USelectMenu>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Array,
			default: () => [],
		},
		options: {
			type: Array,
			default: () => [],
		}
	},
	data() {
		return {
			selected: this.value,
		}
	},
}
</script>

<style lang="scss" scoped>
.select {
	.iconify {
		color: $orange-50;
		background-color: $orange-50;
		--color-gray-900: $orange-50;
	}
}
</style>