import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import useAppDispatch from 'src/store/hooks/useAppDispatch';
import { setSearchRepoRequest } from 'src/store/slices/searchRepoRequest';

const Pagination = () => {
	const reposData = useSelector((state: RootState) => state.reposData);
	const searchRepoRequest = useSelector((state: RootState) => state.searchRepoRequest);
	const dispatch = useAppDispatch();
  
	const handleChangePage = (
	  event: React.MouseEvent<HTMLButtonElement> | null,
	  newPage: number,
	) => {
		dispatch(setSearchRepoRequest({ ...searchRepoRequest, page: newPage + 1}));
	};
  
	const handleChangeRowsPerPage = (
	  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		dispatch(setSearchRepoRequest({ ...searchRepoRequest, per_page: parseInt(event.target.value, 10), page: 1}));
	};

	return (
		<TablePagination
			component="div"
			count={reposData.total_count}
			page={searchRepoRequest.page ? (searchRepoRequest.page - 1) : 1}
			onPageChange={handleChangePage}
			rowsPerPage={searchRepoRequest.per_page || 7}
			onRowsPerPageChange={handleChangeRowsPerPage}
			rowsPerPageOptions={[3, 5, 7]} 
		/>
	);
};

export default Pagination;
