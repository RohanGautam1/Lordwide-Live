import React,{useState} from 'react';
import "./myform2.css";
const MyForm2 = () => {
    const [selectedClient,setSelectedClient] = useState([]);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }
  return (
    <div className="middle-section ">
    <h1 className="password-info-heading" >Basic information</h1>
      <div className="form-wrapper-container d-flex" style = {{marginTop:"10px"}}>
        
        <form className="form-container col-10 col-md-11 ">
          <div className="current-password-container current-password  my-password">
            <div className = "myname  ">Full name{" "}</div> 
            <input
              type="text"
              className=" password current-password pass-1 "
              
            />
          </div>
          <div className=" my-password confirm-new-password-container ">
          <div className = "myname  "> Email{" "}</div> 
           
            <input
            type="text"
              className=" password current-password pass-2  "
             
            />
          </div>
          <div className="current-password-container  my-password ">
          <div className = "myname  "> Phone{" "}</div> 
            
            <input
            type="text"
              className=" password current-password pass-3  "
           
            />
          </div>
          <div className="current-password-container  my-password ">
          <div className = "myname  ">  Restaurant{" "}</div> 
         
          <input
          type="text"
            className=" password current-password pass-3  "
         
          />
        </div>

        

        <div className="current-password-container  my-password  location ">
        <div className = "myname ">Location{" "}</div>
       
        {<select onChange={handleSelectChange} className = "password "  placeholder='please select' >
        <option value="" disabled selected className='text-center ml-5'> Please select</option>
        
        <option value="one">India</option>
        <option value="two">USA</option>
        <option value="three">China</option>
  </select> }
      </div>
      <div className="current-password-container  my-password ">
      <div className = "myname  "> {" "}</div> 
        
        <input
        type="text"
          className=" password current-password pass-3  "
          placeholder = "    London"
        />
      </div>

      <div className="current-password-container  my-password ">
      <div className = "myname  "> {" "}</div> 
        
        <input
        type="text"
          className=" password current-password pass-3  "
          placeholder = "     State"
        />
      </div>

      <div className="current-password-container  my-password ">
      <div className = "myname  ">  Restaurant{" "}</div> 
     
      <input
      type="text"
        className=" password current-password pass-3  "
      placeholder='      Pizzeria Italiana'
      />
    </div>
    <div className="current-password-container  my-password ">
    <div className = "myname  ">  Address{" "}</div> 
   
    <input
    type="text"
      className=" password current-password pass-3  "
      placeholder='     Address'
    />
  </div>

  <div className="current-password-container  my-password ">
  <div className = "myname  ">  Zipcode{" "}</div> 
 
  <input
  type="text"
    className=" password current-password pass-3  "
    placeholder='    480000'
  />
</div>
<div className="current-password-container  my-password ">
<div className = "myname  ">  Disabel ads{" "}</div> 

<div className="topping ">
   <div className='checkbox-desc-container '>
   <input type="checkbox" id="topping" name="topping" value="desiable-ads" background = "#6149CD" className=' checkbox' />
   <p className = "checkbox-desc">With your Pro account, you can disable ads across the site.</p>
   </div>
     
  </div>
</div>

          
        </form>
        <div className="save-change-button2  ">
            <button type="button " className="save-button ">
              Save Change
            </button>
          </div>
      </div>
    </div>
  );
}

export default MyForm2;
