import React from 'react'

function About() {
    return (
        <>
            <div className="About_top">
                <div className="container  pb-1 pb-sm-2 pb-md-5">

                    <h1 className="heading">About <span>Us</span></h1>

                    <div className="gallery">

                        <div className="gallery-item">
                            <img className="gallery-image" src={process.env.PUBLIC_URL + "/images/about-grid-7.jpg"} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src={process.env.PUBLIC_URL + "/images/about-grid-2.jpg"} alt="sunset behind San Francisco city skyline" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src={process.env.PUBLIC_URL + "/images/about-grid-3.jpg"} alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src={process.env.PUBLIC_URL + "/images/about-grid-4.jpg"} alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src={process.env.PUBLIC_URL + "/images/about-grid-5.jpg"} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src={process.env.PUBLIC_URL + "/images/about-grid-6.jpg"} alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
                        </div>

                    </div>

                </div>
            </div>


            <div className="container my-5">
                <div className="row my-md-5">
                    <div className="col-12 text-center">
                        <h1 className='text-primary'>Every Business Needs Great Content</h1>
                    </div>
                </div>
                <div className='row my-2 my-sm-3 my-md-5'>
                    <div className="col-12 col-lg-6">
                        <img src={process.env.PUBLIC_URL + "/images/about-1.jpg"} alt="" className='img-fluid rounded about_img' />
                    </div>
                    <div className="col-12 col-lg-6 pb-5 ps-md-5">
                        <h2 className='mt-1 mt-sm-3 mt-md-5 mb-2 mb-sm-3'>Enterprises</h2>
                        <p className='fs-5 fw-500 text-black'>For large enterprises in need of a turn-key content marketing solution at scale, Scripted has the answer. Our expert content strategy team will research, produce, and publish premium content that aligns with your brand and engages your audience. Get started today and experience the power of a seamless content marketing solution with Scriptedand publish premium content that aligns with your brand and engages your audience. Get started today and experience the power of a seamless content marketing solution with Scripted.</p>
                    </div>
                </div>
                <div className="row my-2 my-sm-3 my-md-5">
                    <div className="col-12 col-lg-6 pb-5 pe-md-5 order-2 order-lg-1">
                        <h2 className='mt-1 mt-sm-3 mt-md-5 mb-2 mb-sm-3'>Agencies</h2>
                        <p className='fs-5 fw-500 text-black'>Partner with Scripted for a fully-supported and flexible content marketing solution. Our advanced AI technology, Scout, offers the tools and support you need to take your agency to the next level. Our highly-vetted writers will be matched to best support the unique content needs of each of your clients, ensuring high-quality content that drives results and publish premium content that aligns with your brand and engages your audience. Get started today and experience the power of a seamless content marketing solution with Scripted.</p>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <img src={process.env.PUBLIC_URL + "/images/about-2.jpg"} alt="" className='img-fluid rounded about_img' />
                    </div>
                </div>
                <div className="row my-2 my-sm-3 my-md-5">
                    <div className="col-12 col-lg-6">
                        <img src={process.env.PUBLIC_URL + "/images/about-3.jpg"} alt="" className='img-fluid rounded about_img' />
                    </div>
                    <div className="col-12 col-lg-6 pb-5 ps-md-5">
                        <h2 className='mt-1 mt-sm-3 mt-md-5 mb-2 mb-sm-3'>Media Publishers</h2>
                        <p className='fs-5 fw-500 text-black'>Producing consistent, quality content on your publishing or media site means managing a lot of moving parts including multiple deadlines, assignments, and payments for freelancers. Scripted can handle it all. Producing consistent, quality content on your publishing or media site means managing a lot of moving parts including multiple deadlines, assignments, and payments for freelancers. Scripted can handle it all. and publish premium content that aligns with your brand and engages your audience.</p>
                    </div>
                </div>
                <div className="row my-2 my-sm-3 my-md-5">
                    <div className="col-12 col-lg-6 pb-5 pe-md-5 order-2 order-lg-1">
                        <h2 className='mt-1 mt-sm-3 mt-md-5 mb-2 mb-sm-3' >SMBs</h2>
                        <p className='fs-5 fw-500 text-black'>Connect with our vetted writers across 50+ industries for high-quality content that drives results. Use Scripted's all-in-one platform to easily manage your content production. Plus, our advanced AI technology, Scout, streamlines content ideation, keyword research, and brief generation for optimized results. Say goodbye to content production stress and focus on growing your SMB with Scripted.</p>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <img src={process.env.PUBLIC_URL + "/images/about-4.jpg"} alt="" className='img-fluid rounded about_img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About