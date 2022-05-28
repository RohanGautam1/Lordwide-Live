import React from 'react'
import Sidebar from './Sidebar'
import '../Statement.css';
import StatementTable from './StatementTable';
import Navbar from './Navbar';
import LogoImage2 from '../images/button-more.svg';
import iconmore from '../images/icon_more.svg';
import statementschart from '../images/statementschart.png';



function Statement() {
    return (
        <>
            <div className="container-fluid d-flex flex-wrap g-0" >
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <div className="row g-0">
                        <Navbar />
                    </div>
                    <div className="row g-0">
                        <div className="earning-report col-md-9">
                            <img className='mt-1' src={statementschart} alt="logo-img" />

                        </div>
                        <div className=" col-md-3 update-your-rprt">
                            <div className='d-flex justify-content-center   '>
                                <div className="card update-your-rprt-card">
                                    
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <div className="update-your-rprt-card-text p-1 mt-3">
                                            <h5>Update Your report Earning this month</h5>
                                        </div>
                                        
                                    </div>
                                    <p className='update-your-rprt-card-button'>Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tableBox p-5">
                        <StatementTable />
                    </div>
                </div>
                {/* <div className="col-md-3 border border-primary "> */}
                {/* </div> */}
            </div>

        </>
    )
}

export default Statement
