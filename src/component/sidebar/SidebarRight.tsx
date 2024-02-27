import React, { useState } from 'react'
import { GiAlarmClock, GiSelfLove } from 'react-icons/gi'
import { IoIosMore } from 'react-icons/io'
import VSN from '../../assests/image/Vuong_So_Nhien12.webp';
import { listPlaylist } from '../../ultis/menu'
import PopupOther from '../popup/PopupOther';
import PopupRightSideBarOther from '../popup/PopupRightSideBarOther';

// interface PlaylistItem {
//   key: number;
//   thumbnail: string;
//   titleName: string;
//   authorName: string;
// }

const SidebarRight = (): JSX.Element => {
  const [isRecent, setRecent] = useState(false)

  const [clickedItems, setClickedItems] = useState<{ [key: number]: boolean }>({});
  const handleIconClick = (key: number) => {
    setClickedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [showMenu2, setShowMenu2] = useState(false);

  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };

  return (
    <div className='flex flex-col text-12-16 w-full px-3 bg-main-400 overflow-y-auto flex-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-gray-40'>
      <div className='h-[70px] w-full flex flex-none py-[14px] gap-8 justify-between items-center'>
        <div className='flex flex-auto justify-center bg-main-200 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer'>
          <span className={`py-[5px] flex-1 ${!isRecent && ' bg-main-100 '} flex justify-center rounded-l-full rounded-r-full`}
            onClick={() => setRecent(prev => !prev)}>
            Danh sách phát
          </span>
          <span className={`py-[5px] flex-1  ${isRecent && ' bg-main-100 '} flex justify-center rounded-l-full rounded-r-full`}
            onClick={() => setRecent(prev => !prev)}>
            Nghe gần đây
          </span>
        </div>
        <div className='flex gap-3 cursor-pointer'>
          <span><GiAlarmClock size={30} className='p-1 rounded-full bg-white' /></span>
          <span> <IoIosMore onClick={toggleMenu} size={30} className='p-1 rounded-full bg-white' /></span>
          {showMenu && <PopupOther closePopup={function (): void {
            throw new Error('Function not implemented.');
          }} />}

        </div>
      </div>
      <div>
        <div className='flex flex-auto gap-3 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={VSN} alt="" className='w-[40px] h-[40px] object-cover ml-2 rounded-md' />
            <div className='flex flex-col'>
              <span className=' text-[#32323D] text-sm'>Đi qua cơn giông</span>
              <span className='text-xs text-gray-500'>Nhật</span>
            </div>
          </div>
          <div
            className='flex gap-4 py-6 mr-3 cursor-pointer' >
            <GiSelfLove
              size={20} />
            <IoIosMore onClick={toggleMenu2} size={20} />
            {showMenu2 && <PopupRightSideBarOther closePopup={function (): void {
              throw new Error('Function not implemented.');
            }} />}
          </div>
        </div>
        <div className='flex flex-col '>
          <div className='ml-3'>
            <span className='text-[#32323D] text-16-24 font-inter-900'>Tiếp theo</span>
            <div className='flex'>
              <span className='text-gray-500 text-14-20'>Từ playlist </span>
              <span className='text-[#0F7070] font-inter-900 text-14-20'>#zingchart</span>
            </div>
          </div>
          {listPlaylist.map((item) => (
            <div key={item.key} className="playlist-item flex flex-auto gap-3 py-2 px-3 items-center justify-between">
              <div className='flex items-center gap-3'>
                <img
                  src={item.thumbnail}
                  alt={item.titleName}
                  className="playlist-thumbnail w-[40px] h-[40px] object-cover rounded-md"
                />
                <div className='flex flex-col'>
                  <p className="playlist-title">{item.titleName}</p>
                  <p className="playlist-author">{item.authorName}</p>
                </div>
              </div>
              <div className='flex gap-4 py-6 pl-5 cursor-pointer'>
                <GiSelfLove
                  size={20}
                  className={clickedItems[item.key] ? 'text-red' : ''}
                  onClick={() => handleIconClick(item.key)}
                />
                <IoIosMore onClick={toggleMenu2} size={20} />
                {showMenu2 && <PopupRightSideBarOther closePopup={function (): void {
                  throw new Error('Function not implemented.');
                }} />}

              </div>
            </div>
          ))}
        </div>
        <span className='text-[#32323D] text-16-24 font-inter-900 ml-3'>Tự động phát</span>
        {listPlaylist.map((item) => (
          <div key={item.key} className="playlist-item flex flex-auto gap-3 py-2 px-3 items-center justify-between">
            <div
              className='flex items-center gap-3'>
              <img
                src={item.thumbnail}
                alt={item.titleName}
                className="playlist-thumbnail w-[40px] h-[40px] object-cover rounded-md"
              />
              <div className='flex flex-col'>
                <p className="playlist-title">{item.titleName}</p>
                <p className="playlist-author">{item.authorName}</p>
              </div>
            </div>
            <div className='flex gap-4 py-6 pl-5 cursor-pointer'>
              <GiSelfLove
                className={clickedItems[item.key] ? 'text-red' : ''}
                onClick={() => handleIconClick(item.key)}
                size={20}

              />
              <IoIosMore size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarRight