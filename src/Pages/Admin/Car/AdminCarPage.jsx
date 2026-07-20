import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



import { getCar, deleteCar } from "../../../Redux/ActionCreators/carActionCreators"
import DataTable from 'datatables.net-dt'
export default function AdminCarPage() {
    let [data, setData] = useState([])

    let CarStateData = useSelector(state => state.CarStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are You Sure You Want to Delete That Record")) {
            dispatch(deleteCar({ id: id }))
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
                                        <th>Pic</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => {
                                        const base = import.meta.env.VITE_APP_IMAGE_SERVER || ""
                                        const pic = item.pic || ""
                                        const picPath = pic.startsWith("/") ? pic : pic ? `/${pic}` : ""
                                        const picUrl = `${base}${picPath}`
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                {picUrl
                                                    ? <Link to={picUrl} target='_blank'>
                                                        <img src={picUrl} height={60} width={100} alt={item.name}
                                                            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/100x60?text=No+Image" }} />
                                                    </Link>
                                                    : <span className="text-muted">No image</span>}
                                                <div className="small text-muted">{pic || "(no pic field)"}</div>
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