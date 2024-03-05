import React, { useEffect, useState } from 'react';
import icons from '../../ultis/icon';
import { apiSearch } from '../../api';

const { FiSearch } = icons;
const Search = () => {
    const [keyword, setKeyword] = useState('')
    const handleSearch = async (e: any) => {
        if (e.keyCode === 13) {
            // const response = await apiSearch(keyword)
            // console.log(response)
        }
    }
    return (
        <div>
            <div className='w-full flex items-center'>
                <span className=' rounded-l-[20px] h-10 px-4 bg-[#DDE4E4] flex items-center justify-center'> <FiSearch size={24} /></span>
                <input
                    type="text"
                    className='w-full outline-none px-4 bg-[#DDE4E4] py-2 rounded-r-[20px] h-10'
                    placeholder='Tìm kiếm bài hát,nghệ sĩ, lời bài hát...'
                    onChange={e => setKeyword(e.target.value)}
                    onKeyUp={handleSearch}
                />
            </div>
        </div>
    )
}

export default Search