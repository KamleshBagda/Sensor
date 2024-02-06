import React from 'react'
import HomeCard from './HomeCard'
import CardData from './CardData.json'
import { useState } from 'react'

function Products() {
    const [datasearch, setDatasearch] = useState("")
    const handlesearch = (e) => {
        setDatasearch(e.target.value)
    }
    return (
        <>

            <div className="container-fluid my-1">
                <div className="row d-flex">
                    <div className="col-12 my-2 col-sm-6 order-2 text-center order-sm-1">
                        <h1 className='text-decoration-underline'>Products</h1>
                    </div>
                    <div className="col-12 my-2 col-sm-6 text-center order-1 order-sm-2">
                        <input type="search" name="search" id="search" className='ms-auto p-2 mt-1 border border-secondary text-center rounded-pill text-black fw-bold fs-5 w-50' placeholder='Search Item' style={{ backgroundColor: 'transparent', width: 'auto' }} onChange={handlesearch} value={datasearch} />
                    </div>
                </div>
            </div>


            {
                CardData
                    .filter((e) => {
                        if (datasearch == "") {
                            return e;
                        }
                        else if (e.Title.toLowerCase().includes(datasearch.toLowerCase())) {
                            return e;
                        }
                    })
                    .map((e) => {
                        return (
                            <HomeCard data={e} />
                        )
                    })
            }

            {/* {

            CardData.map((e, i) =>
                <HomeCard data={e} key={i} />
            )
        } */}

        </>
    )
}

export default Products