import React from 'react'
import './Page.css'
import pic from '../assets/avatar-jessica.jpeg'

const Page = () => {
    return (
        <div className='page'>
            <div className="pagecon">
                <div className="con1">
                    <img src={pic} alt="" />
                    <h1>Devv_el</h1>
                    <p className='p1'>London,united kingdom</p>
                    <p>"front-end developer and Avid-reader"</p>
                </div>
                <div className="con2">
                    <a href="">Github</a>
                    <a href="">Frontend mentor</a>
                    <a href="">Linkedln</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Page
