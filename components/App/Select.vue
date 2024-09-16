<template>
	<div class="select" :class="{'select_opened': opened}">
		<div class="select__field" @click="opened = !opened">
			<div class="select__label">{{ label }}</div>
			<div class="select__value">{{ value }}</div>
		</div>
		<ul class="select__options">
			<li class="select__option" v-for="(option, index) in options" :key="index">
				{{ option }}
			</li>
		</ul>

		<!-- <USelectMenu
			:options="options"
			v-model="selected"
			placeholder="Регион"
			searchable
		></USelectMenu> -->
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: 'Не выбрано',
		},
		options: {
			type: Array,
			default: () => [],
		}
	},

	data() {
		return {
			selected: this.value,
			opened: false,
		}
	},

	methods: {
		toggleOpenClose() {
			this.opened ? this.close : this.open
		},

		open() {
			this.opened = true;
		},

		close() {
			this.opened = false;
		}
	},
}
</script>

<style lang="scss" scoped>
.select {
	position: relative;

	.iconify {
		color: $orange-50;
		background-color: $orange-50;
		--color-gray-900: $orange-50;
	}

	&__field {
		position: relative;
		height: 56px;
		display: grid;
		align-items: flex-end;
		background-color: $grey-5;
		box-shadow: inset 0 -1px 0 0 $grey-20;
		// border-bottom: 1px solid $grey-20;
		border-radius: 4px 4px 0 0;
		padding: 12px;

		&:hover {
			background-color: $grey-10;
		}

		&::after {
			position: absolute;
			content: "";
			top: 0;
			bottom: 0;
			right: 16px;
			width: 8px;
			height: 8px;
			border-top: 2px solid #969ba0;
			border-right: 2px solid #969ba0;
			transform: rotate(135deg);
			transition: transform .15s ease;
			pointer-events: none;
			margin: auto 0;
		}
	}

	&__label {
		position: absolute;
		top: 20px;
		left: 12px;
		font-size: 18px;
		transform-origin: left;
		transition: transform 150ms linear;
		transform: translateY(-70%) scale(.7);
	}

	&__value {
		line-height: 150%;
	}

	&__options {
		display: none;
		position: absolute;
	}

	&_opened {
		.select__field {
			&::after {
				transform: rotate(-45deg);
			}
		}

		.select__options {
			display: block;
		}

		.select__label {
			transform: translateY(-70%) scale(.7);
		}
	}
}
</style>