import React, { Dispatch, } from 'react';
import { Box } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, Row, SortingState, useReactTable } from '@tanstack/react-table';
import styles from './BasicTable.module.sass';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type Props<T, S> = {
	columns: Array<ColumnDef<T, S>>;
	data: T[];
	setRowData?: Dispatch<React.SetStateAction<Row<T> | null>>;
};

const BasicTable = <T, S>({
	columns,
	data,
	setRowData,
}: Props<T, S>) => {
	const [sorting, setSorting] = React.useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		debugTable: true,
		debugHeaders: true,
		debugColumns: false,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		state: {
			sorting,
		},
	});

	return (
		<Box className={styles.tableTemplate}>
			<table className={styles.table}>
				{table.getHeaderGroups().map((headerGroup) => (
					<thead key={headerGroup.id}>
						<tr key={headerGroup.id} className={styles.tableHeaderRow}>
							{headerGroup.headers.map((header) => (
								<th 
									key={header.id} 
									style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
									className={styles.tableHeaderCell}
									onClick={header.column.getToggleSortingHandler()}
								>
									<Box className={styles.tableHeaderTitle}>
										{header.column.getIsSorted() === 'asc' ? 
											<ArrowUpwardIcon className={styles.tableHeaderIcon}/> : 
											header.column.getIsSorted() === 'desc' ? 
												<ArrowDownwardIcon className={styles.tableHeaderIcon} /> : 
												null}
										{flexRender(header.column.columnDef.header, header.getContext())}
									</Box>
								</th>
							))}
						</tr>
					</thead>
				))}
				<tbody>
					{table.getRowModel().rows.map((row) => (
							<tr key={row.id} className={styles.tableRow} onClick={() => setRowData && setRowData(row)}>
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
