import React from 'react'
// import moment from 'moment'
// import 'moment/locale/vi'

interface SongItemProps {

    thumbnail: string,
    title: string,
    artists: string,
    order: string,
    percent: any,
    sid: any,
    releaseDate: any

}
const SongItem: React.FC<SongItemProps> = ({ thumbnail, title, artists, sid, releaseDate, order, percent }) => {
    return (
        // artistsNames
        <div className={`w-full justify-between items-center flex flex-auto p-[10px] gap-[10px] cursor-pointer rounded-md ${order ? 'text-white bg-[hsla(0,0%,100%,.07)] hover:bg-[#945EA7]' : 'text-black  hover:bg-main-200'}`}>
            <div className='flex gap-4 items-center'>
                {order && <span className='text-white text-32-40'>{order}</span>}
                <img src={thumbnail} className='w-[60px] h-[60px] rounded-md object-cover' />
                <div className='flex flex-col ml-3'>
                    <span className='text-[#32323D] text-14-20'>{typeof title === 'string' && title}</span>
                    <span className='text-12-16 opacity-70'>{artists}</span>
                    {/* {releaseDate && <span className='text-xs text-gray-700'>{moment(releaseDate * 1000).fromNow()}</span>} */}
                </div>
            </div>
            {percent && <span>{`${percent}%`}</span>}
        </div>

    )
}

export default SongItem