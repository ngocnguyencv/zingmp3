import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as apis from '../../api'
import { AxiosResponse } from 'axios';
import VSN from '../../assests/image/Vuong_So_Nhien12.webp';
import { GiSelfLove } from 'react-icons/gi';
import { IoIosMore, IoIosRepeat } from 'react-icons/io';
import { PiShuffle } from 'react-icons/pi';
import { IoPlayCircleOutline, IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5';
import { GoVideo } from 'react-icons/go';
import { GiMicrophone } from "react-icons/gi";
import { FaRegWindowRestore } from "react-icons/fa6";
import { IoVolumeHighOutline } from "react-icons/io5";
import { BsMusicNoteList } from 'react-icons/bs';
import { RiPlayListLine } from "react-icons/ri";
import { VscMultipleWindows } from "react-icons/vsc";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { SidebarRight } from '..';


interface PlayerProps {
    toggleSidebar: () => void;
}
const Player: React.FC<PlayerProps> = ({ toggleSidebar }) => {
    const { curSongId } = useSelector((state: any) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    useEffect(() => {
        const fetchDetailSong = async () => {
            const response = await apis.apiGetSong(curSongId) as AxiosResponse<any>;
            console.log(response)
            if (response.data.err === 0) {
                setSongInfo(response.data.data)
            }
        }
        fetchDetailSong()
    }, [curSongId])

    return (
        // <div>gg</div>
        <div>
            <div className='bg-main-400 h-auto flex-none  px-5 flex w-full'>
                <div className='w-[30%] flex flex-auto gap-3  pl-5 items-center'>
                    <img src={VSN} alt="" className='w-[64px] h-[64px] object-cover rounded-md' />
                    <div className='flex flex-col'>
                        <span className=' text-[#32323D] text-sm'>Đi qua cơn giông</span>
                        <span className='text-xs text-gray-500'>Nhật</span>
                    </div>
                    <div className='flex gap-4 py-10 pl-5'>
                        <GiSelfLove size={20} />
                        <IoIosMore size={20} />
                    </div>
                    {/* <img src={songInfo?.thumbnail} alt="thumbnail" className='w-16 h-16 object-cover rounded-md' /> */}

                </div>
                <div className='w-[40%] flex flex-auto gap-4 flex-col items-center justify-between'>
                    <div className='flex flex-col justify-between ' >
                        <div className='flex pt-5 gap-10 justify-center items-center'>
                            <PiShuffle size={20} />
                            <IoPlaySkipBack size={20} />
                            <span className=''><IoPlayCircleOutline size={50} /></span>
                            <IoPlaySkipForward size={20} />
                            <IoIosRepeat size={20} />
                        </div>
                        <div className='flex gap-4 items-center justify-center cursor-pointer mb-2 text-gray-500'>
                            <span>1:05</span>
                            <div className='w-3/4 m-auto rounded-l-full relative h-[2px] bg-[rgba(0,0,0,0,1)]'>
                                <div className='absolute top-0 left-0 right-0 rounded-l-full  w-full rounded-r-full bg-[#0e8080] h-[2px] '></div>
                            </div>
                            <span>3:06</span>
                            {/* <span>Thuyền giấy - Phương Anh</span>
                            <GiSelfLove size={20} /> */}
                        </div>
                    </div>
                </div>
                <div className='w-[30%] flex flex-auto flex-row justify-end items-center gap-4'>
                    <VscMultipleWindows size={20} />
                    <IoVolumeMediumOutline size={20} />
                    <input type="range" step={1} min={0} max={100} value={50} />
                    <span className='p-1 rounded-sm cursor-pointer bg-main-500 opacity-90 hover:opacity-1' onClick={toggleSidebar}><RiPlayListLine /></span>
                </div>
            </div>
        </div>
    );
};
export default Player