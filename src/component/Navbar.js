import React from 'react';
import SearchIcon from '../images/search_icon.svg';

import "../Navbar.css";
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent mb-3">
                <div className="main-heading d-flex flex-column">
                    <h3 className='mb-0'>Statements</h3>
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
        </>
    );
}

export default Navbar;