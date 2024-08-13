import React from 'react';
import { Box } from '@mui/material';

import styles from './RepDetailsWorkSpace.module.sass';
import { RepDetailsDataDto } from 'src/models/tasks';

type Props = {
	repDetailsData: RepDetailsDataDto | null;
};

const RepDetailsWorkSpace = ({ repDetailsData }: Props) => {
  return !repDetailsData ? (
		<Box className={styles.workSpace}>
      Выберете репозиторий
    </Box>
	) : (
    <Box className={styles.workSpace}>
      Something
    </Box>
  );
}

export default RepDetailsWorkSpace;
