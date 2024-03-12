import React from 'react'
import { useSelector } from 'react-redux';
import SectionItem from '../../../component/section/SectionItem';


const SearchPlaylist = () => {
  const { searchData } = useSelector((state: any) => state.music)
  return (
    <div>
      <div className='gap-10 flex flex-col w-full ml-[75px]'>
        <span className='font-bold text-20-28'>PLAYLIST/ALBUM</span>
        <div className='flex'>
          {searchData?.playlists?.slice(0, 5).map((item: any) => {
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
  )
}

export default SearchPlaylist