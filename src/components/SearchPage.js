import React from 'react'
import Button from '@material-ui/core/Button'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august 2 guests</p>
                <h1>Stay nearby</h1>

                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filter</Button>

            </div>
        </div>
    )
}

export default SearchPage
