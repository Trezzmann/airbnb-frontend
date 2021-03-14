import React,{ useState } from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'


function Banner() {

    const [searchDate, setSearchDate] = useState(false)

    return (
        <div className="banner">
            
            <div className="banner__search">
                <Button variant="outlined" className="banner__searchButton" onClick={()=>setSearchDate(!searchDate)}>{searchDate ? "Hide":"Show dates"}</Button>
            </div>
            {searchDate && <Search/>}
            <div className="banner__info">
                <h1>Get out and strecth your imagination</h1>
                <h5>Plan a different kind of getway to encover the hidden gems near you</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
