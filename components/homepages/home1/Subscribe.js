export default function Subscribe() {
    return (
        <>
            <div className="subscribe2 bg7 section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading2 white-heading no-margin-heading">
                                <small className="heading-top">
                                    <img src="/assets/img/icons/hands.svg" alt="" />
                                    Act now to protect what matters to you!
                                </small>
                                <h2>
                                    Get free Quotes <span className="">now</span> <br />
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 offset-lg-1">
                            <div className="sunscribe-form">
                                <div className="subscribe-from-wrap">
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" required />
                                        {/* <input type="text" placeholder="Name" required />
                                        <textarea placeholder="Message" rows="4" column="4" required></textarea>
                                        <input type="tel" placeholder="Phone" required /> */}

                                        {/* ✅ Submit button is placed after all fields */}
                                        <div className="submit-btn-wrapper" style={{ marginTop: '15px' }}>
                                            <button type="submit" name="button">
                                                Submit
                                                <img src="/assets/img/icons/arrow-up-right-black.svg" alt="" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
