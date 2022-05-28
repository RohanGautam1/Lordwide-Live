import React, { useState } from 'react'
// import Sidebar from './Sidebar'
import '../App.css';

import NewNav from '../component/NewNav';
// import Navbar from '../component/Navbar';

import Sidebar from "../component/Sidebar";
// import satisfactionbg from '../images/satisfaction_bg.svg';
import { Badge } from "@material-ui/core";
import Bg from "../images/your image here.png";
import YourImg from "../images/your image here (1).png";
import ImgSvg from  "../images/image.svg"
import Page11and12Left from '../component/Page11and12Left';
import MyForm from "../component/MyForm";





function ResetPassword() {

    

    return (
        
            <div className="container-fluid d-flex g-0">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-7">
                {<NewNav/>}
                   {/*<Navbar/>*/}
                      
                    <div className='col-3' style = {{ display:"flex", alignItems:"center",justifyContent:"center"}}>
                    <p className="heading" style = {{fontSize:"22px", color: "#000000"}}>Setting Profile</p>
                     </div>
                    
                <div className='row'>
                <div className='col-3'>
                <div className="left-section mt-4 ">
                <div className="left-wrapper-top">
                 
                  <div className="info-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                    >
                      <path
                        id="icon"
                        d="M1759,223.919c0-2.449,3.456-3.059,7.5-3.059,4.068,0,7.5.63,7.5,3.081s-3.455,3.06-7.5,3.06C1762.433,227,1759,226.37,1759,223.919Zm2.537-10.153a4.967,4.967,0,1,1,4.965,4.761h0a4.85,4.85,0,0,1-4.963-4.727Z"
                        transform="translate(-1759 -209.001)"
                        fill="#6149CD"
                      />
                    </svg>
                    <p className=" my-profile   mt-3 ">Basic Information</p>
                  </div>
                </div>
                <div className="left-wrapper-bottom">
                  <div className="password-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18.021"
                      viewBox="0 0 15 18.021"
                    >
                      <path
                        id="icon"
                        d="M365.234,435.009h-7.467A3.768,3.768,0,0,1,354,431.248V426.8a3.743,3.743,0,0,1,2.627-3.567v-1.378a4.873,4.873,0,0,1,8.314-3.442,4.825,4.825,0,0,1,1.432,3.442v1.378A3.743,3.743,0,0,1,369,426.8v4.448A3.768,3.768,0,0,1,365.234,435.009Zm-3.734-7.763a.78.78,0,0,0-.78.779v1.988a.785.785,0,1,0,1.569,0v-1.988A.785.785,0,0,0,361.5,427.245Zm.009-8.691a3.307,3.307,0,0,0-3.312,3.277v1.206H364.8v-1.184a3.3,3.3,0,0,0-3.3-3.3h0Z"
                        transform="translate(-354 -416.988)"
                        fill="#7a86a1"
                      />
                    </svg>
                    <p className=" my-password">Password</p>
                  </div>
                </div>
              </div>
                </div>
                <div className='col-9'>
                  <MyForm/>
                </div>

                </div>
              </div>
                 <div className="col-md-3 mt-3  " >
                 <Page11and12Left/>
                </div>
            </div>
        
    )
}

export default ResetPassword;