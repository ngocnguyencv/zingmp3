import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { listMenuSetting } from "../../ultis/menu"
import icons from '../../ultis/icon';
import { FaAngleRight } from "react-icons/fa6";

interface PopupSettingProps {
    closePopup: () => void;
}

const PopupSetting: React.FC<PopupSettingProps> = () => {
    const { IoPlayCircleOutline, PiBroom } = icons
    return (
        <div className=' w-[320px] absolute top-[60px] bg-gray-200 right-[380px] rounded-md flex flex-col overflow-y-auto scrollbar-custom px-[10px] h-[440px]'>
            <div className='flex flex-col border border-b-[#696969]'>
                <div className='flex items-center'>
                    <div className='flex items-center flex-1'>
                        <IoPlayCircleOutline size={24} />
                        <span className='px-[10px] py-4 text-[#696969]'>Trình phát nhạc</span>
                    </div>
                    <p><FaAngleRight /></p>
                </div>
                <div className='flex items-center '>
                    <div className='flex items-center flex-1'>
                        <PiBroom size={24} />
                        <span className='px-[10px] py-4 text-[#696969]'>Giao diện</span>
                    </div>
                    <p><FaAngleRight /></p>
                </div>
            </div>
            <div className='flex flex-col text-14-20 text-[#696969] mt-3'>
                {listMenuSetting.map((item: any) => (
                    <div key={item.key} className='flex flex-row items-center'>
                        <div className='flex gap-2 flex-1 px-[10px] py-4 items-center'>
                            <span>{item.icon0}</span>
                            <p>{item.text}</p>
                        </div>
                        <p className=''>{item.icon1}</p>
                    </div>

                ))}
            </div>
        </div >

    )
}

export default PopupSetting