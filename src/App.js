import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import HomePage from './page/HomePage';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Details from './components/Details';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/new' element={<NewProduct />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


