import { useEffect, useRef, useState } from 'react'
import { apiGetChartHome } from '../../api'
import React from 'react'
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import imgchart from '../../assests/image/Vuong_So_Nhien12.webp';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import SongItem from '../../component/SongItem';
import { isEqual } from 'lodash';
import List from '../../component/list/List';

interface APIResponse {
    data: any;
    err: number;
}
interface ChartItem {
    hour: number;
    counter: number;
}
interface ChartData {
    RTChart: {
        times?: ChartItem[];
        chart?: any
        items: any
    };
}

interface ZingChartProps {
    isHovered: boolean;
}

const ZingChart: React.FC<APIResponse> = () => {
    const { pid } = useParams()
    const chartRef = useRef()
    const [chartData, setchartData] = useState<ChartData | null>(null)
    const { chart, rank } = useSelector((state: any) => state.app);
    const [data, setData] = useState<{ labels: number[] | undefined, datasets: { data: number[] | undefined }[] }>({ labels: undefined, datasets: [] });
    const [tooltipState, setTooltipState] = useState({
        opacity: 0,
        left: 0,
        top: 0,
    })
    useEffect(() => {
        const fetchDataChart = async () => {
            const response = await apiGetChartHome(pid) as AxiosResponse<APIResponse, any>;
            if (response?.data?.err === 0)
                setchartData(response?.data.data)
            console.log(response)
            console.log(chartData?.RTChart?.items)
        }
        fetchDataChart()
    }, [])
    useEffect(() => {
        const labels = chartData?.RTChart?.chart?.times?.filter((item: ChartItem) => item.hour % 2 === 0)?.map((item: ChartItem) => `${item.hour}:00`);
        const datasets = [];
        if (chartData?.RTChart?.chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chartData?.RTChart?.chart?.items[Object.keys(chartData?.RTChart?.chart?.items)[i]]?.filter((item: ChartItem) => item.hour % 2 === 0)?.map((item: ChartItem) => item.counter),
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
    }, [chartData]);
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: { display: false },
                grid: { drawTicks: false, color: 'rgba(255,255,255,0.1)' },
                min: chartData?.RTChart?.chart?.minScore,
                max: chartData?.RTChart?.chart?.maxScore,
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
    return (
        <div className='px-[59px]'>
            <div className='mt-[120px] text-40-48 pb-[10px]'>#zingchart</div>
            <div className='relative'>
                <img src={imgchart} alt="" className='w-full object-cover rounded-md lg:max-h-[400px] h-[820px]' />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgba(206,217,217,0.9)]'>
                    {data && <Line data={data} ref={chartRef} options={options} />}
                    <div className='tooltip'
                        style={{
                            top: tooltipState.top,
                            left: tooltipState.left,
                            opacity: tooltipState.opacity,
                            position: 'absolute'
                        }}>
                        {/* <SongItem
                            thumbnail={chartData?.RTChart?.chart?.items?.find(i => i.encodeId === selected).thumbnail}
                            title={chartData?.RTChart?.chart?.items.title}
                            artists={chartData?.RTChart?.chart?.items.artistsNames}
                            sid={chartData?.RTChart?.chart?.items.encodeId}
                            order={''}
                            percent={undefined}
                            releaseDate={undefined}
                        order={index + 1}
                        percent={Math.round(+item.score * 100 / +chart?.totalScore)}
                        releaseDate={''}
                        /> */}
                    </div>
                </div>
            </div>
            <div className=''>
                {chartData?.RTChart?.items?.map(
                    (item: any) => (
                        < List
                            key={item.encodeId}
                            songData={item}

                        />
                    )
                )}
            </div>
            <div className='h-[60px]'></div>
        </div>
    )
}

export default ZingChart