
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Forms from './components/Forms';
import Main from './Main';
import Sidebar from './Sidebar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>  
        {/* <Route path="/" element={<Sidebar />}></Route>   */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/new"  element={<Forms />}></Route>
       </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
);
