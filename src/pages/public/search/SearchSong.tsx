import React from 'react'
import { useSelector } from 'react-redux';
import SectionItem from '../../../component/section/SectionItem';
import List from '../../../component/list/List';

const SearchSong = () => {
    const { searchData } = useSelector((state: any) => state.music)

    return (
        <div className='flex flex-col w-full px-[75px]'>
            <h3 className='font-bold text-20-28'>BÀI HÁT</h3>
            <div className='flex flex-wrap justify-end w-full'>
                {searchData.songs?.map((item: any) => {
                    return (
                        <div key={item.encodeId} className='grid grid-cols-1 h-[70px] w-full '>
                            <List
                                songData={item}
                                isHiddenAlbum
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SearchSong