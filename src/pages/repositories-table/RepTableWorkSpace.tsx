import React, { Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/material';

import styles from './RepTableWorkSpace.module.sass';
import { Repository, SearchRepositoriesRequest } from 'src/models/tasks';
import BasicTable from 'src/shared/business/organisms/BasicTable';
import { ColumnDef, Row } from '@tanstack/table-core';
import GetRepTableColumns from '../repositories-search-results/repTableColumns';
import Pagination from 'src/shared/business/organisms/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

type Props = {
	setRepDetailsData: React.Dispatch<SetStateAction<Row<Repository> | null>>;
};

const RepTableWorkSpace = ({ setRepDetailsData }: Props) => {
  const repData = useSelector((state: RootState) => state.reposData);

  return (
    <Box className={styles.tableWorkSpace}>
        <Box className={styles.tableTitle}>Результаты поиска</Box>
        <BasicTable
          data={repData.items}
          columns={GetRepTableColumns() as ColumnDef<Repository, string>[]}
          setRowData={setRepDetailsData}
        />
        <Pagination/>
    </Box>
  );
}

export default RepTableWorkSpace;
