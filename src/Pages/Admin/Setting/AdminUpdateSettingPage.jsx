import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'

import TextValidators from '../../../FormValidators/TextValidators'

import { getSetting, updateSetting } from "../../../Redux/ActionCreators/SettingActionCreators"
export default function AdminUpdateSettingPage() {
    let { id } = useParams()

    let [data, setData] = useState({
        question: '',
        answer: '',
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        question: '',
        answer: ''
    })
    let [show, setShow] = useState(false)

    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
    }


    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = SettingStateData.find(x => x.id !== id && x.question?.toLocaleLowerCase() === data.question?.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, question: "Setting With This Question Already Exist" })
                return
            }

            dispatch(updateSetting({ ...data }))
            navigate("/admin/setting")
        }
    }

    useEffect(() => {
        dispatch(getSetting())
        if (SettingStateData.length) {
            let item = SettingStateData.find(x => x.id === id)
            if (item)
                setData({ ...data, ...item })
            else
                navigate("/admin/setting")
        }
    }, [SettingStateData.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Update Setting
                            <Link to="/admin/setting"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Question*</label>
                                    <input type="text" name="question" value={data.question} onChange={getInputData} placeholder='Setting question' className={`form-control ${show && errorMessage.question ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.question ? <p className='text-danger text-capitalize'>{errorMessage.question}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Answer*</label>
                                    <textarea name="answer" value={data.answer} rows={3} onChange={getInputData} placeholder='Setting Answer' className={`form-control ${show && errorMessage.answer ? 'border-danger' : 'border-dark'}`} />
                                    {show && errorMessage.answer ? <p className='text-danger text-capitalize'>{errorMessage.answer}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Status*</label>
                                    <select name="status" value={data.status ? "1" : "0"} className='form-select border-dark' onChange={getInputData}>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <button type='submit' className='btn btn-primary w-100'>Update</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}