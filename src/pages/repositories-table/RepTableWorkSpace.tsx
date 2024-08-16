import React, { SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { ColumnDef, Row } from '@tanstack/table-core';
import { Repository } from 'src/models/repos';
import GetRepTableColumns from 'src/pages/repositories-search-results/repTableColumns';
import BasicTable from 'src/shared/business/organisms/BasicTable';
import Pagination from 'src/shared/business/organisms/Pagination';
import { setSearchRepoRequest } from 'src/store/slices/searchRepoRequest';
import { RootState } from 'src/store/store';
import styles from './RepTableWorkSpace.module.sass';

type Props = {
	setRepDetailsData: React.Dispatch<SetStateAction<Row<Repository> | null>>;
};

const RepTableWorkSpace = ({ setRepDetailsData }: Props) => {
	const reposData = useSelector((state: RootState) => state.reposData);
	const searchRepoRequest = useSelector((state: RootState) => state.searchRepoRequest);

	return (
		<Box className={styles.tableWorkSpace}>
			<Box className={styles.tableTitle}>Результаты поиска</Box>
			<BasicTable
				data={reposData.items}
				columns={GetRepTableColumns() as ColumnDef<Repository, string>[]}
				setRowData={setRepDetailsData}
			/>
			<Pagination
				pagesInfo={searchRepoRequest}
				setPagesInfo={setSearchRepoRequest}
				countResults={reposData.total_count}
			/>
		</Box>
	);
};

export default RepTableWorkSpace;
