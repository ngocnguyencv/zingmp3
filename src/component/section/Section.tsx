import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';


interface SectionProps {
    data: any;
}
const Section: React.FC<SectionProps> = (props) => {
    const { data } = props;
    const currentWidth = window.innerWidth;

    let limit = 5;
    if (currentWidth < 600) {
        limit = 2;
    }
    else if (currentWidth < 1000) {
        limit = 4;
    }
    else if (currentWidth < 800) {
        limit = 3;
    }
    const navigateTo = useNavigate();
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-20-32 font-bold'>{data?.title}</h3>
                <div className='flex text-gray-500 items-center'>
                    <span className='text-12-16'>TẤT CẢ</span>
                    <FaAngleRight size={20} />
                </div>
            </div>
            <div className='flex items-start justify-between gap-7'>
                {data && data.items && data.items.slice(0, limit).map((item: any) => (
                    <div
                        key={item.encodeId}
                        onClick={() => {
                            navigateTo(item?.link?.split('.')[0])
                        }}
                        className='flex flex-col justify-start gap-3 flex-auto w-1/5 cursor-pointer'
                    >
                        <img src={item.thumbnailM}
                            alt='avatar'
                            className={` ${data?.sectionId === 'hLiveRadio' ? 'w-full object-contain rounded-full h-auto' : 'w-full object-contain rounded-lg h-auto'}`} />
                        <span className='flex flex-col'>
                            <span className='font-semibold'>{typeof item.title === 'string' && item.title.slice(0, 30) + '...'} </span>
                            {data?.sectionId === 'h100' ? <span>{item.artistsNames}</span> : <span> {typeof item.sortDescription === 'string' && item.sortDescription.length >= 40
                                ? item.sortDescription.slice(0, 30) + '...'
                                : item.sortDescription}</span>}
                        </span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Section