import React, { useEffect, useState } from 'react';
import icons from '../../ultis/icon';
import { apiSearch } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import path from '../../component/../ultis/path';
import { createSearchParams, useNavigate } from 'react-router-dom';
import * as action from './../../pages/store/actions/music'
import { GrClose } from "react-icons/gr";

const { FiSearch } = icons;
const Search = () => {
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSearch = async (e: any) => {
        if (e.keyCode === 13) {
            dispatch(action.search(keyword) as any)
            navigate({
                pathname: `/${path.SEARCH}/${path.ALL}`,
                search: createSearchParams({
                    q: keyword
                }).toString()
            })
        }
    }
    const clearKeyword = () => {
        setKeyword('');
    };

    return (
        <div>
            <div className='w-full flex items-center'>
                {/* {keyword && <span onClick={() => setKeyword('')} className='absolute right-0 cursor-pointer'><GrClose /></span>
                } */}
                {keyword && <div onClick={() => clearKeyword()} className=' absolute ml-[490px]'> <GrClose />
                </div>
                }

                <span className=' rounded-l-[20px] h-10 px-4 bg-[#DDE4E4] flex items-center justify-center'>
                    <FiSearch size={24} /></span>
                <input
                    type="text"
                    className='w-full outline-none px-4 bg-[#DDE4E4] py-2 rounded-r-[20px] h-10'
                    placeholder='Tìm kiếm bài hát,nghệ sĩ, lời bài hát...'
                    onChange={e => setKeyword(e.target.value)}
                    value={keyword}
                    onKeyUp={handleSearch}
                />
            </div>
        </div>
    )
}

export default Search