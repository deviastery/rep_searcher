import React, { Dispatch, SetStateAction, useState } from 'react';
import { Box } from '@mui/material';

import styles from './RepWorkSpace.module.sass';
import { RepDetailsDataDto, Repository, SearchRepositoriesRequest } from 'src/models/tasks';
import RepDetailsWorkSpace from '../repositories-details/RepDetailsWorkSpace';
import RepTableWorkSpace from '../repositories-table/RepTableWorkSpace';

type Props = {
	repData: Repository[];
  searchRep: SearchRepositoriesRequest;
  setSearchRep: Dispatch<SetStateAction<SearchRepositoriesRequest>>;
};

const RepWorkSpace = ({ repData, searchRep, setSearchRep }: Props) => {
  const [repDetailsData, setRepDetailsData] = useState<RepDetailsDataDto | null>(null)
  
  return !repData || !repData?.length ? (
		<Box className={styles.notData}>
			Добро пожаловать
		</Box>
	) : (
    <Box className={styles.repWorkSpace}>
      <RepTableWorkSpace repTableData={repData || []} setRepDetailsData={setRepDetailsData} searchRep={searchRep} setSearchRep={setSearchRep}/>
      <RepDetailsWorkSpace repDetailsData={repDetailsData}/>
    </Box>
  );
}

export default RepWorkSpace;
