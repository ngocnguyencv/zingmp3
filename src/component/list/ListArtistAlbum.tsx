import React from 'react'
import { RiUserAddLine } from "react-icons/ri";

interface ListArtistAlbumProps {
    artistData: any
}


const ListArtistAlbum: React.FC<ListArtistAlbumProps> = ({ artistData }) => {
    return (
        <div className='flex mt-5'>
            {artistData?.map((item: any) => (
                <div key={item.id} className='flex flex-col items-center w-full'>
                    <img src={item.thumbnail}
                        alt={item.name}
                        className='rounded-full h-[203px] w-[203px] p-3 text-14-20 text-[#32323D]'
                    />
                    <span>{item.name}</span>
                    <div className='flex gap-1'>
                        <span>{`${item.totalFollow ? Math.round(item.totalFollow / 1000) : 0}K`}</span><span>quan tâm</span>
                    </div>
                    {/* <div>{item.link}</div> */}
                    <div className='flex' >
                        <span className='rounded-lg bg-[#0E8080] text-12-18 text-white px-5 py-1 flex items-center gap-1'><RiUserAddLine /> Quan tâm</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListArtistAlbum