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

import AdminBrandPage from './Pages/Admin/brand/AdminBrandPage'
import AdminCreateBrandPage from './Pages/Admin/brand/AdminCreateBrandPage'
import AdminUpdateBrandPage from './Pages/Admin/brand/AdminUpdateBrandPage'

import AdminFeaturePage from './Pages/Admin/feature/AdminFeaturePage'
import AdminCreateFeaturePage from './Pages/Admin/feature/AdminCreateFeaturePage'
import AdminUpdateFeaturePage from './Pages/Admin/feature/AdminUpdateFeaturePage'

import AdminServicePage from './Pages/Admin/service/AdminServicePage'
import AdminCreateServicePage from './Pages/Admin/service/AdminCreateServicePage'
import AdminUpdateServicePage from './Pages/Admin/service/AdminUpdateServicePage'

import AdminFaqPage from './Pages/Admin/faq/AdminFaqPage'
import AdminCreateFaqPage from './Pages/Admin/faq/AdminCreateFaqPage'
import AdminUpdateFaqPage from './Pages/Admin/faq/AdminUpdateFaqPage'

import AdminSettingPage from './Pages/Admin/setting/AdminSettingPage'
import AdminCreateSettingPage from './Pages/Admin/setting/AdminCreateSettingPage'
import AdminUpdateSettingPage from './Pages/Admin/setting/AdminUpdateSettingPage'

import AdminCarPage from './Pages/Admin/car/AdminCarPage'
import AdminCreateCarPage from './Pages/Admin/car/AdminCreateCarPage'
import AdminUpdateCarPage from './Pages/Admin/car/AdminUpdateCarPage'


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


                <Route path='/admin/brand' element={<AdminBrandPage />} />
                <Route path='/admin/brand/create' element={<AdminCreateBrandPage />} />
                <Route path='/admin/brand/update/:id' element={<AdminUpdateBrandPage />} />

                <Route path='/admin/feature' element={<AdminFeaturePage />} />
                <Route path='/admin/feature/create' element={<AdminCreateFeaturePage />} />
                <Route path='/admin/feature/update/:id' element={<AdminUpdateFeaturePage />} />


                <Route path='/admin/service' element={<AdminServicePage />} />
                <Route path='/admin/service/create' element={<AdminCreateServicePage />} />
                <Route path='/admin/service/update/:id' element={<AdminUpdateServicePage />} />

                <Route path='/admin/faq' element={<AdminFaqPage />} />
                <Route path='/admin/faq/create' element={<AdminCreateFaqPage />} />
                <Route path='/admin/faq/update/:id' element={<AdminUpdateFaqPage />} />


                <Route path='/admin/setting' element={<AdminSettingPage />} />
                <Route path='/admin/setting/create' element={<AdminCreateSettingPage />} />
                <Route path='/admin/setting/update/:id' element={<AdminUpdateSettingPage />} />

                <Route path='/admin/car' element={<AdminCarPage />} />
                <Route path='/admin/car/create' element={<AdminCreateCarPage />} />
                <Route path='/admin/car/update/:id' element={<AdminUpdateCarPage />} />




                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}