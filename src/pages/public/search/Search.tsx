import React from 'react'
import { Outlet } from 'react-router-dom'

const Search = () => {
    return (

        <div className=''>
            <div>Search</div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Search