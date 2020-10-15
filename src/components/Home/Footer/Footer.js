import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-text">
                            <h2 className="mb-4">Let us handle your project, professionally.</h2>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="footer-form">
                            <form action="">
                                <input type="text" placeholder="Your email address" />
                                <input type="text" placeholder="Your name/company’s name" />
                                <textarea type="text" placeholder="Your message" />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <div className="copyright-area text-center">
                            <p className="mb-0 mt-5 pt-3">Copyright By Nabed Khan &copy; {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;