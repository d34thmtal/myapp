import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import HomePage from './page/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
