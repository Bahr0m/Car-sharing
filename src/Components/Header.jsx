import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import style from './Header.module.css'
import { lightBlue, lightGreen } from "@mui/material/colors";
import { useDispatch, useSelector } from 'react-redux';
import { SIGNIN, SIGNOUT } from '../store/actions'
const Header = ()=>{
    const isAuth = useSelector((state) => state.login.isAuth)
    const dispatch = useDispatch();
    return(
        <div className={style.header}>
            <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} exact to='/'>Phone and Laptop</NavLink>
            <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} to='/First'>Parfume</NavLink>
            <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} to='/Seco'>Foods</NavLink>
            {/* <NavLink className={({isActive})=>(isActive?style.linkActive:style.link)} to='/Third'>House things</NavLink> */}
            <div className={style.sign_in}>
                {!isAuth ? 
                    <Button sx={{ bgcolor: lightBlue[300] }} variant="contained"onClick={() => { dispatch({ type: SIGNOUT })}}>Sign in</Button>
                    :
                <div className={style.sign_in}>
                    <Button sx={{ bgcolor: lightBlue[300] }} variant="contained"onClick={() => { dispatch({ type: SIGNIN })}}>Sign Out</Button>
                    <Avatar sx={{ bgcolor: lightGreen[600], ml:'30px' }}>B</Avatar>
                </div>
                }
            </div>
        </div>
    )
}
export default Header;