import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import filter from 'leo-profanity';
import { ErrorBoundary, Provider as RollbarProvider } from '@rollbar/react';

import store from '../store';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Header from './ui-components/Header.jsx';

import i18n from '../i18next/i18next.js';
import socket, { ChatContext } from '../socket/socket.js';
import rollbarConfig from '../rollbar/rollbarConfig.js';

const App = () => {
  const ruDict = filter.getDictionary('ru');
  filter.add(ruDict);
  // throw new Error('Це тестова помилка для Rollbar');
  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <I18nextProvider i18n={i18n}>
            <ChatContext.Provider value={socket}>
              <BrowserRouter>
                <div className="d-flex flex-column h-100">
                  <Header />
                  <Routes>
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                  </Routes>
                </div>
              </BrowserRouter>
            </ChatContext.Provider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </I18nextProvider>
        </StoreProvider>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default App;