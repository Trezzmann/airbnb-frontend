import React from 'react'
import Banner from './components/Banner'
import Card from './components/Card'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Banner/>

            <div className="home_section">
                <Card
                    src="https://i.pinimg.com/originals/a9/c9/12/a9c912f9a8528bb9284713e1622c7e70.jpg"
                    description="Comfortable private places,with friends room"
                    title="Entire homes"
                />
                <Card
                    src="https://i.pinimg.com/originals/c8/a4/9c/c8a49c6babe79c2efd4a6963c931df3e.jpg"
                    description="Comfortable private places,with friends room"
                    title="Lorem homes"
                />
                <Card 
                    src="https://i.pinimg.com/originals/a9/c9/12/a9c912f9a8528bb9284713e1622c7e70.jpg"
                    description="Comfortable private places,Lorem ipsum ipsum sadi,"
                    title="Lorem Ipsum"
                />
            </div>
            <div className="home_section">
                <Card
                    src="https://i.pinimg.com/originals/a9/c9/12/a9c912f9a8528bb9284713e1622c7e70.jpg"
                    description="Comfortable private places,with friends room"
                    price="20$"
                    title="Entire homes"
                />
                <Card
                    src="https://i.pinimg.com/originals/c8/a4/9c/c8a49c6babe79c2efd4a6963c931df3e.jpg"
                    description="Comfortable private places,with friends room"
                    price="20$"
                    title="Lorem homes"
                />
                <Card 
                    src="https://i.pinimg.com/originals/a9/c9/12/a9c912f9a8528bb9284713e1622c7e70.jpg"
                    description="Comfortable private places,Lorem ipsum ipsum sadi,"
                    price="100$"
                    title="Lorem Ipsum"
                />
            </div>
        </div>
    )
}

export default Home
