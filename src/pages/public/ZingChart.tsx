import { useEffect, useState } from 'react'
import { apiGetChartHome } from '../../api'
import React from 'react'
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

interface APIResponse {
    data: any;
    err: number;
}
const ZingChart: React.FC<APIResponse> = () => {
    const { pid } = useParams()
    const [chartData, setchartData] = useState(null)
    useEffect(() => {
        const fetchDataChart = async () => {
            const response = await apiGetChartHome(pid) as AxiosResponse<APIResponse, any>;
            if (response?.data?.err === 0)
                setchartData(response?.data.data)
            console.log(response)
        }
        fetchDataChart()
    }, [])
    return (
        <div className='mt-[100px]'>ZingChart</div>
    )
}

export default ZingChart