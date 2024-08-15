import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppTemplate from 'src/harness/app-template/AppTemplate';
import PageTemplate from 'src/shared/common/molecules/PageTemplate';
import theme from 'src/styles/theme';
import { store } from 'src/store/store';
import { Provider } from 'react-redux';
import RepWorkSpace from 'src/pages/repositories-search-results/RepWorkSpace';

const App = () => {
  return (
		<Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppTemplate>
          <PageTemplate>
            <RepWorkSpace/>
          </PageTemplate>
        </AppTemplate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
