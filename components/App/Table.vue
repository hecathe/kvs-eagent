<template>
	<table class="table">
		<thead class="table__head">
			<tr class="table__row">
				<th class="table__cell table__cell_head" v-for="(item, index) in table.thead" :key="index">{{ item }}</th>
			</tr>
		</thead>
		<tbody class="table__body">
			<tr class="table__row" v-for="(client, index) in table.clients" :key="index">
				<td class="table__cell" v-for="(clientInfo, index) in client" :key="index">{{ clientInfo }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props: {
		table: {
			type: Object,
			default: () => {},
		}
	}
}
</script>

<style lang="scss" scoped>
.table {
	width: 100%;

	&__head {
		color: $white;
		background-color: $dark-50;
	}

	&__row {
		&:not(.table__head .table__row) {
			border-bottom: 1px solid $grey-10;
		}
	}
	
	&__cell {
		text-align: left;
		padding: 20px 10px;

		&_head {
			font-size: 12px;
			line-height: 120%;
			text-transform: uppercase;
			padding: 10px;
		}
	}
}
</style>