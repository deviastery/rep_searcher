import React from 'react';
import { Box } from '@mui/material';

import styles from './SearchResult.module.scss';
import { RepDataDto, SearchRepositoriesResponse } from '@/models/tasks';
import BasicTable from 'src/shared/business/organisms/BasicTable';
import GetRepTableColumns from './repTableColumns';
import { ColumnDef } from '@tanstack/table-core';

type Props = {
	repData: SearchRepositoriesResponse | undefined;
};

const SearchResult = ({ repData }: Props) => {
  return (
    <Box className={styles.workSpace}>
      <BasicTable
        data={repData?.items || []}
        columns={GetRepTableColumns() as ColumnDef<RepDataDto, string>[]}
      />
    </Box>
  );
}

export default SearchResult;
