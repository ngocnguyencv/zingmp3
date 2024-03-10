import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from "../../api"
import { AxiosResponse } from 'axios'
import moment from 'moment'
import Lists from '../list/Lists'
import ListArtistAlbum from '../list/ListArtistAlbum'
import { FaPlay } from "react-icons/fa6";
import { BsFillCaretRightFill, BsThreeDots } from 'react-icons/bs'

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
  artistsNames: string;
  song: {
    items: string;
    totalDuration: string;
  };
  artists: {
    name: string
    thumbnailM: any
    totalFollow: number
  };
}

const Album: React.FC<ResponseData> = () => {
  const { pid } = useParams()
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const responsive = await apis.apiGetDetailPlaylist(pid) as AxiosResponse<ResponseData, any>;
      if (responsive?.data?.err === 0) {
        setPlaylistData(responsive.data?.data)
      }
      setLoading(false);
    }
    console.log(playlistData?.artists)
    fetchDetailPlaylist()
  }, [pid])
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BsThreeDots className="text-4xl animate-spin" />
      </div>
    );
  }
  return (
    <div className='gap-[30px] p-[50px] '>
      <div className='flex lg:flex-row flex-col gap-8 mt-[60px] w-full cursor-pointer'>
        <div className=' lg:w-1/4 w-full flex-none flex lg:flex-col flex-row items-center gap-2'>
          <img
            src={playlistData?.thumbnailM}
            className='cursor-pointer rounded-md lg:h-[300px] h-[200px] lg:w-[300px] w-[200px]'
          />
          <div className='flex flex-col items-center mb-[120px] '>
            <p className='text-20-28 font-bold text-gray-800' >{playlistData?.title}</p>
            <span className='text-gray-500 text-12-18'>{playlistData?.artistsNames}</span>
            <span className='flex gap-2 items-center text-gray-500'>
              <span className='text-12-18'>Cập nhật:</span>
              <span className='text-12-18'>{playlistData?.contentLastUpdate ? moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY") : ''}</span>
            </span>
            <span className='text-12-18'>{playlistData?.artistsName}</span>
            <span className='text-gray-500 text-12-18'>{`${playlistData?.like ? Math.round(playlistData?.like / 1000) : 0}K người yêu thích`}</span>
            <span className='text-white bg-[#0F7070] px-5 py-1 rounded-full mt-5 items-center flex gap-2'><FaPlay className='text-white' />PHÁT NGẪU NHIÊN</span>
          </div>
        </div>
        <div className=' flex-auto w-full'>
          <span className=''>
            <span className='text-gray-600'>Lời tựa </span>
            <span>{playlistData?.sortDescription.slice(0, 220)}...</span>
            <span className='text-[#0F7070] font-bold'>XEM THÊM</span>
          </span>
          <Lists songs={playlistData?.song?.items} totalDuration={playlistData?.song?.totalDuration} />
        </div>
      </div>
      <div className='cursor-pointer'>
        <span className='text-20-28 font-bold'>Nghệ sĩ tham gia</span>
        <ListArtistAlbum artistData={playlistData?.artists} />
      </div>
      <div className='h-[50px]'></div>
    </div>
  )
}

export default Album