<template>
	<ul class="header-user-actions">
		<li class="header-user-actions__item">
			<nuxt-link
				class="header-user-actions__link header-user-actions__link_orange"
				to="#"
			>
				<SvgUser></SvgUser>
				<span class="header-user-actions__description">Личный кабинет</span>
			</nuxt-link>
		</li>
		<li class="header-user-actions__item">
			<nuxt-link
				class="header-user-actions__link"
				to="#"
			>
				<SvgLogout></SvgLogout>
				<span class="header-user-actions__description">Выйти</span>
			</nuxt-link>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.header-user-actions {
	display: flex;

	&__link {
		width: 72px;
		height: 72px;
		display: grid;
		justify-items: center;
		align-items: center;
		row-gap: 10px;
		border-left: 1px solid $dark-70;

		&:hover {
			background-color: $dark-70;
		}

		&_orange {
			background-color: $orange-50;

			&:hover {
				background-color: $orange-60;
			}
		}
	}

	&__description {
		display: none;
	}
}

@media screen and (max-width: 975px) {
	.header-user-actions {
		&__item {
			flex: 1;
		}

		&__link {
			width: 100%;
			height: auto;
			border-left-color: $grey-5;
			text-align: center;
			padding: 8px 16px;

			svg {
				--currentColor: #{$dark-80};
			}

			&:hover {
				background: none;
			}

			&_orange {
				color: $white;
				border: none;

				svg {
					--currentColor: #{$white};
				}

				&:hover {
					background-color: $orange-60;
				}
			}
		}

		&__description {
			display: block;
		}
	}
}
</style>