import React from 'react'
import DashboardIcon from '../images/dashboard icon_d.svg';
import MenuIcon from '../images/menu_icon_d.svg';
import StatementIcon from '../images/statement_icon_d.svg';
import ReservationsIcon from '../images/reservations_icon_d.svg';
import DashboardIconActive from '../images/dashboard_icon_active.svg';
import MenuIconActive from '../images/menu_icon_active.svg';
import StatementIconActive from '../images/statement_active.svg';
import ReservationIconActive from '../images/reservations_icon_active.svg';
// import {FaBeer} from '  react-icons/fa';



export const SidebarData1 = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link:"/Dashboard",
        active_icon : <DashboardIconActive />,
        
    },
    {
        title: "Menu",
        icon: <MenuIcon/>,
        link:"/Menu",
        active_icon : <MenuIconActive />
    },
    {
        title: "Statement",
        icon: <StatementIcon/>,
        link:"/Statement",
        active_icon : <StatementIconActive />
    },
    {
        title: "Reservations",
        icon: <ReservationsIcon/>,
        link:"/Reservations",
        active_icon : <ReservationIconActive />
    }
    
]

 
