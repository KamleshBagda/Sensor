import React from 'react'

function Contact() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="form-main">
                    <div className="main-wrapper">
                        <h2 className="form-head">Contact Us</h2>
                        <form className="form-wrapper">
                            <div className="form-card">
                                <input
                                    className="form-input text-white"
                                    type="text"
                                    name="full_name"
                                    required="required"
                                />
                                <label className="form-label" for="full_name">Full Name</label>
                            </div>

                            <div className="form-card">
                                <input
                                    className="form-input text-white"
                                    type="email"
                                    name="email"
                                    required="required"
                                />
                                <label className="form-label" for="email">Email</label>
                            </div>

                            <div className="form-card">
                                <input
                                    className="form-input text-white"
                                    type="number"
                                    name="phone_number"
                                    required="required"
                                />
                                <label className="form-label" for="phone_number">Phone number</label>
                            </div>

                            <div className="form-card">
                                <textarea
                                    className="form-textarea text-white"
                                    maxlength="420"
                                    rows="3"
                                    name="phone_number"
                                    required="required"
                                ></textarea>
                                <label className="form-textarea-label" for="phone_number"
                                >Address</label
                                >
                            </div>
                            <div className="btn-wrap">
                                <button> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact