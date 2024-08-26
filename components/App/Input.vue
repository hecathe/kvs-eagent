<template>
	<div class="input">
		<input class="input__field" :id="id" :type="type">
		<label class="input__label" :class="{'not-empty': value !== ''}" :for="id">{{ label }}</label>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'text',
		},
		id: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped>
.input {
	position: relative;
	display: flex;

	&__label {
		position: absolute;
		top: 20px;
		left: 12px;
		font-size: 18px;
		transform-origin: left;
		transition: transform 150ms linear;
	}

	&__field {
		width: 100%;
		height: 56px;
		display: flex;
		background-color: $grey-5;
		border-radius: 4px 4px 0 0;
		box-shadow: inset 0 -1px 0 0 $grey-20;
		padding: 20px 12px 8px;
		outline: none;
		transition: all 150ms linear;

		&:hover {
			background-color: $grey-10;
		}

		&:focus {
			background-color: $grey-10;
			box-shadow: inset 0 -2px 0 0 $orange-50;

			& + .input__label {
				transform: translateY(-70%) scale(.7);
			}
		}
	}

	
}
</style>