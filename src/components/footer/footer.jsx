import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import './footer.css'
export default (props) =>{ 
    return (
        <div className="foot">
            <div className="tentangkami">
                <p className="title">Tentang Kami</p>
                <p className="info">Tentu nya sakit itu mengganggu aktifitas anda.
                    Kami dari Apotek Tama Farma siap membantu jika anda memperlukan obat-obatan.
                    Disini juga tersedia praktek dokter!
                </p>
            </div>
            <div className="contact">
                <p className="title">Hubungi kami</p>
                <p className="info"><FontAwesomeIcon icon={faWhatsapp} /> &nbsp; 085233044844</p>
                <p className="info"><FontAwesomeIcon icon={faInstagram} /> &nbsp; @tamafarma</p>
                <p className="info"><FontAwesomeIcon icon={faMapMarkedAlt} /> &nbsp; <a href="https://www.google.com/maps/place/Apotek+Tama+Farma/@-7.6279567,111.5282792,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79bf25347b92df:0x52b2bddf9d4624f3!8m2!3d-7.6279567!4d111.5304679">Jl. Bolodewo no. 2, Madiun</a> ( Click alamat )</p>
                <pre className="info">Senin - Jumat : 09.00 - 22.00</pre>
                <pre className="info">Sabtu         : 09.00 - 20.00</pre>
                <pre className="info">Minggu        : 10.00 - 16.00</pre>
            </div>
        </div>
    )
}