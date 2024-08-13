import React from 'react';
import { Box } from '@mui/material';

import styles from './RepTableWorkSpace.module.sass';
import { RepDetailsDataDto, Repository, RepTableDataDto } from 'src/models/tasks';
import BasicTable from 'src/shared/business/organisms/BasicTable';
import { ColumnDef } from '@tanstack/table-core';
import GetRepTableColumns from '../repositories-search-results/repTableColumns';
import { getRowDetails } from 'src/shared/utils/getData/getRowDetails';

type Props = {
	repTableData: Repository[];
	setRepDetailsData: React.Dispatch<React.SetStateAction<RepDetailsDataDto | null>>;
};

const RepTableWorkSpace = ({ repTableData, setRepDetailsData }: Props) => {
  return (
    <Box className={styles.tableWorkSpace}>
        <Box className={styles.tableTitle}>Результаты поиска</Box>
        <BasicTable
          data={repTableData}
          columns={GetRepTableColumns() as ColumnDef<Repository, string>[]}
          setRowData={setRepDetailsData}
          getRowData={getRowDetails}
        />
    </Box>
  );
}

export default RepTableWorkSpace;
