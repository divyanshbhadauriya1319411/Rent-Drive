import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Footer() {
    let [settingData, setsettingData ] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        map1: import.meta.env.VITE_APP_MAP1,
        address: import.meta.env.VITE_APP_ADDRESS,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        twitter: import.meta.env.VITE_APP_TWITTER,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE,
    });

    return (
        <>

            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">{settingData.siteName} </h4>
                                    <p className="mb-3">{settingData.siteName} "Rentdrive simplifies vehicle rentals with reliable, affordable, and flexible options, connecting customers to trusted providers for seamless journeys, convenience, and stress-free travel experiences anytime, anywhere. </p>
                                </div>
                                <div className="position-relative">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-2">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                < Link to="/"><i className="fas fa-angle-right me-2"></i> Home</Link>
                                < Link to="/about"><i className="fas fa-angle-right me-2"></i> About</Link>
                                < Link to="/car"><i className="fas fa-angle-right me-2"></i> Cars</Link>
                                < Link to="/feature"><i className="fas fa-angle-right me-2"></i> Features</Link>
                                < Link to="/service"><i className="fas fa-angle-right me-2"></i> Services</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-3">Quick Links</h4>
                                <Link to="/tetimonial"><i className="fas fa-angle-right me-2"></i> Testimonial</Link>
                                <Link to="/faq"><i className="fas fa-angle-right me-2"></i> Faq</Link>
                                <Link to="/contact"><i className="fas fa-angle-right me-2"></i> Contact us</Link>
                                <Link to="/tc"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
                                <Link to="/privacypolicy"><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <a href={setsettingData.map1} target='_blank'><i className="fa fa-map-marker-alt me-2"></i>{settingData.address} </a>
                                <a href={`mailto:${settingData.email}`}><i className="fas fa-envelope me-2"></i>{settingData.email} </a>
                                <a href={`tel: ${settingData.phone}`}><i className="fas fa-phone me-2"></i> {settingData.phone}</a>
                                <a href={`http://wa.me/${settingData.whatsapp}`} className="mb-3"><i className="fas fa-print me-2"></i>{settingData.whatsapp}</a>
                                <div className="d-flex">
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.facebook} target='_blank'><i className="fab fa-facebook-f text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.twitter} target='_blank'><i className="fab fa-twitter text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.instagram} target='_blank'><i className="fab fa-instagram text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-0" href={settingData.linkedin} target='_blank'><i className="fab fa-linkedin-in text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-0" href={settingData.youtube} target='_blank'><i className="fab fa-youtube text-white"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-md-start mb-md-0">
                            <span className="text-body"><a href="#" className=" border text-white"><i className=" fas fa-copyright text-light me-2"></i>{settingData.siteName}</a>, All right reserved. </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
