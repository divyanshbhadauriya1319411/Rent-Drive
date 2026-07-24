import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
export default function Navbar() {
    let [settingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        map1: import.meta.env.VITE_APP_MAP1,
        address: import.meta.env.VITE_APP_ADDRESS,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        instagram: import.meta.env.VITE_APP_INSTAGRM,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE,
    })

    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                let items = {}
                Object.keys(settingData).forEach(key => items[key] = SettingStateData[0][key] || settingData[key])
                setSettingData({ ...items })
            }
        })()
    }, [SettingStateData.length])
    return (
        <>
            <div className="container-fluid topbar bg-secondary w-100">
                <div className="container">
                    <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
                        <div className="col-lg-9 col-6 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a href={settingData.map1} target='_blank' className="text-light me-2"><i className="fas fa-map-marker-alt text-light me-2"></i><span className='d-none d-xl-inline'>{settingData.address}</span></a>
                                <a href={`mailto:${settingData.email}`} className="text-light me-2"><i className="fas fa-envelope text-light me-2"></i><span className='d-none d-xl-inline'>{settingData.email}</span></a>
                                <a href={`tel:${settingData.phone}`} className="text-light me-2"><i className="fas fa-phone-alt text-light me-2"></i><span className='d-none d-xl-inline'>{settingData.phone}</span></a>
                                <a href={`https://wa.me/${settingData.whatsapp}`} className="text-light me-2"><i className="bi bi-whatsapp text-light me-2"></i><span className='d-none d-xl-inline'>{settingData.whatsapp}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href={settingData.facebook} target='_blank' className="text-light  me-3"><i className="fab fa-facebook-f"></i></a>
                                <a href={settingData.twitter} target='_blank' className="text-light  me-3"><i className="fab fa-twitter"></i></a>
                                <a href={settingData.instagram} target='_blank' className="text-light  me-3"><i className="fab fa-instagram"></i></a>
                                <a href={settingData.linkedin} target='_blank' className="text-light  me-3"><i className="fab fa-linkedin-in"></i></a>
                                <a href={settingData.youtube} target='_blank' className="text-light  me-3"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/" className="navbar-brand p-0">
                            <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3"></i>{settingData.siteName}</h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/car" className="nav-item nav-link">Cars</NavLink>
                                <NavLink to="/feature" className="nav-item nav-link">Feature</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                <NavLink to="/faq" className="nav-item nav-link">Faq</NavLink>
                                <NavLink to="/testimonial" className="nav-item nav-link">Testimonial</NavLink>
                                <NavLink to="/contact" className="nav-item nav-link">ContactUs</NavLink>
                                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>

                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nitin Chauhan</a>
                                    <div className="dropdown-menu m-0">
                                        <Link to="/profile" className="dropdown-item">Profile</Link>
                                        <Link to="/admin" className="dropdown-item">Admin Dashboard</Link>
                                        <Link to="/profile" className="dropdown-item">Our Orders</Link>
                                        <button className="dropdown-item">Logout</button>
                                    </div>
                                </div>
                            </div>
                            {/* <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a> */}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}