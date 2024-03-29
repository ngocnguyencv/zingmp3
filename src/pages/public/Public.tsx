import { Outlet } from "react-router-dom";
import SidebarLeft from "../../component/sidebar/SidebarLeft";
import Home from "./Home";
import SidebarRight from "../../component/sidebar/SidebarRight";
import Player from "../../component/play/Player";
import Scrollbars from "react-custom-scrollbars-2";
import { useState } from "react";
import { Header } from "../../component";
// import Header from "../../components/header/Header";

const Public = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    const currentWidth = window.innerWidth;
    return (
        <div className="w-full relative h-screen flex flex-col bg-main-300">
            <div className="w-full h-full flex flex-auto">
                <div className="min-h-screen left-0 top-0 z-10 flex-none overflow-hidden ">
                    <SidebarLeft />
                </div>
                <div className="flex-auto flex flex-col">
                    <div className="flex-auto w-full">
                        <div id="header" className="flex items-center z-10 justify-between fixed h-[70px] px-[59px] bg-main-300 w-full">
                            <Header />
                        </div>
                        <Scrollbars style={{ width: '100%', height: '100%', scrollbarWidth: 'thin', scrollbarColor: 'blue transparent' }}>
                            <Outlet />
                        </Scrollbars>
                    </div>
                    <div className="w-full h-[90px]">
                    </div>
                </div>
                {showSidebar &&
                    <div className="w-[329px] fixed right-0 z-20">
                        <div className="h-[100vh] flex-none overflow-y-auto scrollbar-width-thin scrollbar-thumb-blue">
                            <SidebarRight />
                        </div>
                    </div>
                }
            </div>
            <div className="flex-none fixed bottom-0 inset-x-0 z-30">
                <Player toggleSidebar={toggleSidebar} />
            </div>
        </div>
    )
};

export default Public;