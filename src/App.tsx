import React from 'react';
import { Router } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Footer from './components/Footer';
import DefaultLayout from './pages/_layout/default';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultLayout>
          <Routes toggleTheme={toggleTheme} />
        </DefaultLayout>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
