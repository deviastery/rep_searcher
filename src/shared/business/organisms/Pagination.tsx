import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import useAppDispatch from 'src/store/hooks/useAppDispatch'; // Импортируем хук для отправки действий в Redux store

// Тип пропсов для компонента Pagination
type Props<T> = {
	pagesInfo: T; // Объект с информацией о страницах (например, текущая страница, количество элементов на странице)
	setPagesInfo: ActionCreatorWithPayload<T>; // Action для обновления информации о страницах в Redux store
	countResults: number; // Общее количество результатов, для которых нужна пагинация
};

// Компонент Pagination
const Pagination = <T extends { page?: number; per_page?: number }>({
	pagesInfo,
	setPagesInfo,
	countResults,
}: Props<T>) => {
	const dispatch = useAppDispatch(); // Получаем функцию dispatch для отправки действий

	// Обработчик изменения страницы
	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		dispatch(setPagesInfo({ ...pagesInfo, page: newPage + 1 })); // Отправляем action для обновления номера страницы в Redux store
	};

	// Обработчик изменения количества элементов на странице
	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch(setPagesInfo({ ...pagesInfo, per_page: parseInt(event.target.value, 10), page: 1 })); // Отправляем action для обновления количества элементов на странице и сброса номера страницы на 1
	};

	return (
		<TablePagination
			component="div" // Указываем компонент, который будет использоваться в качестве контейнера для пагинации
			count={countResults} // Общее количество результатов
			page={pagesInfo.page ? pagesInfo.page - 1 : 1} // Номер текущей страницы (с учетом индексации с 0)
			onPageChange={handleChangePage} // Обработчик изменения страницы
			rowsPerPage={pagesInfo.per_page || 7} // Количество элементов на странице
			onRowsPerPageChange={handleChangeRowsPerPage} // Обработчик изменения количества элементов на странице
			rowsPerPageOptions={[3, 5, 7]} // Список доступных вариантов количества элементов на странице
		/>
	);
};

export default Pagination;
