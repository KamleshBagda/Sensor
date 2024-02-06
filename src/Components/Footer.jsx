import React from 'react'
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="widget1">
                <div className="logo">
                  <Link to='/' className='text-decoration-none'><div className="logo logofont"> <span>KB</span> Company</div></Link>
                </div>
                <p>
                  In eu libero ligula. Fusce eget metus lorem, ac viverra
                  leo. Nullam convallis, arcu vel pellentesque sodales,
                  nisi est varius diam, ac ultrices sem ante quis sem.
                  Proin ultricies volutpat sapien.
                </p>
                <div className="socialLinks">
                  <ul className='footerul'>
                    <li className='footerli'>
                      <a className='footerancor' href="#">
                        <FontAwesomeIcon className='footericon' icon="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className='footerli'>
                      <a className='footerancor' href="#">
                        <FontAwesomeIcon className='footericon' icon="fab fa-twitter" />
                      </a>
                    </li>
                    <li className='footerli'>
                      <a className='footerancor' href="#">
                        <FontAwesomeIcon className='footericon' icon="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className='footerli'>
                      <a className='footerancor' href="#">
                        <FontAwesomeIcon className='footericon' icon="fab fa-google-plus-g" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget2">
                <h5>
                  Latest News
                </h5>
                <div className="media">
                  <img className="img-fluid footerimg" src={process.env.PUBLIC_URL +"/images/card_img-3.jpeg"} alt="" />
                  <div className="media-body d-flex align-self-center">
                    <div className="content">
                      <a className='footerancor' href="#">
                        <p>
                          Did son unreserved themselves indulgence its
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <img className="img-fluid footerimg" src={process.env.PUBLIC_URL +"/images/card_img-1.jpeg"} alt="" />
                  <div className="media-body d-flex align-self-center">
                    <div className="content">
                      <a className='footerancor' href="#">
                        <p>
                          Rapturous am eagerness it as resolving household
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget3">
                <h5>
                  Quick Links
                </h5>
                <ul className='footerul'>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Home
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      about
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      contact
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      privecy
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      skills
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      career
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget4">
                <h5>
                  Other Links
                </h5>
                <ul className='footerul'>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Privacy Notice
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Terms of Use
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Security
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Blog
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Service Status
                    </a>
                  </li>
                  <li className='footerli'>
                    <a className='footerancor' href="#">
                      Support Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p>©2023. | Designed By: Kamlesh Bagda. | All rights reserved..</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer