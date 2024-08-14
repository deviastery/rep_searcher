import React, { Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/material';

import styles from './RepTableWorkSpace.module.sass';
import { RepDetailsDataDto, Repository, SearchRepositoriesRequest } from 'src/models/tasks';
import BasicTable from 'src/shared/business/organisms/BasicTable';
import { ColumnDef } from '@tanstack/table-core';
import GetRepTableColumns from '../repositories-search-results/repTableColumns';
import { getRowDetails } from 'src/shared/utils/getData/getRowDetails';
import Pagination from 'src/shared/business/organisms/Pagination';

type Props = {
	repTableData: Repository[];
  searchRep: SearchRepositoriesRequest;
  setSearchRep: Dispatch<SetStateAction<SearchRepositoriesRequest>>;
	setRepDetailsData: React.Dispatch<SetStateAction<RepDetailsDataDto | null>>;
};

const RepTableWorkSpace = ({ repTableData, searchRep, setSearchRep, setRepDetailsData }: Props) => {
  return (
    <Box className={styles.tableWorkSpace}>
        <Box className={styles.tableTitle}>Результаты поиска</Box>
        <BasicTable
          data={repTableData}
          columns={GetRepTableColumns() as ColumnDef<Repository, string>[]}
          setRowData={setRepDetailsData}
          getRowData={getRowDetails}
        />
        <Pagination pagesInfo={searchRep} setPagesInfo={setSearchRep}/>
    </Box>
  );
}

export default RepTableWorkSpace;
