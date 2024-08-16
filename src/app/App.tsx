import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppTemplate from 'src/harness/app-template/AppTemplate';
import RepWorkSpace from 'src/pages/repositories-search-results/RepWorkSpace';
import PageTemplate from 'src/shared/common/molecules/PageTemplate';
import store from 'src/store/store';
import theme from 'src/styles/theme';

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppTemplate>
					<PageTemplate>
						<RepWorkSpace />
					</PageTemplate>
				</AppTemplate>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
