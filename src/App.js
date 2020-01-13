import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';

function App() {
  return (
    <>
      <ToastContainer />
      <Main />
    </>
  );
}

export default App;