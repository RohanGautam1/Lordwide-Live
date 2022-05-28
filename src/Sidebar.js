// import React, { useState } from 'react';
// import "../App.css";
// import { SidebarData } from './SidebarData';
// import LogoImageDark from '../images/logo_main.svg';
// import settingicon from '../images/setting_icon.svg';
// import logouticon from '../images/logout_icon.svg';
// import YourImageHere from '../images/your_image_here-1.png';



// function Sidebar() {
//     // const [activeIcons, setActiveIcons] = useState();


//     // function changeIcon(e, val) {
//     //     console.log(val, "sdfds");

//     //     console.log('ssss' + active);
//     //     setActiveIcons(SidebarData)
//     //     window.location.pathname = val.link

//     //     console.log(activeIcons, "ajjay");
//     // }
//     const [isHovering, setIsHovering] = useState();

//     return (
//         <>
//             <div className="Sidebar">
//                 <img className='logo-image-dark m-3 mb-4' src={LogoImageDark} alt="logo-img" />
//                 <ul className='SidebarList'>
//                     {SidebarData.map((val, key) => {
//                         const handleMouseEnter = () => {
//                             setIsHovering(val.active_icon.type);
//                         };
//                         const handleMouseLeave = () => {
//                             setIsHovering(val.icon.type);
//                         };

//                         return (

//                             <li
//                                 key={key}
//                                 className="row"
//                                 id={window.location.pathname === val.link ? "active" : ""}
//                                 onClick={(e) => {
//                                     e.preventDefault()
//                                     // changeIcon(e,val.link);
//                                     // window.location.pathname = val.link

//                                 }}
//                                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

//                             >
//                                 <div id='icon'><img
//                                     src={isHovering === val.active_icon.type || window.location.pathname === val.link ? (val.active_icon.type) : (val.icon.type)} alt="" /> {val.title}</div>

//                             </li>
//                         );
//                     })

//                     }
//                 </ul>

//                 <div className="row row1">
//                     <div className='SidebarEnd'>
//                         <div className='SidebarEnd1'>
//                             <img src={YourImageHere} alt="" />
//                         </div>
//                         <div className='mx-3'>
//                             <img src={settingicon} alt="" />
//                         </div>
//                         <div>
//                             <img src={logouticon} alt="" />
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Sidebar;
