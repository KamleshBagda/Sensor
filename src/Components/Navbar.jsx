import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './css/Navbar.css';
import { Link, json } from 'react-router-dom';

function Navbar() {
   
    return (
        <>
            <nav className='navbar navbar-expand-lg sticky-top' style={{ backgroundColor: '#004658' }}>
                <div className="container-fluid">
                    <Link to='/' className='text-decoration-none'><div className="logo logofont ms-3 z-3"> <span>KB</span> Company</div></Link>
                    <button className="navbar-toggler btn btn-primary p-1 fs-5 rounded-3 mx-3 z-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon="fa-solid fa-bars" className='text-white bg-primary p-2 fs-5 rounded-3' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <input type="search" name="search" id="search" className='ms-auto p-2 border border-secondary text-center rounded-pill text-white fw-bold fs-5' placeholder='Search Item' style={{ backgroundColor: 'transparent', width: 'auto' }} onChange={handlesearch} value={datasearch} /> */}
                        {/* <button onClick={handledata} className='ms-sm-2 ms-md-3 d-none d-sm-block px-4 py-2 border border-secondary text-center rounded-pill text-white fw-bold fs-5' style={{ backgroundColor: 'transparent', width: 'auto' }}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button> */}
                        <ul className="navbar-nav ms-auto unorderlist">
                            <Link to='/'><li className="nav-item navbarlist mt-2"><a href="#">Home</a></li></Link>
                            <Link to='/products'><li className="nav-item navbarlist mt-2"><a href="#">Products</a></li></Link>
                            <Link to='/faq'><li className="nav-item navbarlist mt-2"><a href="#">FAQ's</a></li></Link>
                            <Link to='/about'><li className="nav-item navbarlist mt-2"><a href="#" className='text-wrap'>About Us</a></li></Link>
                            <Link to='/contact'><li className="nav-item navbarlist mt-2 contact_nav"><a href="#" className='text-wrap'>Contact Us</a></li></Link>
                            <Link to='/login'><li className="nav-item navbarlist"><button className='btn btn-outline-primary px-4 buttn ms-2 me-3'>login</button></li></Link>
                            <Link to='/signup'><li className="nav-item navbarlist"><button className='btn btn-outline-primary px-3 buttn me-3'>Sign Up</button></li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar