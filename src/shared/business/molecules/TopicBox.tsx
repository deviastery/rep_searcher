import React, { Dispatch, SetStateAction } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { SearchRepositoriesRequest } from 'src/models/tasks';
import styles from './TopicBox.module.sass';
import { Box } from '@mui/material';

type Props = {
	children: string;
	styleOverrides?: React.CSSProperties;
};

const TopicBox = ({ children, styleOverrides }: Props) => {
	return (
		<Box className={styles.topicBox} style={styleOverrides}>{children}</Box>
	);
};

export default TopicBox;
