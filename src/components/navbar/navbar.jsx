import React, {} from 'react'
import { useMediaQuery } from 'react-responsive'
// import {useHistory} from 'react-router-dom'
import './navbar.css'
export default (props) => {
    // const history = useHistory()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <>
            { !isTabletOrMobile ? (
                <div className="navbar">
                    <div className="left">
                        <p>TAMA FARMA</p>
                    </div>
                </div>
            ) : 
                null 
            }
        </>
    )
}