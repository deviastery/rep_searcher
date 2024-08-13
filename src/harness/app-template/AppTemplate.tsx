import React, { useState } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Button,
	InputBase,
} from '@mui/material';

import styles from './AppTemplate.module.sass';
import { SearchRepositoriesResponse } from 'src/models/tasks';
import { useGetRepositoriesMutation } from 'src/api/githubApi';

type Props = {
	setRepData: (data: SearchRepositoriesResponse) => void;
	children: React.ReactNode;
};

const AppTemplate = ({ children, setRepData }: Props) => {
	const [searchNameRep, setSearchNameRep] = useState('');

	const [getRepositories] = useGetRepositoriesMutation();

	const handleClick = () => {
		getRepositories(searchNameRep)
			.unwrap()
			.then((data) => {
				console.log(data);
				setRepData(data);
			})
			.catch(() => {});
	};

	return (
		<>
            <AppBar className={styles.appBar}>
                <Toolbar disableGutters variant="dense" className={styles.toolbar}>
					<InputBase 
						placeholder="Введите поисковый запрос" 
						className={styles.searchInput} 
						onChange={(e) => setSearchNameRep(e.target.value)} 
					/>
					<Button 
						variant="contained" 
						className={styles.searchButton} 
						onClick={handleClick}
					>
						Искать
					</Button>
                </Toolbar>
            </AppBar>
			{children}
            <Box className={styles.footer}/>
        </>
	);
};

export default AppTemplate;
