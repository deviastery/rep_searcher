import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import styles from './RepWorkSpace.module.sass';
import { RepDetailsDataDto, RepTableDataDto, Repository } from 'src/models/tasks';
import BasicTable from 'src/shared/business/organisms/BasicTable';
import GetRepTableColumns from './repTableColumns';
import { ColumnDef } from '@tanstack/table-core';
import RepDetailsWorkSpace from '../repositories-details/RepDetailsWorkSpace';
import RepTableWorkSpace from '../repositories-table/RepTableWorkSpace';

type Props = {
	repData: Repository[];
};

const RepWorkSpace = ({ repData }: Props) => {
  const [repDetailsData, setRepDetailsData] = useState<RepDetailsDataDto | null>(null)
  
  return !repData || !repData?.length ? (
		<Box className={styles.notData}>
			Добро пожаловать
		</Box>
	) : (
    <Box className={styles.repWorkSpace}>
      <RepTableWorkSpace repTableData={repData || []} setRepDetailsData={setRepDetailsData}/>
      <RepDetailsWorkSpace repDetailsData={repDetailsData}/>
    </Box>
  );
}

export default RepWorkSpace;
