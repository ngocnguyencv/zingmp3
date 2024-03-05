import React, { useEffect, useRef, useState } from 'react';
import imgchart from '../../assests/image/Vuong_So_Nhien12.webp';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Title, ChartOptions } from 'chart.js';
import { useSelector } from 'react-redux';
import { SongItem } from '../../component'
import { equal } from 'assert';
import { isEqual } from 'lodash';


Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title);

interface ChartItem {
    hour: number;
    counter: number;
}

const ChartSection: React.FC = () => {
    const [data, setData] = useState<{ labels: number[] | undefined, datasets: { data: number[] | undefined }[] }>({ labels: undefined, datasets: [] });
    const { chart, rank } = useSelector((state: any) => state.app);
    const chartRef = useRef()
    const [tooltipState, setTooltipState] = useState({
        opacity: 0,
        left: 0,
        top: 0,
    }

    )
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: { display: false },
                grid: { drawTicks: false, color: 'rgba(255,255,255,0.1)' },
                min: chart?.minScore,
                max: chart?.maxScore,
                border: { dash: [3, 4] }
            },
            x: {
                ticks: { color: 'white' },
                grid: { color: 'transparent' }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                external: ({ tooltip }) => {
                    if (!chartRef || chartRef.current) return
                    if (tooltip.opacity === 0) {
                        if (tooltipState.opacity != 0) setTooltipState((prev: any) => ({ ...prev, opacity: 0 }))
                        return
                    }
                    const counters = []
                    for (let i = 0; i < 3; i++) {
                        counters.push({
                            data: chart?.items[Object.keys(chart?.items)[i]]?.filter((item: ChartItem) => item.hour % 2 === 0)?.map((item: ChartItem) => item.counter),
                            encodeId: Object.keys(chart?.items)[i]
                        })
                    }
                    console.log(tooltip.body[0]?.lines[0])
                    const newTooltipData = {
                        opacity: 1,
                        left: tooltip.caretX,
                        top: tooltip.caretY
                    }
                    if (!isEqual(tooltipState, newTooltipData)) setTooltipState(newTooltipData)
                }
            }
        },
        hover: {
            mode: 'dataset',
            intersect: false
        }
    } as ChartOptions<'line'>;

    useEffect(() => {
        const labels = chart?.times?.filter((item: ChartItem) => item.hour % 2 === 0)?.map((item: ChartItem) => `${item.hour}:00`);
        const datasets = [];
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]?.filter((item: ChartItem) => item.hour % 2 === 0)?.map((item: ChartItem) => item.counter),
                    borderColor: i === 0 ? 'blue' : i === 1 ? 'yellow' : 'red',
                    tension: 0.2,
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                    pointBorderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
                    animation: false,

                });
            }
        }
        setData({ labels, datasets });
    }, [chart]);
    return (
        <div className='mt-12 px-[59px] relative lg:max-h-[480px] h-[820px]'>
            <img src={imgchart} alt="" className='w-full object-cover rounded-md lg:max-h-[400px] h-[820px]' />
            <div className='absolute top-0 z-auto left-[59px] right-[59px] bottom-0 bg-[rgba(115,20,140,0.9)]'></div>
            <div className='absolute top-0 z-auto left-[59px] right-[59px] bottom-0 p-5 flex flex-col gap-8'>
                <h3 className='text-28-36 font-bold text-white'>#zingchart</h3>
                <div className='flex lg:flex-row flex-col gap-4 h-full'>
                    <div className='flex-4 flex flex-col gap-2 items-center'>
                        {rank?.filter((i: any, index: any) => index < 3)?.map((item: any, index: any) => (
                            <SongItem
                                thumbnail={item.thumbnail}
                                title={item.title}
                                artists={item.artistsNames}
                                sid={item.encodeId}
                                order={index + 1}
                                percent={Math.round(+item.score * 100 / +chart?.totalScore)}
                                releaseDate={''} />
                        ))}
                        <span className='rounded-3xl pl-[29px] cursor-pointer text-14-20 bg-[rgba(115,20,140,0.9)] text-white border border-white w-[130px] p-1'>Xem thêm</span>
                    </div>
                    <div className='flex-7 h-[90%] relative'>
                        {data && <Line data={data} ref={chartRef} options={options} />}
                        <div className='tooltip'
                            style={{
                                top: tooltipState.top,
                                left: tooltipState.left,
                                opacity: tooltipState.opacity,
                                position: 'absolute'
                            }}>
                            {/* <SongItem
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    artists={item.artistsNames}
                                    sid={item.encodeId}
                                    order={index + 1}
                                    percent={Math.round(+item.score * 100 / +chart?.totalScore)}
                                    releaseDate={''} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartSection;