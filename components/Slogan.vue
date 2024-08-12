<template>
	<div class="slogan">
		<span class="slogan__item slogan__item_primary">Агентский портал «КВС». </span>
		<span class="slogan__item">Строим мир — строим отношения!</span>
	</div>
</template>

<style lang="scss" scoped>
.slogan {
	&__item {
		font-size: 15px;
		font-weight: 500;
		
		&_primary {
			color: $orange-50;
		}
	}
}

@media screen and (max-width: 975px) {
	.slogan {
		display: grid;
	}
}
</style>