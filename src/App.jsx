import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import AddADoctors from './components/AddADoctors/AddADoctors/AddADoctors';
import Navber from './components/Share/Navber/Navber';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addaDoctors' element={<AddADoctors/>}/>
      <Route path='*' element={<h1>Page Not Found 404</h1>}/>
    </Routes>
  );
}

export default App;
