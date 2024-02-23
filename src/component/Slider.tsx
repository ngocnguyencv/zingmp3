import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getArrSlider } from '../ultis/fn';
import * as actions from '../pages/store/actions';
import { useNavigate } from 'react-router-dom';


const Slider: React.FC = () => {
    const { banner } = useSelector((state: any) => state.app);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    
    // useEffect(() => {
    //     const sliderEls = document.getElementsByClassName('slider-item')
    //     let min = 0
    //     let max = 2
    //     const intervalId = setInterval(() => {
    //         const list = getArrSlider(min, max, sliderEls.length)

    //         for (let i = 0; i < sliderEls.length; i++) {
    //             // Delete classnames (css)
    //             sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
    //             sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
    //             sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

    //             if (list.some(item => item === i)) {
    //                 (sliderEls[i] as HTMLElement).style.cssText = `display:none`
    //             } else {
    //                 (sliderEls[i] as HTMLElement).style.cssText = `display:block`
    //             }
    //         }
    //         // Add animation by adding classnames
    //         list.forEach(item => {
    //             if (item === max) {
    //                 sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
    //             } else if (item === min) {
    //                 sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
    //             } else {
    //                 sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
    //             }
    //         })
    //         sliderEls[max]?.classList?.add('animate-slide-right')
    //         min = (min === sliderEls.length - 1) ? 0 : min + 1
    //         max = (max === sliderEls.length - 1) ? 0 : max + 1
    //     }, 3000)
    //     return () => {
    //         intervalId && clearInterval(intervalId)
    //     }
    // }, [])

    const handleClickBanner = (item: { type?: number; encodeId?: string; link?: string }) => {
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId));
            dispatch(actions.play(true));
        } else if (item?.type === 4) {
            const albumPath = item?.link?.split('.')[0];
            if (albumPath) {
                navigateTo(albumPath as string);
            }
        }
    };

    return (
        <div className='w-full overflow-hidden px-[59px]'>
            <div className=' w-full flex gap-8 pt-8 overflow-hidden'>
                {banner?.map((item: any, index: number) => (
                    <img
                        key={item.encodeId}
                        src={item.banner}
                        onClick={() => handleClickBanner(item)}
                        className={`slider-item flex-1 flex-col h-[150px] w-[230px] rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider


