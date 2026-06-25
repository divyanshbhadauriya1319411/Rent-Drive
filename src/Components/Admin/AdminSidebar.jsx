import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <>
        <div className="list-group">
            <Link to="/admin" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-house-door fs-5'></i><span className='float-end'>Home</span></Link>
            <Link to="/admin/category" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-list-check fs-5'></i><span className='float-end'>Category</span></Link>
            <Link to="/admin/brand" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-list fs-5'></i><span className='float-end'>Brand</span></Link>
            <Link to="/admin/car" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-car-alt fs-5'></i><span className='float-end'>car</span></Link>
            <Link to="/admin/feature" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-tag fs-5'></i><span className='float-end'>feature</span></Link>
            <Link to="/admin/service" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-tags fs-5'></i><span className='float-end'>service</span></Link>
            <Link to="/admin/faq" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-question-circle fs-5'></i><span className='float-end'>faq</span></Link>
            <Link to="/admin/setting" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-gear fs-5'></i><span className='float-end'>setting</span></Link>
            <Link to="/admin/newsletter" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-envelope fs-5'></i><span className='float-end'>Newsletter</span></Link>
            <Link to="/admin/contact" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-telephone fs-5'></i><span className='float-end'>Contact</span></Link>
            <Link to="/admin/user" className="mb-1 list-group-item list-group-item-action active" aria-current="true"> <i className='bi bi-people fs-5'></i><span className='float-end'>User</span></Link>

        </div>
    </>
  )
}
