import React from 'react';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import { Box } from '@mui/material';
import { Row } from '@tanstack/table-core';
import { Repository } from 'src/models/repos';
import TopicBox from 'src/shared/business/molecules/TopicBox';
import styles from './RepDetailsWorkSpace.module.sass';

type Props = {
	repDetailsData: Row<Repository> | null; //данныe для деталей репозитория
};

const RepDetailsWorkSpace = ({ repDetailsData }: Props) => {
	if (!repDetailsData) {
		return <Box className={styles.notData}>Выберите репозиторий</Box>;
	}

	const { name, language, stargazers_count, topics, license } = repDetailsData.original;
	const allTopics = language ? [language, ...topics] : topics;

	return (
		<Box className={styles.workSpace}>
			<Box className={styles.tableTitle}>{name}</Box>
			<Box className={styles.iconsBox}>
				{language && <TopicBox styleOverrides={{ backgroundColor: '#2196F3', color: '#FFFFFF' }}>{language}</TopicBox>}
				<Box className={styles.stargazersBox}>
					<StarSharpIcon className={styles.starIcon} />
					{stargazers_count}
				</Box>
			</Box>
			<Box className={styles.topicsBox}>
				{allTopics.map((topic, index) => (
					<TopicBox key={index}>{topic}</TopicBox>
				))}
			</Box>
			{license && <Box className={styles.textBox}>{license.name}</Box>}
		</Box>
	);
};

export default RepDetailsWorkSpace;
