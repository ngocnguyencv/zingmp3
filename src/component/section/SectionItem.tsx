import React, { memo, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import icons from '../../ultis/icon'


const { AiOutlineHeart, BsFillPlayFill, BsThreeDots } = icons
interface SectionItemProps {
    link: any,
    title: string,
    thumbnailM: string,
    artistsNames: string,
    data: any,
    sortDescription: any
}
const SectionItem: React.FC<SectionItemProps> = (
    { link, title, thumbnailM, artistsNames, data, sortDescription }
) => {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)
    const imageRef = useRef()

    // const handleHover = () => {
    //     setIsHover(true)
    //     imageRef.current.classList?.remove('animate-scale-down-image')
    //     imageRef.current.classList?.add('animate-scale-up-image')
    // }
    // const handleLeave = () => {
    //     setIsHover(false)
    //     imageRef.current.classList?.remove('animate-scale-up-image')
    //     imageRef.current.classList?.add('animate-scale-down-image')
    // }
    return (
        <div
            onClick={() => {
                navigate(link?.split('.')[0], { state: { playAlbum: false } })
            }}
            className='flex flex-col gap-3 flex-auto justify-start w-full text-sm cursor-pointer'
        >
            <div
                // onMouseEnter={handleHover}
                // onMouseLeave={handleLeave}
                className='w-full relative overflow-hidden rounded-lg'
            >
                {isHover && <div className='absolute top-0 bottom-0 z-40 left-0 right-0 bg-overlay-30 rounded-lg text-white flex items-center justify-center gap-3'>
                    <span><AiOutlineHeart size={25} /></span>
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                            navigate(link?.split('.')[0], { state: { playAlbum: true } })
                        }}
                        className='p-1 border border-white rounded-full'
                    >
                        <BsFillPlayFill size={35} />
                    </span>
                    <span><BsThreeDots size={25} /></span>
                </div>}
                <img
                    //  ref={imageRef}
                    src={thumbnailM} alt="avatar" className='h-[205px] w-[205px] rounded-lg' />
            </div>
            <span className='flex flex-col'>
                <span className='font-semibold'>{`${title.slice(0, 20)}...`}</span>
                {data?.sectionId === 'h100' ? <span>{artistsNames}</span> : <span>{`${sortDescription?.slice(0, 20)}...`}</span>}
            </span>
        </div>
    )
}

export default SectionItem