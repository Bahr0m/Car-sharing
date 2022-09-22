import * as React from 'react';
import {useState,useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './Tech.module.css'
import { Button, TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {OPEN,CLOSE,ADD,EDIT} from '../store/actions';
import {getItems} from '../store/reducers/fetch'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress';

const initialState = {
    title: '',
    brand: '',
    price: 0,
    id:''
}


function Technology() {
    const [item , setItem]= useState({initialState});
    const items = useSelector((state)=>state.fetch.items)
    const [dates,setDates]=useState(items)
    const loading = useSelector((state)=>state.fetch.loading)
    const isAuth=useSelector((state) => state.login.isAuth);
    const isOpen=useSelector((state)=>state.open.isOpen);
    const dispatch = useDispatch();
    const {title,brand,price,id}=item;
    

    const onOpen=(id)=>{
        setItem( items.find((it)=>it.id==id))
        dispatch({type:OPEN})
    }
    const onClose=()=>{
        dispatch({type:CLOSE});
        setItem(initialState)
    }
    const makeChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }
    const onEdit=()=>{
        const newItem={
            title,
            brand,
            price,
            id
        }
        dispatch({type: EDIT, payload: newItem});
        setItem(initialState);
        dispatch({type:CLOSE})
    }
    const Submit = (e) => {
        e.preventDefault();
        const newItem={
            title,
            brand,
            price
        }
        dispatch({type: ADD, payload: newItem});
        setItem(initialState);
        console.log(items)
        // setItems({...Items[id],newItem})
        
    }

    useEffect(() => {
        dispatch(getItems());
    }, []);
    console.log(items)
    return (
    <div className={style.container}>
         {isAuth ? (
                    <button onClick={()=>dispatch({type:OPEN})} className={style.add_btn}>+</button>
                )
                :
                (<div></div>)
        }
        {isOpen
        ?    
        <Dialog
        open={isOpen}
        // onClose={dispatch({type:CLOSE})}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            
        <DialogTitle id="alert-dialog-title">
            {'Edit'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='title' value={title} onChange={makeChange}  id="outlined-basic" label="Title" variant="outlined" />
          <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='brand' value={brand} onChange={makeChange}  id="outlined-basic" label="Brand" variant="outlined" />
          <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='price' value={price} onChange={makeChange}  id="outlined-basic" label="Price" variant="outlined" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>onClose}>Disagree</Button>
          <Button onClick={Submit} autoFocus >Agree</Button>
        </DialogActions>
      </Dialog>
    
      :
      <></>}
       {loading ?
           <Box sx={{ width: '100%' }}>
           <LinearProgress />
         </Box>
        : 
        items.map((item, idx) => <Card key={idx}>
            <CardContent className={style.card}>
                <Typography gutterBottom variant="h3" component="div">
                    {item.title}
                </Typography>
                <div className={style.image}>
                    <img src={item?.images[0]} />
                </div>
                <Typography gutterBottom variant="h4" component="div">
                    {item.brand}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {item.description}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                    {item.price + ' $'}
                </Typography>
                <Button variant="outlined" sx={{padding:'10px 15px',textAlign:'center'}}
                 onClick={()=>onOpen(item.id)}> Edit <EditIcon sx={{margin:'0 0 5px 5px'}} /> </Button>
                
            </CardContent>
        </Card>
        )
    }
      <Dialog
        open={isOpen}
        // onClose={dispatch({type:CLOSE})}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            
        <DialogTitle id="alert-dialog-title">
            {'Edit'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='title' value={title} onChange={makeChange}  id="outlined-basic" label="Title" variant="outlined" />
          <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='brand' value={brand} onChange={makeChange}  id="outlined-basic" label="Brand" variant="outlined" />
          <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='price' value={price} onChange={makeChange}  id="outlined-basic" label="Price" variant="outlined" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>onClose()}>Disagree</Button>
          <Button onClick={()=>onEdit()} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Technology ;