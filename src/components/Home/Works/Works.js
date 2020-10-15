import React from 'react';
import './Works.css';
import Slider from "react-slick";
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-4.png';
import slide4 from '../../../images/carousel-5.png';

const Works = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="works-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="common-heading mb-5 pb-2">
                            <h3 className="text-white">Here are some of <span>our works</span></h3>
                        </div>
                        <div className="slider-area">
                            <Slider {...settings}>
                                <div className="slide">
                                    <img src={slide1} className="img-fluid" alt="" />
                                </div>
                                <div className="slide">
                                    <img src={slide2} className="img-fluid" alt="" />
                                </div>
                                <div className="slide">
                                    <img src={slide3} className="img-fluid" alt="" />
                                </div>
                                <div className="slide">
                                    <img src={slide4} className="img-fluid" alt="" />
                                </div>
                                <div className="slide">
                                    <img src={slide1} className="img-fluid" alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;