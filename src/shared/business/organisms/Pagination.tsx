import React, { Dispatch, SetStateAction } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { SearchRepositoriesRequest } from 'src/models/tasks';

type Props = {
	pagesInfo: SearchRepositoriesRequest;
	setPagesInfo: Dispatch<SetStateAction<SearchRepositoriesRequest>>;
};

const Pagination = ({ pagesInfo, setPagesInfo }: Props) => {
  
	const handleChangePage = (
	  event: React.MouseEvent<HTMLButtonElement> | null,
	  newPage: number,
	) => {
	  setPagesInfo({ ...pagesInfo, page: newPage + 1});
	};
  
	const handleChangeRowsPerPage = (
	  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
	  setPagesInfo({ ...pagesInfo, per_page: parseInt(event.target.value, 10), page: 1});
	  console.log('perPage: ', parseInt(event.target.value, 10));
	};

	return (
		<TablePagination
			component="div"
			count={100}
			page={pagesInfo.page ? (pagesInfo.page - 1) : 1}
			onPageChange={handleChangePage}
			rowsPerPage={pagesInfo.per_page || 7}
			onRowsPerPageChange={handleChangeRowsPerPage}
			rowsPerPageOptions={[3, 5, 7]} 
		/>
	);
};

export default Pagination;
