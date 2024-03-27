import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { Provider as StoreProvider } from 'react-redux';
import store from '../store'


const App = () => {
    return(
      <StoreProvider store={store}>
        <BrowserRouter>
         <Routes>
           <Route path="*" element={<Error />} />
           <Route path="/" element={<Home />} />
           <Route path="login" element={<Login />} />
         </Routes>
        </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
