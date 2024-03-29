import React, { memo, useState } from 'react'

import { BsDot } from "react-icons/bs";
import moment from 'moment'
import List from './List'

interface ListsProps {
    songs: any
    totalDuration: any
}

const Lists: React.FC<ListsProps> = ({ songs, totalDuration }) => {
    console.log({ songs, totalDuration })
    return (
        <div className='w-full flex flex-col text-xs text-gray-600 '>
            <div className='flex justify-between items-center p-[10px] font-semibold '>
                <span>BÀI HÁT</span>
                <span className='ml-10'>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className='flex flex-col'>
                {songs?.map((item: any) => (
                    <List
                        key={item.encodeId}
                        songData={item}
                        isHiddenAlbum={true}
                    />
                ))}
            </div>
            <span className='flex items-center gap-1 py-[10px] border-t border-[rgba(0,0,0,0.05)]'>
                <span>{`${songs?.length} bài hát`}</span>
                <BsDot size={24} />
                <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
            </span>
        </div>
    )
}

export default memo(Lists)