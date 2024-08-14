import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppTemplate from 'src/harness/app-template/AppTemplate';
import PageTemplate from 'src/shared/common/molecules/PageTemplate';
import theme from 'src/styles/theme';
import { store } from 'src/store/store';
import { Provider } from 'react-redux';
import { SearchRepositoriesRequest, SearchRepositoriesResponse } from 'src/models/tasks';
import RepWorkSpace from 'src/pages/repositories-search-results/RepWorkSpace';

const App = () => {
  const [repData, setRepData] = useState<SearchRepositoriesResponse>();
  const [searchRep, setSearchRep] = useState<SearchRepositoriesRequest>({query: '', per_page: 7, page: 1});

  return (
		<Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppTemplate setRepData={setRepData} searchRep={searchRep} setSearchRep={setSearchRep}>
          <PageTemplate>
            <RepWorkSpace repData={repData?.items || []} setSearchRep={setSearchRep} searchRep={searchRep} countResults={repData?.total_count || 100}/>
          </PageTemplate>
        </AppTemplate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
