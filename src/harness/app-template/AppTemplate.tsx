import React, { useEffect, useState } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Button,
	InputBase,
} from '@mui/material';

import styles from './AppTemplate.module.sass';
import { useGetRepositoriesMutation } from 'src/api/githubApi';
import useAppDispatch from 'src/store/hooks/useAppDispatch';
import { setReposData } from 'src/store/slices/reposData';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { setSearchRepoRequest } from 'src/store/slices/searchRepoRequest';

type Props = {
	children: React.ReactNode;
};

const AppTemplate = ({ children }: Props) => {
	const dispatch = useAppDispatch();
	const searchRepoRequest = useSelector((state: RootState) => state.searchRepoRequest);

	const [searchRepName, setSearchRepName] = useState('');

	const [getRepositories] = useGetRepositoriesMutation();

	useEffect(() => {
		if (searchRepoRequest.query !== '') {
			getRepositories(searchRepoRequest)
				.unwrap()
				.then((data) => {
					dispatch(setReposData(data));
				})
				.catch(() => {});
		}
	}, [searchRepoRequest])

	const handleClick = () => {
		dispatch(setSearchRepoRequest({query: searchRepName, per_page: 7, page: 1}));
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
