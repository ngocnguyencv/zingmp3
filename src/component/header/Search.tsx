import React from 'react';
import icons from '../../ultis/icon';

const { FiSearch } = icons;
const Search = () => {
    return (
        <div>
            <div className='w-full flex items-center'>
                <span className=' rounded-l-[20px] h-10 px-4 bg-[#DDE4E4] flex items-center justify-center'> <FiSearch size={24} /></span>
                <input
                    type="text"
                    className='w-full outline-none px-4 bg-[#DDE4E4] py-2 rounded-r-[20px] h-10'
                    placeholder='Tìm kiếm bài hát,nghệ sĩ, lời bài hát...'
                />
            </div>
        </div>
    )
}

export default Search