import React from 'react'
import './comp1.css';
import BackgroundImage from "../assets/signin_background.svg";
import LogoImage2 from "../assets/button more.svg";
import LogoImage from "../assets/logo.svg"
import { Link } from 'react-router-dom';



const SignIn = () => {
  return (
    <>
      <div className='container-fluid overflow-hidden' >
        <div className='row' >

          <div className="image col-md-6 bg-img " style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <img className='logo-image' src={LogoImage} alt="logo-img" />
            <h1 className="img-txt mt-5 mb-0 ">Bring your restaurant to the next level.</h1>
          </div>

          <div className='col-md-6'>

          <div className='p-4' >
            <p className= " new-user-text text-end text-decoration-none pr-0">New User? <Link className="create-account text-decoration-none a-color " to="/Signup">Create an Account</Link>
            <img className='logo-image2' src={LogoImage2} alt="logo-img" /></p>
          </div>

            <div className='col-md-10 offset-md-1 login-form mt-5'>

              <div><p className='signin-font' >Sign in</p>
              
                <p className='below-signin-text'>Sign in using your infos</p>
              </div>
              <form>
                <div class="d-flex p-2 bd-highlight ">


                  {/* Email input */}
                  <div class="form-outline ">
                    <label className="form-label your-email" for="form3Example3">Your email</label>
                    <input type="email" id="form3Example3" class="form-control form-control-lg rounded-pill input-field "
                      placeholder="Tonynguyen@example.com" />

                  </div>

                  {/* Password Input */}

                  <div class="form-outline ">
                    <label className="form-label password-text" for="form3Example4">Password</label>

                    <input type="password" id="form3Example4" class="form-control form-control-lg ml-4 rounded-pill password-field" placeholder="•••••••••" />
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center">



                  {/* Checkbox  */}

                  <div class="form-check rememberme-div mt-1 mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label rememberme-text " for="form2Example3">
                      Remember me
                    </label>
                    <Link to="/Forgot" className=" forgot-password-text">Forgot password?</Link>
                  </div>

                </div>

                <div class=" text-lg-start mt-3 pt-2">
                  <Link to="/Dashboard"><button type="button" className='signin-button  btn  btn-lg btn-block mb-4 Submit-Button border-0' >Sign in </button></Link> 

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default SignIn
