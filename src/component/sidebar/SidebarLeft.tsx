import LogoImg from "../../assests/image/zingMp3logo.svg"
import { sidebarMenu, sidebarMenu2, sidebarMenu3 } from '../../ultis/menu';
import { NavLink } from 'react-router-dom';
import AnhImg from "../../assests/image/promote.png";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";

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
    return (
        <div className='flex flex-col w-[248px] h-full flex-none bg-main-100 border'>
            <div className='min-h-[280px] border-b-2'>
                <div className='flex justify-start items-center w-full h-[70px] py-[15px] px-[25px]'>
                    <img
                        className='w-[120px] h-10'
                        src={LogoImg} alt="logo" />
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
                                <div className='flex gap-3 w-[110px]'>
                                    {item.icons}
                                    <span
                                    >{item.text}</span>
                                </div>
                                <div className=''>
                                    {index === hoveredIndex && item.iconss}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-col py-4 border-b-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-[#0F7070] max-h-[182px]'>
                    {sidebarMenu2.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-12'>
                                <div className='flex gap-3'>
                                    {item.icons}
                                    <span
                                    >{item.text}</span>
                                </div>
                                <div className=''>
                                    {/* {index === hoveredIndex && item.iconss} */}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    <div className="flex flex-col cursor-pointer">
                        <img className="mx-5 my-4 h-[125px] w-[200px] " src={AnhImg} alt="" />
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
                            <div className='flex gap-6'>
                                <div className='flex gap-3'>
                                    {item.icons}
                                    <span className="text-14-20">{item.text}</span>
                                </div>
                                <div>
                                    {index === hoveredIndex && item.iconss}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
                <div>
                    <div className="h-[70px] w-full flex flex-row items-center justify-start py-2 px-[25px] gap-3 cursor-pointer">
                        <IoAdd size={24} />
                        <span className="">Tạo playlist mới</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SidebarLeft
