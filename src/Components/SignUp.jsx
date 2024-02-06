import React from 'react'
import './css/SignUpCSS.css'
import { Link } from 'react-router-dom'


function SignUp() {


    return (
        <>
            <div className='container-fluid SignUpbody'>
                <div className="wrapper2">
                    <form action="">
                        <h1>Sign Up </h1>
                        <div className="input-box">
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="E-mail" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Comfirm Password" required />
                        </div>

                        <button type="submit" className="btn">Sign Up</button>

                        <div className="register-link">
                            <p>Already have an account?<Link to='/login'><a href="#"> Login</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUp