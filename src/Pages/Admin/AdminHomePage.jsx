import React from "react"
import AdminSidebar from "../../Components/Admin/AdminSidebar"


export default function AdminHomePge() {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar />
                </div>
                <div className="col-md-9">
                    <h5 className="bg-primary text-light text-center p-2 fs-4">Admin</h5>
                    <table className="table table-bordered text-dark">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Divyansh Bhadauriya</td>
                            </tr>
                            <tr>
                                <th>Username</th>
                                <td>Msd@1319411</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>divyanshbhadauriya888@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>7897350468</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>Super Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}