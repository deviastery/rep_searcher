import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppTemplate from 'src/harness/app-template/AppTemplate';
import PageTemplate from 'src/shared/common/molecules/PageTemplate';
import SearchResult from 'src/pages/repositories-search-results/SearchResult';
import theme from 'src/styles/theme';
import { store } from 'src/store/store';
import { Provider } from 'react-redux';
import { SearchRepositoriesResponse } from 'src/models/tasks';

const App = () => {
  const [repData, setRepData] = useState<SearchRepositoriesResponse>()
  return (
		<Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppTemplate setRepData={setRepData}>
          <PageTemplate>
            <SearchResult repData={repData}/>
          </PageTemplate>
        </AppTemplate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
