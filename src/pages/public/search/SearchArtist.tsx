import React from 'react'
import { useSelector } from 'react-redux';
import Artist from '../../../component/list/Artist';

const SearchArtist = () => {

    const { searchData } = useSelector((state: any) => state.music)
    return (
        <div>
            <div className='cursor-pointer flex flex-col w-full'>
                <span className='text-20-28 font-bold ml-[75px]'>NGHỆ SĨ/OA</span>
                <div className='grid grid-cols-4 gap-5 items-center justify-center w-full mt-5'>
                    {searchData?.artists?.slice(0, 20).map((item: any) => {
                        return (
                            <div className=''>
                                <Artist
                                    key={item.id}
                                    image={item.thumbnailM}
                                    title={item.name}
                                    follower={item.totalFollow}
                                    link={item.link}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='h-[100px]'></div>
        </div>
    )
}

export default SearchArtist