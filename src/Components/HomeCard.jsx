import React from 'react'
import './css/Homecard.css'
function HomeCard(props) {
    return (
        <>

            <div className='my-2 my-sm-3 my-md-4 d-inline-flex mx-3'>
                <div className="card card_width p-3 mb-4 homecard">
                    <img src={`process.env.PUBLIC_URL + ${props.data.Img}`} className='img-fluid card-img-top' />
                    <div className="card-body">
                        <h5 className="card-title"style={{height:'50px',overflow:'hidden'}}> {props.data.Title} </h5>
                        <p className="card-text" style={{height:'50px',overflow:'hidden'}}> {props.data.Text} </p>
                        <div className='d-flex'>
                            <p className='fw-bolder fs-5'>{props.data.price}</p>
                            <p className='text-decoration-line-through text-secondary fw-semibold fs-5 ms-2'>{props.data.xprice}</p>
                            <p className='text-success fw-semibold fs-5 ms-2'>{props.data.off}</p>
                        </div>
                        <a href="#" className="btn btn-primary Explor_btn">Explore More</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeCard