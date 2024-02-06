import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeCard from './HomeCard'
import CardData from './CardData.json'

function Home() {
    return (
        <>
            <HomeCarousel />
            <div className="title text-center my-4 fw-bold fs-1 text-black text-decoration-underline"><p>Products</p></div>
            {

                CardData.map((e, i) =>
                    <HomeCard data={e} key={i} />
                )
            }
        </>
    )
}

export default Home