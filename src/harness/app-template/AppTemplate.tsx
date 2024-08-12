import React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Button,
	InputBase,
} from '@mui/material';

import styles from './AppTemplate.module.scss';

type Props = {
	children: React.ReactNode;
};

const AppTemplate = ({ children }: Props) => {
	return (
		<>
            <AppBar className={styles.appBar}>
                <Toolbar disableGutters variant="dense" className={styles.toolbar}>
					<InputBase placeholder="Введите поисковый запрос" className={styles.searchInput}/>
					<Button variant="contained" className={styles.searchButton}>Искать</Button>
                </Toolbar>
            </AppBar>
			{children}
            <Box className={styles.footer}/>
        </>
	);
};

export default AppTemplate;
