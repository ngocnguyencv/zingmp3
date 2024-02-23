import React, { useEffect, useState } from 'react'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import Search from './Search'
import VSN from '../../assests/image/Vuong_So_Nhien12.webp';
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import PopupHeader from '../popup/PopupHeader';

const Header = () => {
    // useEffect(() => {
    //     const handleFixedHeader = () => {
    //         console.log('Fixed')
    //         const header = document.getElementById('header');
    //         console.log('ScrollY:', window.scrollY);
    //         if (window.scrollY > 100) {
    //             header?.classList.add('fixed');
    //         }
    //         else {
    //             header?.classList.remove('fixed');
    //         }
    //     }; console.log('hdfd', handleFixedHeader())
    //     window.addEventListener('scroll', handleFixedHeader);
    //     return () => {
    //         window.removeEventListener('scroll', handleFixedHeader);
    //     };
    // }, []);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div id="header" className='flex justify-between w-full items-center cursor-pointer'>
            <div className='flex gap-6 w-full items-center'>
                <div className='flex gap-6 text-gray-500'>
                    <span><HiArrowCircleLeft size={24} /></span>
                    <span><HiArrowCircleRight size={24} /></span>
                </div>
                <div className='w-3/4'>
                    <Search />
                </div>
            </div>
            <div className='flex gap-3 pr-[250px] cursor-pointer'>
                <div className='flex bg-main-100 rounded-3xl w-[200px] items-center justify-center '>
                    <HiOutlineInboxArrowDown size={24} className='text-[#0F7070]' />
                    <span className='text-18-26 text-[#0F7070] font-inter-900 font-semibold p-2 c'>Tải bản window</span>
                </div>
                <div className='flex gap-3 w-[100px] cursor-pointer'>
                    <IoSettingsOutline className='w-[38px] h-[38px] bg-main-100 rounded-full p-2' />
                    <img src={VSN} onClick={toggleMenu} alt="" className='w-[40px] h-[40px] object-cover rounded-full' />
                </div>

                {showMenu && <PopupHeader closePopup={function (): void {
                    throw new Error('Function not implemented.');
                }} />}

            </div>
            <div>
            </div>
        </div>
    )
}
export default Header