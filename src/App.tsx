import React from 'react';
import { Router } from 'react-router-dom';
import DefaultLayout from './pages/_layout/default';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
      <Footer />
    </Router>
  );
};

export default App;
