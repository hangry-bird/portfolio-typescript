// App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Resume from 'src/domains/resume/Page/resumePage';

// Style
import 'src/assets/Styles/style.scss'

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Resume />} />
      </Routes>
      <ToastContainer
        position="top-center"
        theme='dark' 
        autoClose={1600}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;