import React from 'react';
import { Box } from '@mui/material';
import StarSharpIcon from '@mui/icons-material/StarSharp';

import styles from './RepDetailsWorkSpace.module.sass';
import { RepDetailsDataDto } from 'src/models/tasks';

type Props = {
	repDetailsData: RepDetailsDataDto | null;
};

const RepDetailsWorkSpace = ({ repDetailsData }: Props) => {
  if (!repDetailsData) {
    return (
      <Box className={styles.notData}>
        Выберите репозиторий
      </Box>
    );
  }

  const { name, language, stargazers_count, description, license } = repDetailsData;
  return (
    <Box className={styles.workSpace}>
      <Box className={styles.tableTitle}>{name}</Box>
      <Box className={styles.iconsBox}>
        {language && <Box className={styles.languageBox}>{language}</Box>}
        <Box className={styles.stargazersBox}>
          <StarSharpIcon className={styles.starIcon}/>
          {stargazers_count}
        </Box>
      </Box>
      <Box className={styles.textBox}>{description}</Box>
      {license && <Box className={styles.textBox}>{license.name}</Box>}
    </Box>
  );
};

export default RepDetailsWorkSpace;
