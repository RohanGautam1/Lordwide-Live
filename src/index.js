import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './component/SignIn';
import Signup from './component/Signup';
// import Chartbar1 from './component/Chartbar1';
// import Test from './component/Test'
import Forgot from "./component/Forgot"

// import Sidebar from "./component/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Orders from './component/Orders';

import MyMenu from './pages/MyMenu';
import ResetPassword from './pages/ResetPassword';
import BasicInformation from './pages/BasicInformation';
import Statement from './component/Statement';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/menu" element={<MyMenu/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/userdetails" element={<BasicInformation/>} />
        <Route path="/Statement" element={<Statement/>} />

      </Routes>
    </Router>




    {/* <Test /> */}

    {/* <Signup></Signup> */}
    {/* <SignIn></SignIn> */}

    {/* <Forgot></Forgot> */}
    {/* <Sidebar></Sidebar> */}
    {/* <Chartbar1/> */}
    {/* <LineChart></LineChart> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
