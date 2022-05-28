import React from 'react';
import "./Myform.css";
const MyForm = () => {
  return (
    <div className="middle-section ">
    <h1 className="password-info-heading" >Password Information</h1>
      <div className="form-wrapper-container1 d-flex" style = {{marginTop:"10px"}}>
        
        <form className="form-container col-10 col-md-11 ">


          <div className=" my-password  current-password-container">
          <p className='field-name'>
          <div className = "myname1">  Current Password{" "}</div> 
         
          </p>
           
            <input
              type="password"
              className=" password current-password  "
             
            />
          </div>
          <div className=" my-password  current-password-container">
          <p className='field-name'>
          <div className = "myname1">New Password{" "}</div> 
         
          </p>
           
            <input
              type="password"
              className=" password current-password  "
             
            />
          </div>
          <div className="current-password-container  my-password ">
          <p className='field-name'>
          <div className = "myname1"> Confirm New Password{" "}</div> 
          
          </p>
           
            <input
              type="password"
              className=" password current-password   "
           
            />
          </div>

          
        </form>
        <div className="save-change-button">
            <button type="button " className="save-button1">
              Save Change
            </button>
          </div>
      </div>
    </div>
  );
}

export default MyForm;
