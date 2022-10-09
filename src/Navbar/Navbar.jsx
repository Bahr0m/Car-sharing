import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'
import { Button } from "@mui/material";
const Header = ()=>{

    return(
            <div className={style.header}>
                <NavLink className={style.link}
                    to='/'><img src="https://citydrive.ru/local/templates/project/build/images/svg/logo.svg"
                                 alt="Logo" className={style.logo} /></NavLink>
                <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} 
                    to='/First'>Машины</NavLink>
                <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} 
                    to='/Seco'>Тарифы</NavLink>
                <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} 
                    to='/Third'>Заказ авто</NavLink>
                <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} 
                    to='/Third'>Контакты</NavLink>
                <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} 
                    to='/Third'>Помощь</NavLink>
                    <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} 
                    to='/Third'><Button sx={{pr:3,pl:3,bgcolor:'rgb(18, 169, 46)'}} variant="contained">Вход</Button></NavLink>
            </div>   
    )
}
export default Header;