import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {

    return (
        <>
            <div className='container-fluid loginbody'>
                <div className="wrapper1">
                    <form action="">
                        <h1>Login </h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>

                        <div className="register-link">
                            <p>Don't have an account?<Link to='/signup'><a href="#"> Sign Up</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login