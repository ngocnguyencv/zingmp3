import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonCommon } from '../common/button/Button';
import SongItem from '../SongItem';

const NewRelease = () => {
    const { newRelease } = useSelector((state: any) => state.app)
    const [activeButton, setActiveButton] = useState(false);

    const currentWidth = window.innerWidth;
    let limit = 12;
    if (currentWidth < 1000) {
        limit = 8;
    }
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-20-32 font-bold'>{newRelease?.title}</h3>
                <span className='text-12-16'>TẤT CẢ</span>
            </div>
            <div className='flex-col items-center gap-5 text-xs'>
                <div className=' flex gap-3'>
                    <ButtonCommon
                        type='button'
                        text={'VIỆT NAM'} style={undefined}>
                    </ButtonCommon>
                    <ButtonCommon
                        type='button'
                        className={`  ${activeButton ? 'bg-main-500 text-white' : undefined}`}
                        // onClick={() => setIsActived(1)}
                        text={'QUỐC TẾ'} style={undefined}>
                    </ButtonCommon>
                    <ButtonCommon
                        type='button'
                        className={`    ${activeButton ? 'bg-main-500 text-white' : undefined}`}
                        // onClick={() => setIsActived(0)}
                        text={'TẤT CẢ'} style={undefined}>
                    </ButtonCommon>
                </div>
                <div>
                    <div className={`grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4`}>
                        {newRelease?.items?.vPop.slice(0, limit).map((item: any) => (
                            <div key={item.encodeId} className=''>
                                <SongItem
                                    order={''}
                                    percent={''}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    artists={item.artistsNames}
                                    sid={''}
                                    releaseDate={''} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRelease