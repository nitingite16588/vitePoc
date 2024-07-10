
import { TNavItem } from './type'

import style from "./navigation.module.css"

type props = {
    data: TNavItem[]
}



const Navigation = ({ data }: props) => {


    return <>
        <nav className={style.nav}>

            {data.map(item => {
                return <div>{item.name}</div>
            })}


        </nav></>
};

export default Navigation;
