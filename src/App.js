import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import ViewGroup from 'layouts/ViewGroup';
import { Global } from 'Global';

import Home from 'reacts/components/Home';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <BrowserRouter forceRefresh>
          <ViewGroup>
            <Routing />
          </ViewGroup>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
