import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Box, Button, InputBase, Toolbar } from '@mui/material';
import { useGetRepositoriesMutation } from 'src/api/githubApi';
import useAppDispatch from 'src/store/hooks/useAppDispatch';
import { setReposData } from 'src/store/slices/reposData';
import { setSearchRepoRequest } from 'src/store/slices/searchRepoRequest';
import { RootState } from 'src/store/store';
import styles from './AppTemplate.module.sass';

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
				.catch();
		}
	}, [searchRepoRequest]);

	const handleClick = () => {
		dispatch(setSearchRepoRequest({ query: searchRepName, per_page: 7, page: 1 }));
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
					<Button variant="contained" className={styles.searchButton} onClick={handleClick}>
						Искать
					</Button>
				</Toolbar>
			</AppBar>
			{children}
			<Box className={styles.footer} />
		</>
	);
};

export default AppTemplate;
