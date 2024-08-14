import React, { Dispatch, useEffect, useState } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Button,
	InputBase,
} from '@mui/material';

import styles from './AppTemplate.module.sass';
import { SearchRepositoriesRequest, SearchRepositoriesResponse } from 'src/models/tasks';
import { useGetRepositoriesMutation } from 'src/api/githubApi';

type Props = {
	searchRep: SearchRepositoriesRequest;
	setSearchRep: Dispatch<React.SetStateAction<SearchRepositoriesRequest>>;
	setRepData: (data: SearchRepositoriesResponse) => void;
	children: React.ReactNode;
};

const AppTemplate = ({ searchRep, setSearchRep, setRepData, children }: Props) => {
	const [searchRepName, setSearchRepName] = useState('');

	const [getRepositories] = useGetRepositoriesMutation();

	useEffect(() => {
		if (searchRep.query !== '') {
			getRepositories(searchRep)
				.unwrap()
				.then((data) => {
					setRepData(data);
				})
				.catch(() => {});
		}
	}, [searchRep])

	const handleClick = () => {
		setSearchRep({...searchRep, query: searchRepName});
	};

	return (
		<>
            <AppBar className={styles.appBar}>
                <Toolbar disableGutters variant="dense" className={styles.toolbar}>
					<InputBase 
						placeholder="Введите поисковый запрос" 
						className={styles.searchInput} 
						onChange={(e) => setSearchRepName(e.target.value)} 
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
