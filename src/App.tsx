import './App.css';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Public, Login, Personal, Album } from './pages/public';
import path from './ultis/path';
import { Dispatch, useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { getHome } from './api';
import { Provider, useDispatch } from 'react-redux';
import * as action from './pages/store/actions'
import WeekRank from './component/chart/WeekRank'
// import Counter from './count/Count';


function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(action.getHome());
  // }, []);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(action.getHome());
  }, []);
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
  console.log(currentWidth)
  return (
    <Routes>
      <Route path={path.PUBLIC} element={<Public />} >
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.MY_MUSIC} element={<Personal />} />
        {/* <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
      <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} /> */}
        <Route path={path.WEEKRANK_TITLE_PID} element={<WeekRank />} />
        <Route path={path.ALBUM_TITLE_PID} element={<Album />} />

        {/* <Route path={path.STAR} element={<Home />} /> */}

      </Route>
    </Routes >
  );
}

export default App;
