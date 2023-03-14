import './App.css'
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomepageTemplate from './Templates/HomepageTemplate/HomepageTemplate'
import MainTemplate from './Templates/MainTemplate/MainTemplate'

import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import ChangePassword from './Pages/ChangePassword/ChangePassword'
import PreviewProfile from './Pages/PreviewProfile/PreviewProfile'
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomepageTemplate Component={Homepage} />} />
        <Route path='/login' element={<HomepageTemplate Component={Login} />} />
        <Route
          path='/signup'
          element={<HomepageTemplate Component={SignUp} />}
        />
        <Route path='/updateprofile' element={<UpdateProfile />} />

        <Route
          path='/previewprofile'
          element={<MainTemplate Component={PreviewProfile} />}
        />
      </Routes>
    </Fragment>
  )
}

export default App
