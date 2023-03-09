import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomepageTemplate from './Templates/HomepageTemplate/HomepageTemplate';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ChangePassword from './Pages/ChangePassword/ChangePassword';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomepageTemplate Component={Homepage} />} />
        <Route path='/login' element={<HomepageTemplate Component={Login} />} />
        <Route path='/signup' element={<HomepageTemplate Component={SignUp} />} />
        <Route path='/changepassword' element={<HomepageTemplate Component={ChangePassword} />} />

      </Routes>
    </Fragment>
  );
}

export default App;
