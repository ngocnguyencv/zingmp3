import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { searchMenu } from '../../../ultis/menu'
const Search = () => {
    return (

        <div className=''>
            <div className='flex w-full h-[100px] items-center ml-[110px] mt-[80px] cursor-pointer'>
                <span className='text-24-32 font-bold border-r border-gray-400 px-4'>Kết quả tìm kiếm</span>
                <div className='flex items-center gap-10 ml-10'>
                    {searchMenu.map((item: any) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            className={({ isActive }) => { return isActive ? 'underline text-main-500' : '' }}
                        >
                            {item.text}
                        </NavLink>
                    ))}

                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Search