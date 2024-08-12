<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__item">2020, Группа компаний «КВС»</div>
			<div class="footer__item">
				<nuxt-link class="footer__link" to="#">Политика конфиденциальности</nuxt-link>
			</div>
			<div class="footer__item">
				<SocialList :socials="social"></SocialList>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			social: [
				{
					link: '#',
					icon: '/icons/telegram-white.svg',
				},
				{
					link: '#',
					icon: '/icons/youtube.svg',
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.footer {
	color: $dark-50;
	background-color: $dark-80;
	padding: 24px 0;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__link {
		&:hover {
			color: $dark-70;
		}
	}
}

@media screen and (max-width: 767px) {
	.footer {
		.container {
			flex-direction: column-reverse;
			row-gap: 10px;
		}
	}
}
</style>