import React, { Dispatch } from 'react';
import { Box } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, Row, useReactTable } from '@tanstack/react-table';
import styles from './BasicTable.module.sass';
import { RepDetailsDataDto, Repository, RepTableDataDto } from 'src/models/tasks';

type Props = {
	columns: Array<ColumnDef<Repository, string>>;
	data: Repository[];
	setRowData?: Dispatch<React.SetStateAction<Row<Repository> | null>>
};

const BasicTable = ({
	columns,
	data,
	setRowData,
}: Props) => {

	const table = useReactTable({
		data,
		columns,
		debugTable: true,
		debugHeaders: true,
		debugColumns: false,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
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
