import React from 'react';
import VSN from '../../assests/image/Vuong_So_Nhien12.webp';
import AnhImg from "../../assests/image/promote.png";
import { MdBlockFlipped } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdLogout } from "react-icons/md";


interface PopupHeaderProps {
  closePopup: () => void;
}

const PopupHeader: React.FC<PopupHeaderProps> = ({ closePopup }) => {
  return (
    <div className=' w-[290px] absolute top-[60px] right-[320px] rounded-md flex flex-col bg-gray-200  overflow-y-auto px-[10px]'>
      <div className='flex flex-col border border-b-black p-[10px] mb-[10px]'>
        <div className='p-[10px] mb-[10px] flex flex-col gap-4'>
          <div className='flex gap-3'>
            <img src={VSN} alt="" className='w-[64px] h-[64px] object-cover rounded-full' />
            <div className='flex flex-col mb-[6px]'>
              <span className='text-[#32323d] text-16-24'>Ngọc Nguyễn</span>
              <span className='text-[13px]  rounded-full'>Basic</span>
            </div>
          </div>
          <span className=' rounded-full bg-gray-300 w-auto flex justify-center items-center py-[6px]'>Nâng cấp tài khoản</span>
        </div>
        <div>
          <span className='mb-[8px]' >Nâng cấp gói</span>

          <img className="h-[177px] w-[262px] py-3 px-4 " src={AnhImg} alt="" />
          <img className="h-[177px] w-[262px] py-3 px-4" src={AnhImg} alt="" />

        </div>
      </div >
      <div className='border border-b-white flex flex-col'>
        <span className='text-16-24 font-inter-900 mb-2 px-[10px]'>Cá nhân</span>
        <div className='flex items-center gap-2 py-3 px-[10px]'>
          <MdBlockFlipped size={20} />
          <span>Danh sách chặn</span>
        </div>
        <div className='flex items-center gap-2 py-3 px-[10px]'>
          <MdOutlineFileUpload size={20} />
          <span>Tải lên</span>
        </div>
      </div>
      <div className='flex items-center gap-2 py-3 px-[10px]'>
        < MdLogout size={20} />
        <span>Đăng xuất</span>
      </div>
    </div >
  );
};

export default PopupHeader;