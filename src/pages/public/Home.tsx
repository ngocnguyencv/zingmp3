import { useSelector } from "react-redux";
import Slider from "../../component/Slider";
import Header from "../../component/header/Header";
import Section from "../../component/section/Section";
import { ChartSection, NewRelease } from "../../component";
import { Link } from "react-router-dom";
import { listPartner } from '../../ultis/menu';
import { CountQueuingStrategy } from "node:stream/web";
// import Counter from "../../count/Count";


const Home = () => {
    const { friday, chill, albumhot, remix, xone, weekChart, favoritedArtist } = useSelector((state: any) => state.app)

    return (
        <div className=" cursor-pointer overflow-y-auto flex-auto justify-between scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-gray-400">

            <div className="mt-16">   <Slider /></div>
            <Section data={friday} />
            <Section data={chill} />
            <NewRelease />
            <Section data={albumhot} />
            <Section data={remix} />
            <ChartSection />
            <div className="flex items-center px-[43px] w-full mt-12">
                {weekChart?.map((item: any) => (
                    <Link to={item?.link?.split('.')[0]} key={item.link} className="flex-1 px-4">
                        <img src={item.cover} alt="cover" className="w-full object-cover rounded-md" />
                    </Link>
                ))}
            </div>
            <Section data={xone} />
            {/* <div className="px-[59px] flex gap-4">
                <div className='flex items-center justify-between'>
                    <h3 className='text-20-32 font-bold'>{favoritedArtist?.title}</h3>
                    <span className='text-xs'>TẤT CẢ</span>
                </div>
                <div className='flex mx-[-16px]'>
                    {favoritedArtist?.items?.filter((i: any, index: number) => index <= 4).map((singer: any) => {
                        return (
                            <div key={singer.encodeId} className='flex-1 px-4 relative'>
                                <img src={singer.thumbnail} alt="singer" className='w-full object-contain rounded-md' />
                                <div className='absolute w-full bottom-[16px] flex justify-evenly pr-8'>
                                    <img src={singer?.song?.items[0].thumbnail} alt="singer" className='w-[25%] rounded-md object-cover' />
                                    <img src={singer?.song?.items[1].thumbnail} alt="singer" className='w-[25%] rounded-md object-cover' />
                                    <img src={singer?.song?.items[2].thumbnail} alt="singer" className='w-[25%] rounded-md object-cover' />
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div> */}
            <div className="m-12">
                <span className="flex items-center justify-center text-24-30 cursor-pointer mb-6 hover:text-blue-900 font-inter-500 text-gray-500">Đối tác âm nhạc</span>
                <div>
                    <div className='lg:gap-4 gap-2 items-center justify-center mt-4 grid lg:grid-cols-8 grid-cols-4'>
                        {
                            listPartner.map((item: any) => (
                                <img
                                    key={item.images}
                                    src={item.images}
                                    alt="partner-logo"
                                    className={`lg:w-[100px] w-[175px] lg:h-[60px] h-[100px] bg-white p-1 rounded-lg`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Home;