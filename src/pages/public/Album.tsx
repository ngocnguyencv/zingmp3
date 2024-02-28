import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from "../../api"
import { AxiosResponse } from 'axios'
import moment from 'moment'
import Lists from '../../component/list/Lists'

interface ResponseData {
  err: any,
  data: any,

}
interface PlaylistData {
  thumbnailM: string;
  title: string;
  artist: string;
  name: string,
  contentLastUpdate: number;
  artistsName: string;
  like: number;
  sortDescription: string;
  song: {
    items: string;
    totalDuration: string;
  };
}

const Album: React.FC<ResponseData> = () => {
  const { pid } = useParams()
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const responsive = await apis.apiGetDetailPlaylist(pid) as AxiosResponse<ResponseData, any>;
      if (responsive?.data?.err === 0) {
        setPlaylistData(responsive.data?.data)
      }
    }
    fetchDetailPlaylist()
  }, [pid])

  return (

    <div className='flex gap-8 mt-[60px] p-[50px]'>
      <div className='border border-black w-1/5 flex-none flex flex-col items-center gap-2'>
        <img
          src={playlistData?.thumbnailM}
          className='w-full object-contain rounded-md shadow-md'
        />
        <div className='flex flex-col items-center gap-1'>
          <span className='text-20-28 font-bold text-gray-800'>{playlistData?.title}</span>
          <span className='flex gap-2 items-center text-gray-500'>
            <span>Cập nhật</span>
            <span>{playlistData?.contentLastUpdate ? moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY") : ''}</span>
          </span>
          <span>{playlistData?.artistsName}</span>
          <span>{`${playlistData?.like ? Math.round(playlistData?.like / 1000) : 0}K người yêu thích`}</span>
        </div>
      </div>
      <div className='border border-red flex-auto w-full'>
        <span className=''>
          <span className='text-gray-600'>Lời tựa </span>
          <span>{playlistData?.sortDescription}</span>
        </span>
        <Lists songs={playlistData?.song?.items} totalDuration={playlistData?.song?.totalDuration} />
      </div>
    </div>
  )
}

export default Album