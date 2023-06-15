import "leaflet/dist/leaflet.css";

import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import RegPage from './pages/RegPage';
import './App.css';
const App = () => {
  return (
    <Router>
      <Fragment>
      <Routes>
        <Route exact path="/api" element={<HomePage/>} />
        <Route exact path="/api/auth" element={<AuthPage/>} />
        <Route exact path="/api/reg" element={<RegPage/>} />
        <Route exact path="/api/dashboard" element={<PrivateRoute/>}>
          <Route path="/api/dashboard" element={<DashboardPage/>}/>
        </Route>
        <Route exact path="/api/profile" element={<PrivateRoute/>}>
          <Route path="/api/profile" element={<ProfilePage/>}/>
        </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;

