import React from 'react'
import {useHistory} from 'react-router-dom'
import './login.css'
export default (props) => {
    const history = useHistory()
    return (
        <div className="login" style={{width: '100%', backgroundColor: 'white', height: window.innerHeight}}>
            <p className="title">Login untuk dokter</p>
            <p className="error">Maaf password anda salah</p>
            <form onClick={() => 
                history.push('/dokter') } style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password" />
                <button type="submit">Masuk</button>
            </form>
        </div>
    )
}