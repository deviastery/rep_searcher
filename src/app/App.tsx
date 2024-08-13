import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppTemplate from 'src/harness/app-template/AppTemplate';
import PageTemplate from 'src/shared/common/molecules/PageTemplate';
import theme from 'src/styles/theme';
import { store } from 'src/store/store';
import { Provider } from 'react-redux';
import { SearchRepositoriesResponse } from 'src/models/tasks';
import RepDetailsWorkSpace from 'src/pages/repositories-details/RepDetailsWorkSpace';
import RepWorkSpace from 'src/pages/repositories-search-results/RepWorkSpace';

const App = () => {
  const [repData, setRepData] = useState<SearchRepositoriesResponse>()
  return (
		<Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppTemplate setRepData={setRepData}>
          <PageTemplate>
            <RepWorkSpace repData={repData?.items || []}/>
          </PageTemplate>
        </AppTemplate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
