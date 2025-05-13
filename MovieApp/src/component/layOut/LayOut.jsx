import {Outlet} from "react-router";
import Header from "../header/Header.jsx";
import SideBar from "../sideBar/SideBar.jsx";
import Footer from "../footer/Fooster.jsx";
import  style from "./layout.module.css"

const LayOut=()=>{
    return(
        <div className={style.layoutMainWrapper}>
            <Header/>
            <div className={style.sideBarOutlet}>
            <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>

    )
}
export default LayOut;