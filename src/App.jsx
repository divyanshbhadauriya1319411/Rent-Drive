import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import FeaturesPage from './Pages/FeaturesPage'
import ServicePage from './Pages/ServicePage'
import CarsPage from './Pages/CarsPage'
import CarDetailsPage from './Pages/CarDetailsPage'
import TestimonialPage from './Pages/TestimonialPage'
import ContactUsPage from './Pages/ContactUsPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TermsAndConditions from './Pages/TermsAndConditions'
import ErrorPage from './Pages/ErrorPage'
import AdminHomePage from './Pages/Admin/AdminHomePage'
import AdminCategoryPage from './Pages/Admin/Category/AdminCategoryPage'
import AdminCreateCategoryPage from './Pages/Admin/Category/AdminCreateCategoryPage'
import AdminUpdateCategoryPage from './Pages/Admin/Category/AdminUpdateCategoryPage'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/feature' element={<FeaturesPage />} />
                <Route path='/service' element={<ServicePage />} />
                <Route path='/car' element={<CarsPage />} />
                <Route path='/car/:id' element={<CarDetailsPage />} />
                <Route path='/testimonial' element={<TestimonialPage />} />
                <Route path='/contact' element={<ContactUsPage />} />
                <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
                <Route path='/tc' element={<TermsAndConditions />} />

                {/* Admin Routes */}
                <Route path='/admin' element={<AdminHomePage />} />

                <Route path='/admin/category' element={<AdminCategoryPage />} />
                <Route path='/admin/category/create' element={<AdminCreateCategoryPage />} />
                <Route path='/admin/category/update/:id' element={<AdminUpdateCategoryPage />} />


                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}