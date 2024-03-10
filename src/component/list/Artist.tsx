import React from 'react'
import { handlNumber } from '../../ultis/fn'
import { RiUserAddLine } from "react-icons/ri";
import { Link } from "react-router-dom"

interface ArtistProps {
    image: any,
    title: string,
    follower: number,
    link: string
}
const Artist: React.FC<ArtistProps> = ({ image, title, follower, link }) => {
    return (
        <div className='flex flex-1 flex-col w-full items-center justify-center'>
            <Link to={link}>
                <img src={image} className='size-[198px] object-cover rounded-full' />
            </Link>
            <div className='mt-3 '>
                <Link className='text-sm font-medium hover:underline hover:text-main-500' to={link}>{title}</Link>
            </div>
            <div>
                <span className='opacity-70'>{`${handlNumber(follower)} quan tâm`}</span>
            </div>
            <div className='mt-5'>
                <button className='rounded-lg bg-[#0E8080] text-12-18 text-white px-5 py-1 flex items-center gap-1'><RiUserAddLine /> Quan tâm</button>
            </div>
        </div>
    )
}

export default Artist