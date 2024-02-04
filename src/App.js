import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Home from './Components/Home';
import DetailsPage from './Components/DetailsPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home><Search/></Home>}></Route>
        <Route path="/item/:id" element={<DetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
