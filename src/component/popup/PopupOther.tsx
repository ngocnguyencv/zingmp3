import React from 'react'
import { popupMenuOther } from "../../ultis/menu"

interface PopupOtherProps {
    closePopup: () => void;
}

const PopupOther: React.FC<PopupOtherProps> = () => {
    return (
        <div className='flex w-auto flex-col absolute top-[54px] bg-gray-200 right-[40px] rounded-md'>
            {popupMenuOther.map((item: any) => (
                <div key={item.text} className='flex items-center gap-10'>
                    <div className='flex py-3 px-[10px] gap-3 cursor-pointer'>
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                    <p className='mr-2'>{item.icons}</p>
                </div>
            ))}
            {/* <div className='py-3 px-[10px]'>
                <span>Xóa danh sách phát</span>
            </div>
            <div className='py-3 px-[10px]'>
                <span>Tải danh sách phát</span>
            </div>
            <div className='py-3 px-[10px]'>
                <span>Thêm vào playlist</span>
            </div> */}
        </div>
    )
}

export default PopupOther