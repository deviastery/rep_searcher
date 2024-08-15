import React, { useState } from 'react';
import { Box } from '@mui/material';

import styles from './RepWorkSpace.module.sass';
import { Repository } from 'src/models/tasks';
import RepDetailsWorkSpace from '../repositories-details/RepDetailsWorkSpace';
import RepTableWorkSpace from '../repositories-table/RepTableWorkSpace';
import { Row } from '@tanstack/table-core';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';

const RepWorkSpace = () => {
  const reposData = useSelector((state: RootState) => state.reposData);

  const [repDetailsData, setRepDetailsData] = useState<Row<Repository> | null>(null);
  
  return !reposData?.items || !reposData?.items?.length ? (
		<Box className={styles.notData}>
			Добро пожаловать
		</Box>
	) : (
    <Box className={styles.repWorkSpace}>
      <RepTableWorkSpace
        setRepDetailsData={setRepDetailsData}
      />
      <RepDetailsWorkSpace repDetailsData={repDetailsData}/>
    </Box>
  );
}

export default RepWorkSpace;
