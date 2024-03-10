import './App.css';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Public, Login, Personal, Album, ZingChart, SearchSong, SearchAll, Search, Singer } from './pages/public';
import path from './ultis/path';
import { Dispatch, useEffect, useState } from 'react';
import { getHome } from './api';
import { Provider, useDispatch } from 'react-redux';
import * as action from './pages/store/actions'
import WeekRank from './component/chart/WeekRank'


function App() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(action.getHome());
  }, []);
  console.log()
  const setWidth = (e: any) => {
    setCurrentWidth(e.target.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', setWidth)
    return () => {
      window.removeEventListener('resize', setWidth)
    }
  })
  useEffect(() => {
    dispatch(action.setCurrentWidth(currentWidth));
  }, [currentWidth, dispatch]);

  return (
    <Routes>

      <Route path={path.PUBLIC} element={<Public />} >
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.MY_MUSIC} element={<Personal />} />
        <Route path={path.HOME_SINGER} element={<Singer />} />

        {/* <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
       <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} /> */}
        <Route path={path.WEEKRANK_TITLE_PID} element={<WeekRank />} />
        <Route path={path.ALBUM_TITLE_PID} element={<Album err={undefined} data={undefined} />} />
        <Route path={path.ZING_CHART} element={<ZingChart data={undefined} err={0} />} />
        <Route path={path.SEARCH} element={<Search />} >
          <Route path={path.ALL} element={<SearchAll />} />
          <Route path={path.SONG} element={<SearchSong />} />
        </Route>

        {/* <Route path={path.STAR} element={<Home />} /> */}
      </Route>
    </Routes >
  );
}

export default App;
