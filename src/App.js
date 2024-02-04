import React, {useEffect} from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Home from './Components/Home';
import DetailsPage from './Components/DetailsPage';
import { useDispatch } from 'react-redux';
import { postApiRequest } from './redux/actions/postApiActions'; ;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postApiRequest());
  }, []);
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
