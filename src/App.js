import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';

export default function App() {
  return (
    <div>
      <HashRouter>
        
        <Header />
        <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
