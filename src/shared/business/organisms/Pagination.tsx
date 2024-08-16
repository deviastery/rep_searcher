import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import useAppDispatch from 'src/store/hooks/useAppDispatch';

type Props<T> = {
	pagesInfo: T;
	setPagesInfo: ActionCreatorWithPayload<T>;
	countResults: number;
};

const Pagination = <T extends { page?: number; per_page?: number }>({
	pagesInfo,
	setPagesInfo,
	countResults,
}: Props<T>) => {
	const dispatch = useAppDispatch();

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		dispatch(setPagesInfo({ ...pagesInfo, page: newPage + 1 }));
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch(setPagesInfo({ ...pagesInfo, per_page: parseInt(event.target.value, 10), page: 1 }));
	};

	return (
		<TablePagination
			component="div"
			count={countResults}
			page={pagesInfo.page ? pagesInfo.page - 1 : 1}
			onPageChange={handleChangePage}
			rowsPerPage={pagesInfo.per_page || 7}
			onRowsPerPageChange={handleChangeRowsPerPage}
			rowsPerPageOptions={[3, 5, 7]}
		/>
	);
};

export default Pagination;
