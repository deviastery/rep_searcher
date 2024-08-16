import React from 'react';
import { Box } from '@mui/material';
import styles from './TopicBox.module.sass';

type Props = {
	children: string;
	styleOverrides?: React.CSSProperties; //новые стили
};

const TopicBox = ({ children, styleOverrides }: Props) => {
	return (
		<Box className={styles.topicBox} style={styleOverrides}>
			{children}
		</Box>
	);
};

export default TopicBox;
