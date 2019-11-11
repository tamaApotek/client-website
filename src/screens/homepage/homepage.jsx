import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import Footer from '../../components/footer/footer.jsx'
import Dokter from '../../components/dokter/dokter.jsx'
import './homepage.css'
import gambar1 from '../../assets/background.jpg'
import gambar2 from '../../assets/background2.jpg'
import gambar3 from '../../assets/background3.jpg'

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}
export default (props) => {

    const [i , setI] = useState(0)
    const [gambar, setGambar] = useState(gambar1)

    // useInterval(()=>{
    //     if(i == 2) setI(0)
    //     else {
    //         setI(i+1)
    //     }
    // }, [5000])
    // useEffect(() => { 
    //     if(i === 0){
    //         setGambar(gambar1)
    //     }else if(i === 1){
    //         setGambar(gambar2)
    //     }
    //     else if(i=== 2){
    //         setGambar(gambar3)
    //     }
    // }, [i])
   
    
    return (
        <>
            {/* <Navbar /> */}
            
            <div className="homepage" style={{height: window.innerHeight, backgroundImage: `url(${gambar})`}}>
                <div className="title">
                    <p className="main">Apotek Tama Farma</p>
                    <p className="subtitle">Siap membantu anda</p>
                </div>
            </div>
            <Dokter />
            <Footer />
        </>
    )
}