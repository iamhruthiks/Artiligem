import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast'
import Summary from './pages/Summary';

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
