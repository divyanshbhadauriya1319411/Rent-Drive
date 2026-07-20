import React, { useEffect, useState, useRef } from 'react'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';

import RichTextEditor from '../../../rte/RichTextEditor';
import { createStructuredContent, renderHTML } from '../../../rte/richTextEditorBridge';



import { createSetting, getSetting, updateSetting } from "../../../Redux/ActionCreators/SettingActionCreators"
export default function AdminSettingPage() {
    let editorRefPrivacyPolicy = useRef(null)
    let editorRefDataPolicy = useRef(null)
    let [privacyPolicy, setPrivacyPolicy] = useState('')
    let [dataPolicy, setDataPolicy] = useState('')

    let [data, setData] = useState({
        siteName: '',
        address: '',
        map1: '',
        map2: '',
        email: '',
        phone: '',
        whatsapp: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        youtube: '',
    })

    function changePrivacyPolicy(documentModel, nextHtml) {
        setPrivacyPolicy(nextHtml !== undefined ? nextHtml : renderHTML(documentModel))
    }

    function changeDataPolicy(documentModel, nextHtml) {
        setDataPolicy(nextHtml !== undefined ? nextHtml : renderHTML(documentModel))
    }

    function handleChangePrivacyPolicy(nextHtml, editor) {
        changePrivacyPolicy(editor.getJSON(), nextHtml);
    }

    function handleChangeDataPolicy(nextHtml, editor) {
        changeDataPolicy(editor.getJSON(), nextHtml);
    }

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    function postData(e) {
        e.preventDefault()
        let item = { ...data, privacyPolicy: privacyPolicy, dataPolicy: dataPolicy, }

        if (SettingStateData.length)
            dispatch(updateSetting(item))
        else
            dispatch(createSetting(item))
        toast.success('Setting Updated Successfully');
    }

    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                setData({ ...data, ...SettingStateData[0] })
                console.log(SettingStateData[0])

                setTimeout(() => {
                    const documentModel1 = createStructuredContent(SettingStateData[0].privacyPolicy ?? "");
                    const documentModel2 = createStructuredContent(SettingStateData[0].dataPolicy ?? "");
                    changePrivacyPolicy(documentModel1, SettingStateData[0].privacyPolicy ?? "");
                    changeDataPolicy(documentModel2, SettingStateData[0].dataPolicy ?? "");
                }, 500)
                return setTimeout(() => new DataTable('#myTable'), 500)
            }
        })()
    }, [SettingStateData.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Setting</h5>
                        <form onSubmit={postData}>

                            <div className="col-12 mb-3">
                                <label>Map1</label>
                                <input type="url" name="map1" value={data.map1} onChange={getInputData} placeholder='Map1' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Map2</label>
                                <input type="url" name="map2" value={data.map2} onChange={getInputData} placeholder='Map2' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Address</label>
                                <input type="text" name="address" value={data.address} onChange={getInputData} placeholder='Address' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Site Name</label>
                                <input type="text" name="sitename" value={data.sitename} onChange={getInputData} placeholder='Site Name' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Email Address</label>
                                <input type="email" name="email" value={data.email} onChange={getInputData} placeholder='Email Address' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Phone Number</label>
                                <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder='Phone Number' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Whatsapp Number</label>
                                <input type="text" name="whatapp" value={data.whatapp} onChange={getInputData} placeholder='Whatsapp Number' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Address</label>
                                <input type="url" name="address" value={data.address} onChange={getInputData} placeholder='Address' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Facebook Profile Page URL</label>
                                <input type="url" name="facebook" value={data.facebook} onChange={getInputData} placeholder='Facebook Profile Page URL' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Twitter Profile Page URL</label>
                                <input type="url" name="twitter" value={data.twitter} onChange={getInputData} placeholder='Twitter Profile Page URL' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Instagram Profile Page URL</label>
                                <input type="url" name="instagram" value={data.instagram} onChange={getInputData} placeholder='Instagram Profile Page URL' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Linkedin Profile Page URL</label>
                                <input type="url" name="linkedin" value={data.linkedin} onChange={getInputData} placeholder='Linkedin Profile Page URL' className={`form-control border-dark`} />
                            </div>

                            <div className="col-12 mb-3">
                                <label>Privacy Policy</label>
                                <RichTextEditor
                                    ref={editorRefPrivacyPolicy}
                                    value={privacyPolicy}
                                    onChange={handleChangePrivacyPolicy}
                                    value={privacyPolicy}
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label> Data Policy</label>
                                <RichTextEditor
                                    ref={editorRefDataPolicy}
                                    onChange={handleChangeDataPolicy}
                                    className="border border-privacy"
                                    value={dataPolicy}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <button type='submit' className='btn btn-primary w-100'>Update</button>
                            </div>




                        </form>



                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}