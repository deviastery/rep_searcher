import React from 'react';
import { Box } from '@mui/material';
import styles from './PageTemplate.module.sass';

type Props = {
	children: React.ReactNode;
};

const PageTemplate = ({ children }: Props) => {
	return <Box className={styles.workspace}>{children}</Box>;
};

export default PageTemplate;
