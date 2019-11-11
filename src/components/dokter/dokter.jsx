import React, { useEffect, useState } from 'react'
import './dokter.css'
import axios from 'axios'
import {baseUrl} from '../../config'
export default (props) => {
    const [dokters, setDokters] = useState([])
    const [err, setErr] = useState(null)
    const fetchDokters = () => {
        axios({
            url: `${baseUrl}/dokters/all`,
            method: 'get'
        })
        .then(({data}) => {
            setErr(null)
            setDokters(data)
        })
        .catch(err => {

            if(err.request){
                setErr(`Maaf ya sepertinya server sedang bermasalah... Silahkan hubungi Apotek kami untuk info lebih lanjut.`)
            }else {
                console.log(err.message)
            }
        })
    }
    useEffect(() => {
        fetchDokters()
    }, [])
    return (
        <div className="dokters" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p className="title">Praktek Dokter</p>
            <p className="desc">Temukan dokter spesialis di Apotek Tama Farma sesuai dengan kebutuhan anda. Untuk pengambilan nomor antrian dapat dilakukan H-1. Harap hubungi Apotek kami terimakasih.</p>
            {
                err ? <p>{err}</p> :
                dokters.map((dokter, index) => {
                    return (
                        <div className="dokter" key={index}>
                            
                            <img className="foto" src={dokter.image} alt="dokter"/>
                            <p className="namaDokter">{dokter.fullName}</p>
                            <p className="spesialisDokter"><em>Spesialis {dokter.spesialis}</em></p>                            
                            <div style={{width: '100%', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            {
                                dokter.statusPraktek ? (
                                    <p style={{textDecoration: 'underline'}}>Praktek sedang <b>Buka</b></p>
                                ): 
                                (
                                    <>
                                        <p style={{textDecoration: 'underline', marginBottom: '15px'}}>Maaf praktek sedang <b>Tutup</b></p>
                                        <p style={{fontWeight: 600, fontSize: '1rem', marginBottom: 0}}>Jadwal Praktek:</p>
                                        <div className="jadwal">
                                            {
                                                Object.keys(dokter.jamPraktek).map((hari, index) => {
                                                    if(dokter.jamPraktek[hari].from !== "Tutup"){
                                                        return (<pre style={{fontSize: '1.1rem'}} key={index}>{hari}: {dokter.jamPraktek[hari].from} - {dokter.jamPraktek[hari].to}</pre>)
                                                    }else return null
                                                })
                                            }
                                            {/* <pre>Senin  : 10.00 - 22.00</pre>
                                            <pre>Selasa : 10.00 - 22.00</pre>
                                            <pre>Rabu   : 10.00 - 22.00</pre>
                                            <pre>Jumat  : 10.00 - 22.00</pre> */}
                                        </div>
                                        
                                    </> 
                                )   
                            }  
                            </div>      
                        </div>
                    )
                })
            }
            
        </div>
    )
}