import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'

import ImageValidators from '../../../FormValidators/ImageValidators'
import TextValidators from '../../../FormValidators/TextValidators'

import { createCar } from "../../../Redux/ActionCreators/CarActionCreators"
import { getCategory } from "../../../Redux/ActionCreators/CategoryActionCreators"
import { getBrand } from "../../../Redux/ActionCreators/BrandActionCreators"
export default function AdminCreateCarPage() {
    let [data, setData] = useState({
        name: '',
        registrationNumber: '',
        drivingMode: 'Manual',
        driver: false,
        type: 'CNG',
        seatingCapacity: '5',
        category: '',
        brand: '',
        baseRentAmount: 0,
        discount: 0,
        finalRentAmount: 0,
        address: "",
        pic: [],
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: 'Name Field is Mendatory',
        registrationNumber: 'Registration Number Field is Mendatory',
        baseRentAmount: 'Base Rent Amount Field is Mendatory',
        discount: 'Discount Field is Mendatory',
        address: 'Address Field is Mendatory',
        pic: 'Pic Field is Mendatory'
    })
    let [show, setShow] = useState(false)

    let CategoryStateData = useSelector(state => state.CategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? Array.from(e.target.files).map(x => "car/" + x.name) : e.target.value
        // let value = name === "pic" ? e.target.files : e.target.value

        setData({ ...data, [name]: (name === "status" || name === "driver") ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidators(e) : TextValidators(e) })
    }
    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let response = await fetch(`https://nominatim.openstreetmap.org/search?q=${data.address}&format=jsonv2&limit=1`)
            response = await response.json()

            if (response.length === 0) {
                setErrorMessage({ ...errorMessage, address: "Invalid Address, Please Enter Correct Address" })
                setShow(true)
                return
            }

            let bp = parseInt(data.baseRentAmount)
            let d = parseInt(data.discount)
            let fp = parseInt(bp - bp * d / 100)


            dispatch(createCar({
                ...data,
                category: data.category || CategoryStateData[0].name,
                brand: data.brand || BrandStateData[0].name,
                baseRentAmount: bp,
                discount: d,
                finalRentAmount: fp,
                address: {
                    address: data.address,
                    lat: response[0].lat,
                    lon: response[0].lon,
                }
            }))

            // let formData = new FormData()
            // formData.append("name", data.name)
            // formData.append("registrationNumber", data.registrationNumber)
            // formData.append("drivingMode", data.drivingMode)
            // formData.append("drive", data.drive)
            // formData.append("type", data.type)
            // formData.append("address", {
            //   address: data.adddress,
            //   lat: response[0].lat,
            //   lon: response[0].lon,
            // })
            // formData.append("seatingCapacity", data.seatingCapacity)
            // formData.append("category", data.category || CategoryStateData[0]._id)
            // formData.append("brand", data.brand || BrandStateData[0]._id)
            // formData.append("baseRentAmount", bp)
            // formData.append("discount", d)
            // formData.append("finalRentAmount", fp)
            // Array.from(data.pic).forEach(x => {
            //   formData.append("pic", x)
            // })
            // formData.append("status", data.status)
            // dispatch(createCar(formData))

            navigate("/admin/car")
        }
    }

    useEffect(() => {
        dispatch(getCategory())
    }, [CategoryStateData.length])

    useEffect(() => {
        dispatch(getBrand())
    }, [BrandStateData.length])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Create Car
                            <Link to="/admin/car"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-xl-9 col-md-6 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" onChange={getInputData} placeholder='Car Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Registration Number*</label>
                                    <input type="text" name="registrationNumber" onChange={getInputData} placeholder='Registration Number' className={`form-control ${show && errorMessage.registrationNumber ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.registrationNumber ? <p className='text-danger text-capitalize'>{errorMessage.registrationNumber}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Category*</label>
                                    <select name="category" onChange={getInputData} className='form-select border-primary'>
                                        {CategoryStateData.filter(x => x.status).map((item) => {
                                            return <option key={item.id}>{item.name}</option>
                                            // return <option key={item.id} value={item._id}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Brand*</label>
                                    <select name="brand" onChange={getInputData} className='form-select border-primary'>
                                        {BrandStateData.filter(x => x.status).map((item) => {
                                            return <option key={item.id}>{item.name}</option>
                                            // return <option key={item.id} value={data._id}>{item.name}</option>
                                        })}
                                    </select>
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label>Base Rent Amount Par Day*</label>
                                    <input type="number" name="baseRentAmount" onChange={getInputData} placeholder='Basic Rent Amount Par Day' className={`form-control ${show && errorMessage.baseRentAmount ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.baseRentAmount ? <p className='text-danger text-capitalize'>{errorMessage.baseRentAmount}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Discount*</label>
                                    <input type="number" name="discount" onChange={getInputData} placeholder='Discount' className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.discount ? <p className='text-danger text-capitalize'>{errorMessage.discount}</p> : null}
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Driving Mode*</label>
                                    <select name="drivingMode" onChange={getInputData} className='form-select border-primary'>
                                        <option>Manual</option>
                                        <option>Autometic</option>
                                    </select>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Drive Requied*</label>
                                    <select name="driver" onChange={getInputData} className='form-select border-primary'>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Seating Capacity*</label>
                                    <select name="seatingCapacity" value={5} onChange={getInputData} className='form-select border-primary'>
                                        <option>2</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>7</option>
                                        <option>11</option>
                                    </select>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Type*</label>
                                    <select name="type" onChange={getInputData} className='form-select border-primary'>
                                        <option>CNG</option>
                                        <option>Petrol</option>
                                        <option>EV</option>
                                        <option>Petrol + Hybrid</option>
                                        <option>Diesel</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Address*</label>
                                    <input type="text" name="address" onChange={getInputData} placeholder='Address' className={`form-control ${show && errorMessage.address ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.address ? <p className='text-danger text-capitalize'>{errorMessage.address}</p> : null}
                                </div>

                                <div className="col-xl-6 col-md-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name="pic" multiple onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>



                                <div className="col-xl-6 col-md-6 mb-3">
                                    <label>Status*</label>
                                    <select name="status" className='form-select border-dark' onChange={getInputData}>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <button type='submit' className='btn btn-primary w-100'>Create</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}