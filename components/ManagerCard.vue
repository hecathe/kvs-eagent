<template>
	<div class="manager-card">
		<div class="manager-card__image">
			<img :src="manager.img" alt="">
		</div>
		<div class="manager-card__info">
			<div class="manager-card__wrap">
				<div class="manager-card__name">{{ manager.name }}</div>
				<div class="manager-card__role">{{ manager.role }}</div>
			</div>
			<div class="manager-card__wrap">
				<a 
					class="manager-card__link" 
					:href="`tel:${manager.phone_mobile}`"
				>{{ manager.phone_mobile }}</a>
				<a 
					class="manager-card__link" 
					:href="`tel:${manager.phone_office}`"
				>
					{{ manager.phone_office }}, доб. {{ manager.phone_office_add }}
				</a>
			</div>
			<div class="manager-card__wrap">
				<a 
					class="manager-card__link manager-card__link_mail manager-card__link_arrow" 
					:href="`mailto:${manager.email}`"
				>
					<span>{{ manager.email }}</span>
					<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.375 2.125L9.09369 6.84369L4.375 11.5624" stroke="#F4691B" stroke-width="2"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		manager: {
			type: Object,
			default: () => {},
		}
	}
}
</script>

<style lang="scss" scoped>
.manager-card {
	font-size: 14px;
	display: grid;
	grid-template-columns: minmax(auto, 168px) 1fr;
	border: 1px solid $grey-15;
	border-radius: 4px;
	overflow: hidden;

	&__image {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 12px;
		padding: 20px;
	}

	&__wrap {
		display: grid;
		row-gap: 4px;
	}

	&__name {
		font-weight: 700;
		font-size: 20px;
	}

	&__role {
		color: $dark-50;
	}

	&__link {
		&:hover {
			color: $orange-50;
		}

		&_mail {
			text-transform: uppercase;
		}

		&_arrow {
			position: relative;
			width: max-content;
			display: flex;
			align-items: center;
			column-gap: 4px;

			svg {
				transition: transform 150ms linear;
			}

			&:hover {
				svg {
					transform: translateX(6px);
				}
			}
		}
	}
}

@media screen and (max-width: 450px) {
	.manager-card {
		grid-template-columns: 1fr;

		&__image {
			max-height: 300px;
		}
	}
}
</style>