import React, { memo, useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import * as actions from '../../pages/store/actions'
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
interface ListProps {
    songData: any,
    isHiddenAlbum: boolean
}
type CheckedState = {
    [key: string]: boolean;
};

const List: React.FC<ListProps> = ({ songData, isHiddenAlbum }) => {
    const [isHidden, setIsHidden] = useState(false)
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false);
    const [checkedState, setCheckedState] = useState<CheckedState>({});
    const handleCheckboxClick = (event: any) => {
        const id = event.target.id;
        setCheckedState((prevState: any) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <div
            className='flex justify-between items-center border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                dispatch(actions.setCurSongId(songData?.encodeId))
                dispatch(actions.play(true))
            }}
        >
            <div className='flex items-center gap-4 flex-1'>
                {/* // <span onClick={handleCheckboxClick}>
                    //     {isChecked ? <FaRegSquareCheck className='text-gray-500 ' /> : <FaRegSquare className='text-gray-500' />}
                    // </span> */}
                {isHovered ? (
                    <input type='checkbox'
                        id={String(songData?.encodeId)}
                        checked={checkedState[songData?.encodeId] || false}
                        onChange={handleCheckboxClick}
                        className='cursor-pointer size-6'></input>
                ) : (
                    !isHidden &&
                    <span><BsMusicNoteBeamed className='text-gray-500' /></span>
                )}
                {/* {!isHidden && <span><BsMusicNoteBeamed className='text-gray-500' /></span>} */}
                <img src={songData?.thumbnail} alt="thumbnailM" className='size-[40px] object-cover rounded-md' />
                <span className='flex flex-col w-full'>
                    <span className='text-sm font-semibold'>{songData?.title?.length > 30 ? `${songData?.title?.slice(0, 10)}...` : songData?.title}</span>
                    <span>{songData?.artistsNames.length > 20 ? `${songData?.artistsNames.slice(0, 10)}...` : songData?.artistsNames}</span>
                </span>
            </div>
            {!isHiddenAlbum &&
                <div className='flex-1 flex items-center justify-center m-10 text-12-18 text-gray-500'>
                    {songData?.album?.title?.length > 25 ? `${songData?.album?.title?.slice(0, 10)}...` : songData?.album?.title}
                </div>}
            <div className='flex-1 flex justify-end'>
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    )
}

export default memo(List)