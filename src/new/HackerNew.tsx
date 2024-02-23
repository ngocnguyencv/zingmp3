import axios from 'axios'
import React, { useState } from 'react'



const HackerNew = () => {
    const [hits, sethits] = useState([])
    const handleFetchData = async () => {
        const data = await axios.get(
            "https://hn.algolia.com/api/v1/search?query=react"
        )
        console.log("dfdfdsfsd", data)
    }
    React.useEffect(() => {
        handleFetchData()
    }, [])
    return (
        <div>
            {
                hits.length > 0 &&
                hits.map((item, index) =>
                    <h3>f</h3>
                    // <h3 key={item.title}>{item.title}</h3>
                )
            }</div>
    )
}

export default HackerNew