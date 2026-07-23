import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css"


import { getCar, deleteCar } from "../../../Redux/ActionCreators/CarActionCreators"
export default function AdminCarPage() {
    let [data, setData] = useState([])

    let CarStateData = useSelector(state => state.CarStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are You Sure You Want to Delete That Record")) {
            dispatch(deleteCar({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }

    useEffect(() => {
        let time = (() => {
            dispatch(getCar())
            if (CarStateData.length) {
                setData(CarStateData)
                return setTimeout(() => new DataTable('#myTable'), 500)
            }
        })()
        return () => clearTimeout(time)
    }, [CarStateData.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Car
                            <Link to="/admin/car/create"><i className='bi bi-plus text-light float-end'></i></Link>
                        </h5>
                        <div className="table-responsive">
                            <table id='myTable' className='table table-bordered text-dark'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Registration Number</th>
                                        <th>Driving Mode</th>
                                        <th>Driver</th>
                                        <th>Type</th>
                                        <th>Seating Capacity</th>
                                        <th>Category</th>
                                        <th>Brand</th>
                                        <th>Base Rent Amount</th>
                                        <th>Discount</th>
                                        <th>Final Rent Amount</th>
                                        <th>City</th>
                                        <th>Pic</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.registrationNumber}</td>
                                            <td>{item.drivingMode}</td>
                                            <td>{item.driver ? "Yes" : "No"}</td>
                                            <td>{item.type}</td>
                                            <td>{item.seatingCapacity}</td>
                                            <td>{item.category}</td>
                                            <td>{item.brand}</td>
                                            <td>&#8377;{item.baseRentAmount}</td>
                                            <td>{item.discount}% Off</td>
                                            <td>&#8377;{item.finalRentAmount}</td>
                                            <td>{item.city}</td>
                                            <td>
                                                <div style={{ width: 400 }}>
                                                    {item.pic.map((pic, index) => {
                                                        return <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${pic}`} target='_blank'>
                                                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${pic}`} height={60} width={100} className='m-1' alt="" />
                                                        </Link>
                                                    })}
                                                </div>
                                            </td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td><Link to={`/admin/car/update/${item.id}`} className='btn btn-primary'><i className='bi bi-pencil-square'></i></Link></td>
                                            <td><button onClick={() => deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-x'></i></button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}