import React from 'react';
import { Box } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, Row, useReactTable } from '@tanstack/react-table';
import styles from './BasicTable.module.scss';

// const Box = styledMui(MuiBox)(({ theme }) => ({
// 	backgroundColor: theme.palette.common.white,
// 	height: 'fit-content',
// 	width: '100%',
// 	borderRadius: theme.spacing(2.5),
// 	padding: '0',
// 	paddingBottom: theme.spacing(5),
// }));

// const Table = styled.table`
// 	border-spacing: 20;
// 	border-radius: 10px;
// 	height: fit-content;
// 	width: 100%;
// 	box-shadow: 0px 1px rgba(0, 0, 0, 0.329);
// 	border-collapse: collapse;
// `;

// const TableHeaderRow = styled.tr`
// 	border-bottom: 1px solid rgba(0, 0, 0, 0.329);
// `;

// const TableHeaderCell = styled.th`
// 	text-align: left;
// 	white-space: nowrap;
// 	padding: 16px 0 8px 12px;
// `;

// const TableCell = styled.td`
// 	padding: 12px;
// 	& > p {
// 		font-size: 14px;
// 	}
// `;

// const TableRow = styled.tr`
// 	border-bottom: 1px solid rgba(0, 0, 0, 0.329);
// 	&:last-child {
// 		border-bottom: none;
// 	}
// `;

type Props<T, S> = {
	columns: Array<ColumnDef<T, S>>;
	data: T[];
};

const BasicTable = <T, S>({
	columns,
	data,
}: Props<T, S>) => {

	const table = useReactTable({
		data,
		columns,
		debugTable: true,
		debugHeaders: true,
		debugColumns: false,
		getCoreRowModel: getCoreRowModel(),
	});

	return !data || !data?.length ? (
		<Box className={styles.notData}>
			Добро пожаловать
		</Box>
	) : (
		<Box className={styles.tableTemplate}>
			<table className={styles.table}>
				{table.getHeaderGroups().map((headerGroup) => (
					<thead key={headerGroup.id}>
						<tr key={headerGroup.id} className={styles.tableHeaderRow}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className={styles.tableHeaderCell}>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					</thead>
				))}
				<tbody>
					{table.getRowModel().rows.map((row) => (
							<tr key={row.id} className={styles.tableRow}>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										style={{
											width: cell.column.getSize(),
										}}
										className={styles.tableCell}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
					))}
				</tbody>
			</table>
		</Box>
	);
};

export default BasicTable;
