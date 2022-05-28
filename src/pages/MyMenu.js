import React from 'react';
// import NewNav from '../component/NewNav';
// import Navbar from '../component/Navbar';
import Sidebar from "../component/Sidebar";
import RightsideComponent from '../component/RightsideComponent';
import MenuImage from "../images/menu image.png";
import SearchIcon from '../images/search_icon.svg';

import menuItems from "../data";
import "./menu.css";

const MyMenu = () => {
  return (

            <div className=" d-flex " >
                <div className="col-md-2">
                <Sidebar/>
                </div>
                <div className="col-md-7   " style = {{backgroundColor:"white" , color: "white" }}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent mb-5">
                <div className="main-heading d-flex flex-column">
                    <h3 className='mb-0'>Menu</h3>
                    <small class="text-muted">Hello Pizzeria Italiana, welcome back</small>
                </div>


                <div class="" id="navbarSupportedContent">
                    <div className="searchbox">
                        {/* <span><i class="fa fa-search" aria-hidden="true"></i></span> */}
                        <span><img src={SearchIcon} alt="" srcset="" /></span>
                        <input class="form-control" type="text" placeholder="Search everything ..." aria-label="Search" />
                    </div>
                </div>
            </nav>
                   <div className = "row">
                     <div className='col-12 pink-img' style={{ backgroundColor: "#F773B7",width:"70px",height:"70px",marginLeft:"30px",borderRadius:"18px",opacity:"0.5"}}>
                     <img src = {MenuImage}  className = "menu-logo" style = {{ opacity:"1",marginTop:"8px"}}  /> 
                     </div>
                     <div className="col-12 d-flex menu-button-container">
                       <h1 className="menu mt-3 " style = {{color: "#000000",fotSize:"22px",marginLeft:"12px"}}>Menu</h1>
                     <button className="add-button mt-3 " style = {{width: "80px",height: "30px" ,display:"flex",alignItems: "center",justifyContent:"center", textAlign: "center",marginLeft: "30px"}}>Add+ </button>
                     </div>
                     <div className='col-12 d-flex flex-wrap'>
                     
                     {
                        menuItems.map(image => {
                          const {amount,desc,id ,img} = image
                          console.log(id)
                          console.log(img)
                          console.log(image)
                         return (
                           
                           <div className = "col-12 col-md-3  chocolateImg " key = {image.id} style = {{position:"relative"}} >
                           <img key={image.id} src={image.img}  alt =  "" className="img-responsive" />
                            
                           
                           <h1 className="text-on-image" style = {{fontSize:"10px",color:"#ffffff", position: "absolute", top:"35px",right:"35px",bottom:"15px",display:"flex",alignItems: "center",justifyContent:"center", textAlign: "center",borderRadius:"16px", height: "40px",width:"40px",border:"2px solid #ffffff"}}>{id}</h1>
                           <h1 className="text-on-image" style = {{fontSize:"10px",color:"#ffffff", position: "absolute", bottom:"10px",left:"18px",bottom:"55px",display:"flex",alignItems: "center",justifyContent:"center", textAlign: "center",borderRadius:"16px", height: "40px",width:"60px",border:"2px solid #ffffff"}}>{amount}</h1>
                           <p className="desc" style = {{borderRadius:"15px", border:"1px solid #EBEBEB",marginTop: "12px", textAlign:"center", color:"#7A86A1", fontSize:"10px",padding:"5px", cursor:"pointer",marginRight:"5px" }}>{desc}</p>
             
                           </div>
                           
                          )
                          
                      })
                      }    




                     </div>
                   </div>
                   
                </div>
                 <div className="col-md-3  " style = {{backgroundColor: "#FBF9FE",height:"100vh", color: "white"}}>
                    <RightsideComponent/>
                </div> 
            </div>
       
  );
}

export default MyMenu;
