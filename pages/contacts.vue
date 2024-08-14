<template>
	<main class="main contacts">
		<TheSection>
			<h1 class="title-h1">Команда поддержки Agent КВС</h1>

			<ul class="contacts__list manager-list">
				<li class="manager-list__item" v-for="(manager, index) in managers" :key="index">
					<ManagerCard :manager="manager"></ManagerCard>
				</li>
			</ul>
		</TheSection>

		<TheSection>
			<h2 class="title-h2">Общая почта отдела</h2>
			<a class="link-gey" href="mailto:an@kvsspb.ru">an@kvsspb.ru</a>
		</TheSection>
	</main>
</template>

<script>
export default {
	data() {
		return {
			managers: [
				{
					name: 'Юрченко Евгения',
					role: 'Начальник отдела региональных и агентских продаж',
					phone_mobile: '+7 900 123 1234',
					phone_office: '8 812 210 3800',
					phone_office_add: '000',
					email: 'a.brel@kvsspb.ru',
					img: '/kvs-eagent/images/manager.jpg',
				},
				{
					name: 'Горлова Юлия',
					role: 'Менеджер отдела региональных и агентских продаж',
					phone_mobile: '+7 900 123 1234',
					phone_office: '8 812 210 3800',
					phone_office_add: '000',
					email: 'a.brel@kvsspb.ru',
					img: '/kvs-eagent/images/manager.jpg',
				},
				{
					name: 'Гурьянова Наталья',
					role: 'Менеджер отдела региональных и агентских продаж',
					phone_mobile: '+7 900 123 1234',
					phone_office: '8 812 210 3800',
					phone_office_add: '000',
					email: 'a.brel@kvsspb.ru',
					img: '/kvs-eagent/images/manager.jpg',
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.manager-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 28px;
}

@media screen and (max-width: 1439px) {
	.manager-list {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 975px) {
	.manager-list {
		grid-template-columns: 1fr;
		gap: 20px;
	}
}
</style>