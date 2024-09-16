<template>
	<main class="main clients">
		<TheSection>
			<h1 class="title-h1">Клиенты</h1>

			<AppForm :border="true" :three-columns="true">
				<AppInput id="lastname" label="Фамилия"></AppInput>
				<AppInput id="name" label="Имя"></AppInput>
				<AppInput id="fname" label="Отчество"></AppInput>
				<AppInput id="phone" label="Телефон" type="tel"></AppInput>
				<AppInput id="add-phone" label="Доп. телефон" type="tel"></AppInput>
				<AppInput id="add-phone-2" label="Доп. телефон 2" type="tel"></AppInput>
				<AppInput id="date-birth" label="Дата рождения" type="text"></AppInput>
				<AppSelect class="form__field form__field_span-2" :options="regions" label="Регион"></AppSelect>
			</AppForm>
		</TheSection>
		<TheSection>
			<AppTable :table="table"></AppTable>
		</TheSection>
	</main>
</template>

<script>
export default {
	data() {
		return {
			table: {
				thead: [
					'Имя клиента',
					'Зафиксирован до', 'Телефон',
					'дата рождения',
					'статус фиксации клиента',
					'дата первой фиксации',
					'агент'
				],

				clients: [
					{
						name: 'имя 1',
						fixed: '10/10',
						phone: '7900',
						birth: '1/1/2',
						fixed_status: '1/1/2',
						fixed_first: '112/1/2',
						agent: 'менеджер м.м',
					},
					{
						name: 'имя 1',
						fixed: '10/10',
						phone: '7900',
						birth: '1/1/2',
						fixed_status: '1/1/2',
						fixed_first: '112/1/2',
						agent: 'менеджер м.м',
					},
					{
						name: 'имя 1',
						fixed: '10/10',
						phone: '7900',
						birth: '1/1/2',
						fixed_status: '1/1/2',
						fixed_first: '112/1/2',
						agent: 'менеджер м.м',
					},
					{
						name: 'имя 1',
						fixed: '10/10',
						phone: '7900',
						birth: '1/1/2',
						fixed_status: '1/1/2',
						fixed_first: '112/1/2',
						agent: 'менеджер м.м',
					},
					{
						name: 'имя 1',
						fixed: '10/10',
						phone: '7900',
						birth: '1/1/2',
						fixed_status: '1/1/2',
						fixed_first: '112/1/2',
						agent: 'менеджер м.м',
					},
				]
			},
			regions: [
				'Санкт-Петербург',
				'Москва',
				'Екатеринбург',
			],
			selected: this.regions,
		}
	},
}
</script>

<style lang="scss" scoped>
.form {
	&__field {
		&_span-2 {
			grid-column: span 2;
		}
	}
}
</style>