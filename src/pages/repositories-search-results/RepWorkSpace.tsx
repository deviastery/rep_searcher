import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { Row } from '@tanstack/table-core';
import { Repository } from 'src/models/repos';
import RepDetailsWorkSpace from 'src/pages/repositories-details/RepDetailsWorkSpace';
import RepTableWorkSpace from 'src/pages/repositories-table/RepTableWorkSpace';
import { RootState } from 'src/store/store';
import styles from './RepWorkSpace.module.sass';

const RepWorkSpace = () => {
	const reposData = useSelector((state: RootState) => state.reposData);
	const [repDetailsData, setRepDetailsData] = useState<Row<Repository> | null>(null);

	return !reposData?.items || !reposData?.items?.length ? (
		<Box className={styles.notData}>Добро пожаловать</Box>
	) : (
		<Box className={styles.repWorkSpace}>
			<RepTableWorkSpace setRepDetailsData={setRepDetailsData} />
			<RepDetailsWorkSpace repDetailsData={repDetailsData} />
		</Box>
	);
};

export default RepWorkSpace;
