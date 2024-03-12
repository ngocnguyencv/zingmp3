import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { searchMenu } from '../../../ultis/menu'

const notActiveStyle = 'px-4 hover:text-main-5 font-semibold cursor-pointer  border-green-900 text-main-500 flex item-center h-[52px]'
const activeStyle = 'px-4 text-main-500 font-semibold cursor-pointer border-b-2 border-green-900 text-main-500 flex item-center h-[52px]'
const Search = () => {
    return (

        <div className='w-full'>
            <div className='flex w-full h-[50px] mt-[100px] mb-7 items-center pl-[60px] pb-1 cursor-pointer border-b border-gray-400'>
                <span className='text-24-32 font-bold border-r border-gray-400 px-4  hidden md:inline'>Kết quả tìm kiếm</span>
                <div className='flex items-center'>
                    {searchMenu.map((item: any) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            className={({ isActive }) => { return isActive ? activeStyle : notActiveStyle }}
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