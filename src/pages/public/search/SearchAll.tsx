import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { handlNumber } from '../../../ultis/fn'
import SongItem from '../../../component/SongItem'
import { divide } from 'lodash';
import List from '../../../component/list/List';
import SectionItem from '../../../component/section/SectionItem';
import ListArtistAlbum from '../../../component/list/ListArtistAlbum';
import Artist from '../../../component/list/Artist';



const SearchAll: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { searchData } = useSelector((state: any) => state.music)
  console.log(searchData)
  const [allSearchData, setAllSearchData] = React.useState<any[]>([]);
  React.useEffect(() => {
    if (searchData) {
      setAllSearchData((prevSearchData) => [...prevSearchData, searchData]);
    }
  }, [searchData]);
  return (
    <div className='w-full flex flex-col gap-5 ml-[10px] px-[60px]'>
      <div>
        <span className='font-bold text-20-28'>NỔI BẬT</span>
        <div className='flex gap-8 cursor-pointer'>
          {searchData.top && <div className='flex p-[10px] gap-5 bg-main-200 rounded-md w-[350px]' >
            <img src={searchData.top.thumbnail} className='size-[84px] object-cover rounded-full' />
            <div className='gap-[1px] flex flex-col'>
              <span className='mb-[6px]'>{searchData.top.objectType === 'artist' ? 'Nghệ sĩ' : ''}</span>
              <span className=''>{searchData.top.title || searchData.top.name}</span>
              <span>{searchData.top.objectType === 'artist' && <span>{handlNumber(searchData.artists[0]?.totalFollow)} quan tâm</span>}</span>
            </div>
          </div>}
          {searchData?.songs?.slice(0, 2).map((item: any) => {
            return (
              <div key={item.encodeId} className='flex-1 rounded-md bg-main-200'>
                <SongItem
                  thumbnail={item.thumbnail}
                  title={item.title}
                  artists={item.artistsNames}
                  order={''}
                  percent={''}
                  sid={item.encodeId}
                  releaseDate={''}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <h3 className='font-bold text-20-28'>BÀI HÁT</h3>
        <div className='flex flex-wrap justify-end w-full'>
          {searchData.songs?.map((item: any) => {
            return (
              <div key={item.encodeId} className='grid grid-cols-1 h-[70px] w-full '>
                <List
                  songData={item}
                  isHiddenAlbum
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className='gap-10 flex flex-col w-full'>
          <span className='font-bold text-20-28'>PLAYLIST/ALBUM</span>
          <div className='flex'>
            {searchData?.playlists?.slice(0, 4).map((item: any) => {
              return (
                <div key={item.encodeId} className=' w-full'>
                  <SectionItem
                    link={item.link}
                    title={item.title}
                    thumbnailM={item.thumbnailM}
                    artistsNames={item.artistsNames}
                    data={''}
                    sortDescription={item.sortDescription} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='cursor-pointer flex flex-col w-full'>
        <span className='text-20-28 font-bold'>NGHỆ SĨ/OA</span>
        <div className='flex gap-5 items-center justify-center w-full mt-5'>
          {searchData?.artists?.slice((i: any, index: number) => index <= 4).map((item: any) => {
            return (
              <div className=''>
                <Artist
                  key={item.id}
                  image={item.thumbnailM}
                  title={item.name}
                  follower={item.totalFollow}
                  link={item.link}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='h-[100px]'>
      </div>
    </div>
  );
}

export default SearchAll;