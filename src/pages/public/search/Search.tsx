import React from 'react'
import { Outlet } from 'react-router-dom'

const Search = () => {
    return (

        <div className=''>
            <div className='flex w-full h-[100px] items-center ml-[110px] mt-[80px] cursor-pointer'>
                <span className='text-24-32 font-bold border-r border-gray-400 px-4'>Kết quả tìm kiếm</span>
                <div className='flex items-center'>
                    <span className='px-4 hover:text-main-500'>TẤT CẢ</span>
                    <span className='px-4 hover:text-main-500'>BÀI HÁT</span>
                    <span className='px-4 hover:text-main-500'>PLAYLIST/ALBUM</span>
                    <span className='px-4 hover:text-main-500'>NGHỆ SỸ/OA</span>
                    <span className='px-4 hover:text-main-500'>MV</span>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Search