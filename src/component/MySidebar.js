import React, { useState } from 'react';
import "../Sidebar.css";
import { SidebarData1 } from './SidebarData1';
import { SidebarData2 } from './SidebarData2';
import LogoImageDark from '../images/logo_main.svg';
import settingicon from '../images/setting_icon.svg';
import logouticon from '../images/logout_icon.svg';
import YourImageHere from '../images/your_image_here-1.png';
import { Link } from 'react-router-dom';

const MySidebar = () => {

    const [isHovering, setIsHovering] = useState();

  return (
    <div className='sidebar-container' >
    
    <div className="Sidebar" style = {{marginBottom:"20px",height:"110vh"}}>
        <img className='logo-image-dark m-3 mb-4' src={LogoImageDark} alt="logo-img" />
        <ul className='SidebarList'>
            {SidebarData1.map((val, key) => {
                const handleMouseEnter = () => {

                    setIsHovering(val.active_icon.type);
                };
                const handleMouseLeave = () => {
                    setIsHovering(val.icon.type);
                };
                
                return (
                    
                    <li
                    
                        key={key}
                        className="Sidebar-row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault()
                            // changeIcon(e,val.link);
                            // window.location.pathname = val.link

                        }}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

                    >
                        <div id='icon'className='d-flex'><img
                            src={isHovering === val.active_icon.type || window.location.pathname === val.link ? (val.active_icon.type) : (val.icon.type)} alt="" /> <p className='menu-text'>{val.title}</p></div>

                    </li>
                );
            })

            }
        </ul>

        <p className='insights'>Insights</p>

        <ul className='SidebarList '>
            {SidebarData2.map((val,index, key) => {
                const handleMouseEnter = () => {
                    setIsHovering(val.active_icon.type);
                
                };
                const handleMouseLeave = () => {
                    setIsHovering(val.icon.type);
                };

                return (
                    <Link className='hover1' to={val.link}>
                    <li
                        key={key}
                        className="Insights-Sidebar-row"
                        id={window.location.pathname === val.link ? "active" : ""}

                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

                    >
                        <div id='icon' className='d-flex'>
                        <img
                            src={isHovering === val.active_icon.type || window.location.pathname === val.link ? (val.active_icon.type) : (val.icon.type)} alt=""/> 
                            <p className='menu-text'>{val.title}</p>
                        </div>
                    </li>
                    </Link>
                );
            })

            }
        </ul>

        <div className="SideBarEndrow" style = {{marginTop:"-40px"}} >
            <div className='SidebarEnd' >
                <div className='SidebarEnd1'>
                    <img src={YourImageHere} alt="" />
                </div>
                <div className='mx-3'>
                    <img src={settingicon} alt="" />
                </div>
                <div>
                    <img src={logouticon} alt="" />
                </div>
            </div>

        </div>
    </div>

    </div>
  );
}

export default MySidebar;
