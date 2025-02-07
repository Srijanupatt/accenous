import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from '../components/homepage';
import Dashboard from '../components/dashboard';
function AppRoute() {
  return (
    <div>
<Router>
  <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/dashboard' element={<Dashboard/>} />

  </Routes>
</Router>
    </div>
  )
}

export default AppRoute