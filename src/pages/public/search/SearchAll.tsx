import React from 'react';
import { useSelector } from 'react-redux';
import { handlNumber } from '../../../ultis/fn'
import SongItem from '../../../component/SongItem'
import { divide } from 'lodash';
import List from '../../../component/list/List';
import SectionItem from '../../../component/section/SectionItem';

const SearchAll: React.FC = () => {
  const { searchData } = useSelector((state: any) => state.music)
  console.log(searchData)
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
              <div key={item.encodeId} className='flex-1  bg-main-200'>
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
        <h3 className='font-bold  text-20-28'>BÀI HÁT</h3>
        <div className='flex justify-between flex-wrap w-full'>
          {searchData.songs?.map((item: any) => {
            return (
              <div key={item.encodeId}>
                <div className=' flex flex-auto w-full h-[60px]'>
                  <List
                    songData={item}
                  />
                </div>
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
      <div className='h-[100px]'>
      </div>
    </div>
  );
}

export default SearchAll;