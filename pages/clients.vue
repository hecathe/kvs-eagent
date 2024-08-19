<template>
	<main class="main clients">
		<TheSection>
			<h1 class="title-h1">Клиенты</h1>

			<form>
				<AppInput id="fio" label="Фамилия *"></AppInput>
			</form>
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
			}
		}
	},
}
</script>