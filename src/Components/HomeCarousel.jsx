import React from 'react'

function HomeCarousel() {

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'black' }}>
                <div className="container-fluid ">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={process.env.PUBLIC_URL +"/images/carousel_img.jpg"} className="img-fluid w-100" style={{ maxHeight: '800px' }} alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={process.env.PUBLIC_URL +"/images/carousel_img7.jpg"} className="img-fluid w-100" style={{ maxHeight: '800px' }} alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={process.env.PUBLIC_URL +"/images/carousel_img4.jpg"} className="img-fluid w-100" style={{ maxHeight: '800px' }} alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={process.env.PUBLIC_URL +"/images/carousel_img3.jpg"} className="img-fluid w-100" style={{ maxHeight: '800px' }} alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={process.env.PUBLIC_URL +"/images/carousel_img6.jpg"} className="img-fluid w-100" style={{ maxHeight: '800px' }} alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCarousel