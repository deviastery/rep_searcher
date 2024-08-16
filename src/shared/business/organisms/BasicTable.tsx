import React, { Dispatch, SetStateAction, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box } from '@mui/material';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	Row,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import styles from './BasicTable.module.sass';

// Тип пропсов для компонента BasicTable
type Props<T, S> = {
	columns: Array<ColumnDef<T, S>>; // Массив колонок таблицы
	data: T[]; // Массив данных для таблицы
	setRowData?: Dispatch<SetStateAction<Row<T> | null>>; // Функция для обновления выбранной строки (необязательно)
};

// Компонент BasicTable для отображения таблицы
const BasicTable = <T, S>({ columns, data, setRowData }: Props<T, S>) => {
	// Состояние для отслеживания сортировки
	const [sorting, setSorting] = useState<SortingState>([]);

	// Инициализация таблицы с помощью useReactTable
	const table = useReactTable({
		data, // Данные для таблицы
		columns, // Определение колонок
		debugTable: true, // Включить отладку таблицы
		debugHeaders: true, // Включить отладку заголовков
		debugColumns: false, // Выключить отладку колонок
		getCoreRowModel: getCoreRowModel(), // Получить модель для базовой таблицы
		getSortedRowModel: getSortedRowModel(), // Получить модель для сортировки таблицы
		onSortingChange: setSorting, // Обработчик изменения сортировки
		state: {
			sorting, // Текущее состояние сортировки
		},
	});

	return (
		<Box className={styles.tableTemplate}>
			<table className={styles.table}>
				{/* Рендеринг заголовков таблицы */}
				{table.getHeaderGroups().map((headerGroup) => (
					<thead key={headerGroup.id}>
						<tr key={headerGroup.id} className={styles.tableHeaderRow}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }} // Установить курсор в виде указателя, если колонка сортируема
									className={styles.tableHeaderCell}
									onClick={header.column.getToggleSortingHandler()} // Обработчик клика для переключения сортировки
								>
									<Box className={styles.tableHeaderTitle}>
										{/* Отображение иконки сортировки */}
										{header.column.getIsSorted() === 'asc' ? (
											<ArrowUpwardIcon className={styles.tableHeaderIcon} />
										) : header.column.getIsSorted() === 'desc' ? (
											<ArrowDownwardIcon className={styles.tableHeaderIcon} />
										) : null}
										{/* Рендеринг заголовка колонки с помощью flexRender */}
										{flexRender(header.column.columnDef.header, header.getContext())}
									</Box>
								</th>
							))}
						</tr>
					</thead>
				))}
				{/* Рендеринг тела таблицы */}
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className={styles.tableRow} onClick={() => setRowData && setRowData(row)}>
							{' '}
							{/* Обработчик клика для обновления выбранной строки */}
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									style={{
										width: cell.column.getSize(), // Установить ширину ячейки в соответствии с размером колонки
									}}
									className={styles.tableCell}
								>
									{/* Рендеринг ячейки с помощью flexRender */}
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
