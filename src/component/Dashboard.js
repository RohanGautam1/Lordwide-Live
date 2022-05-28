import React, { useState } from 'react'
import Sidebar from './Sidebar'
import '../App.css';
import '../Dashboard.css';
import LogoImage2 from '../images/button-more.svg';
import iconmore from '../images/icon_more.svg';
import imageavtar from '../images/image_avtar.svg';
import clockImg from '../images/icon_clock.svg';
import TableImage from '../images/image_avtar.svg';
import YourImageHere from '../images/your_image_here.png';
import revenuechart from '../images/revenuechart.png';
import scans from '../images/scans.png';
import ordersinprog from '../images/ordersinprog.png';
// import satisfactionbg from '../images/satisfaction_bg.svg';




function Dashboard() {

    const data = [
        { tablenum: 1, bill: '$50', time: 30, paymode: 'Cash' },
        { tablenum: 2, bill: '$106', time: 37, paymode: 'crdt' },
        { tablenum: 3, bill: '$206', time: 47, paymode: 'crdt' }
    ]

    const [value, setValue] = useState(data);

    return (
        <>
            <div className="container-fluid d-flex flex-wrap g-0" >
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                
                    <div className="row mt-3 mb-3">
                        <h1 className='font-weight-bold'>Dashboard</h1>
                    </div>
                    <div className="row d-flex flex-wrap mt-5">
                        <div className="col-md-8 flex-wrap text-center">
                            <img className='RevenueChart' src={revenuechart} alt="logo-img" />
                        </div>
                        <div className="col-md-4 d-flex flex-column flex-wrap mt-3">
                            <div>
                                <div className="card chat-Satisfaction">
                                    <div className='circle-chart'>
                                        <img className='mt-1' src={LogoImage2} alt="logo-img" />
                                        <img className='icon-more' src={iconmore} alt="logo-img" />
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        <div className="txt">
                                            <h3>85%</h3>
                                            <h5>Satisfaction</h5>
                                        </div>
                                        <div className="clip1">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card chat-replied">
                                    <div className='circle-chart'>
                                        <img className='mt-1' src={LogoImage2} alt="logo-img" />
                                        <img className='icon-more' src={iconmore} alt="logo-img" />
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        <div className="txt">
                                            <h3>85%</h3>
                                            <h5>Chat-replied</h5>
                                        </div>
                                        <div className="clip2">
                                            <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                                            <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                                            <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                                            <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-wrap">
                        <div className='col-md-4 text-center mt-5'>
                        <img src={scans} alt="logo-img" />
                        </div>


                       
                        <div className='col-md-8 mt-5 Order-in-Progress border p-2 g-0'>
                            <div className="heading d-flex justify-content-between">
                                <h6>Orders in progress</h6>
                                <img className='icon-more' src={iconmore} alt="logo-img" />

                            </div>

                            {
                                data.map((val, index) => {
                                    return (
                                        <>

                                            <div className="list d-flex p-2">
                                                <img className="table-img" src={TableImage} alt="" srcset="" />
                                                <table class="table table-borderless">
                                                    <tbody>
                                                        <tr>

                                                            <td className='table-num'>Table{val.tablenum}</td>
                                                            <td className='price'>{val.bill}</td>
                                                            <td class="break"> <img className="clock-img" src={clockImg} alt="" srcset="" />{val.time}</td>
                                                            <td className="Payment-mode ml-1">{val.paymode}</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    )


                                })



                            }


                            <div className="row">

                                <div className='d-flex justify-content-space-between'>

                                    <button type="button" class="rounded-5 btn-sm m-2 All-orders-btn">
                                        All Orders
                                    </button>

                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-end m-2">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>

                            </div>
                        </div>
                       


                    </div>
                </div>
                <div className="col-md-3 border border-primary ">
                    <h1>Right SideBar</h1>
                </div>
            </div>
        </>
    )
}

export default Dashboard
