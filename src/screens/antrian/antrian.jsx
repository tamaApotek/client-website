import React from 'react'
import './antrian.css'

export default (props) => {
    const heightScreen = window.innerHeight
    return (
        <>
            {/* <div className="navbar-antrian">
                <p>Selamat datang di praktek Apotek Tama Farma</p>
            </div> */}
            <div className="doc" style={{width: '100%', height: heightScreen}}>
                <div className="first">
                    <div className="box">
                        <p className="antrian">NOMOR ANTRIAN</p>
                        <p className="nomorantrian">100</p>
                        <p className="total">TOTAL ANTRIAN</p>
                        <p className="nomortotal">200</p>
                    </div>
                </div>
            </div>
        </>
    )
}