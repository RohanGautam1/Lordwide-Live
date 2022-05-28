import React from 'react'
import './comp1.css';
import BackgroundImage from "../assets/signup_background.svg";
import LogoImage2 from "../assets/button more.svg";
import LogoImage from "../assets/logo.svg"
import { Link } from 'react-router-dom';


// AiOutlineLeft

const Signup = () => {
    return (
        <>
            <div className='container-fluid login-container' >
                <div className='row' >

                    <div className="image col-md-6 bg-img " style={{ backgroundImage: `url(${BackgroundImage})` }}>
                        <img className='logo-image' src={LogoImage} alt="logo-img" />
                        <h1 className="img-txt mt-5 mb-0 ">Bring your restaurant to the next level.</h1>
                    </div>


                    {/* signup field */}
                    <div className='signup-field col-md-6'>

                        <div className='p-4'>
                            <p className=" new-user-text text-end text-decoration-none pr-0">Already a member? <Link className="create-account text-decoration-none a-color " to="/SignIn">Sign In</Link>
                                <img className='logo-image2' src={LogoImage2} alt="logo-img" /></p>

                        </div>
                        

                        <div className='Sign-up-form justify-content-center d-flex flex-column '>



                            <div className=''><p className='work-with-us' >Work with us</p>

                                <p className='below-signin-text'>Fill out your informations, We will reach you back as soon as possible!</p>
                            </div>
                            <form>
                                <div class="d-flex flex-column">

                                    <div className='d-flex p-2 bd-highlight'>
                                        {/* Name Input */}
                                        <div class="form-outline ">
                                            <label className="form-label your-email" for="form3Example3">Name</label>
                                            <input type="email" id="form3Example3" class="form-control form-control-lg rounded-pill input-field "
                                                placeholder="Tony Nguyen" />

                                        </div>

                                        {/* Restaurent Name Input */}

                                        <div class="form-outline ">
                                            <label className="form-label password-text" for="form3Example4">Restaurant Name</label>

                                            <input type="text" id="form3Example4" class="form-control form-control-lg ml-4 rounded-pill password-field " placeholder="moontheme" />
                                        </div>
                                    </div>

                                    <div className='d-flex p-2 bd-highlight'>
                                        {/* Email input */}
                                        <div class="form-outline ">
                                            <label className="form-label your-email" for="form3Example3">Your email</label>
                                            <input type="email" id="form3Example3" class="form-control form-control-lg rounded-pill input-field "
                                                placeholder="Tonynguyen@example.com" />

                                        </div>

                                        {/* Your Address Input */}

                                        <div class="form-outline ">
                                            <label className="form-label password-text" for="form3Example4">Your address</label>

                                            <input type="text" id="form3Example4" class="form-control form-control-lg ml-4 rounded-pill password-field" placeholder="12303 Roffle Street 99200 Texas, USA" />
                                        </div>
                                    </div>


                                </div>



                                {/* <div class="d-flex justify-content-between align-items-center"> */}



                                {/* Checkbox  */}

                                <div class="form-check rememberme-div mt-1 mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label rememberme-text " for="form2Example3">
                                        I accept the &nbsp;
                                    </label>
                                    <a href="#!" className="term-condition-text">Terms and Conditions</a>
                                </div>

                                {/* </div> */}

                                <div class=" text-lg-start mt-3 pt-2">
                                    <button type="button" className='signup-button  btn  btn-lg btn-block mb-4 Submit-Button border-0' >Send</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Signup
