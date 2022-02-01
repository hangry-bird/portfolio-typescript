// App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Resume from 'src/domains/resume/Page/resumePage';

// Style
import 'src/assets/Styles/style.scss'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;