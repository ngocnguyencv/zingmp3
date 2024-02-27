import LogoImg from "../../assests/image/zingMp3logo.svg"
import { sidebarMenu, sidebarMenu2, sidebarMenu3 } from '../../ultis/menu';
import { NavLink } from 'react-router-dom';
import AnhImg from "../../assests/image/promote.png";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import LogoMobi from "../../assests/image/5948853db395f-384x384.png"

const notActiveStyle = 'py-2 px-[25px] text-[#32323D] text-14-20 flex items-center gap-3';
const activeStyle = 'py-2 px-[25px] text-[#0F7070] text-14-20 flex items-center gap-3 bg-main-400';


const SidebarLeft = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index: any) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const currentWidth = window.innerWidth;
    return (
        <div className={`flex flex-col w-[248px] ${currentWidth < 1000 ? 'w-[60px]' : 'w-[240px]'} h-full flex-none bg-main-100 border`}>
            <div className='min-h-[250px] border-b-2'>
                <div className='flex lg:justify-start justify-center items-center w-full h-[70px] lg:py-[15px] lg:px-[25px]'>
                    {currentWidth > 1000 ? (<img
                        className='w-[120px] h-10'
                        src={LogoImg} alt="logo" />) : (
                        <img
                            className='w-[40px] h-[40px]'
                            src={LogoMobi} alt="logo" />
                    )}
                </div>
                <div className='flex flex-col'>
                    {sidebarMenu.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            end={item.end}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-12'>
                                {currentWidth < 1000 && (
                                    <div className='flex gap-3 w-[110px]'>
                                        {item.icons}
                                    </div>
                                )}
                                {currentWidth >= 1000 && (
                                    <div className='flex gap-3 w-[110px]'>
                                        {item.icons}
                                        <span>{item.text}</span>
                                    </div>
                                )}
                                <div className=''>
                                    {currentWidth >= 1000 && index === hoveredIndex && item.iconss}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-col py-4 border-b-2 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-[#0F7070] max-h-[480px]'>
                    {sidebarMenu2.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-12'>
                                {currentWidth < 1000 && (
                                    <div className='flex gap-3 w-[110px]'>
                                        {item.icons}
                                    </div>
                                )}
                                {currentWidth >= 1000 && (
                                    <div className='flex gap-3 w-[110px]'>
                                        {item.icons}
                                        <span>{item.text}</span>
                                    </div>
                                )}
                                <div className=''>
                                    {/* {index === hoveredIndex && item.iconss} */}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    <div className="flex flex-col cursor-pointer">
                        {currentWidth >= 1000 && (
                            <img className="mx-5 my-4 h-[125px] w-[200px] " src={AnhImg} alt="" />
                        )}
                        {/* <img className="mx-5 my-4 h-[125px] w-[200px] " src={AnhImg} alt="" /> */}
                    </div>
                    {sidebarMenu3.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex lg:gap-6 items-center '>
                                {currentWidth < 1000 && (
                                    <div className='flex gap-3 w-[110px]'>
                                        {item.icons}
                                    </div>
                                )}
                                {currentWidth >= 1000 && (
                                    <div className='flex gap-3 w-[110px]'>
                                        {item.icons}
                                        <span>{item.text}</span>
                                    </div>
                                )}
                                <div className=''>
                                    {currentWidth >= 1000 && index === hoveredIndex && item.iconss}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
                <div className="flex items-center z-10">
                    {currentWidth >= 1000 && (
                        <div className="h-[70px] w-full flex flex-row items-center justify-start py-2 px-[25px] gap-3 cursor-pointer">
                            <IoAdd size={24} />
                            <span className="">Tạo playlist mới</span>
                        </div>
                    )}
                    <span className="flex lg:ml-3 items-center rounded-full lg:hidden bg-[#ffffff]"><FaAngleRight size={52} className="p-3" /></span>
                </div>
            </div>

        </div>
    )
}

export default SidebarLeft
