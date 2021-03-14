import React from 'react'
import Button from '@material-ui/core/Button'
import './SearchPage.css'
import SearchResult from './SearchResult'

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

            <SearchResult
                
                img="https://i.pinimg.com/originals/a9/c9/12/a9c912f9a8528bb9284713e1622c7e70.jpg"
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="1guest . 1bedroom . 1bed . 1,5 shared bthrooms . wifi . kitchen . Free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$117 / total"
            
            />

            <SearchResult
                
                img="https://i.pinimg.com/originals/a9/c9/12/a9c912f9a8528bb9284713e1622c7e70.jpg"
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="1guest . 1bedroom . 1bed . 1,5 shared bthrooms . wifi . kitchen . Free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$117 / total"
            
            />
        </div>
    )
}

export default SearchPage
