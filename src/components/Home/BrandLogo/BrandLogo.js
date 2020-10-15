import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airhub from '../../../images/logos/airbnb.png';
import './BrandLogo.css';

const BrandLogo = () => {
    return (
        <div className="brand-logos">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="offset-lg-1 col-lg-2 col-md-3 col-4 text-center">
                        <img src={slack} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 text-center">
                        <img src={google} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 text-center">
                        <img src={uber} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 text-center">
                        <img src={netflix} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={airhub} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;