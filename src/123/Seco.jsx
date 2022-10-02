import * as React from 'react';
import {useState,useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './Seco.module.css'
import { Button, TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
  
  const Seco = ()=>{
    const [Items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [item , SetItem]= useState({});
    const {title,brand,price}=item;
    const handleClickOpen = (id) => {
        setOpen(true)
        SetItem( Items.find((it)=>it.id==id));
    };
    const handleClose = () => {setOpen(false)};
    const getItems =async()=>{
      const url = 'https://dummyjson.com/products?skip=20&limit=10'
      const fetchProducts = await fetch(url);
      const productsJson = await fetchProducts.json();
                setItems(productsJson.products)
                console.log(productsJson)
            }
            useEffect(() => {
                getItems();
            }, [])
            return (
              <div className={style.container}>
                   { Items.map((item, idx) => <Card key={idx}>
                        <CardContent className={style.card}>
                            <Typography gutterBottom variant="h3" component="div">
                                {item.title}
                            </Typography>
                            <div className={style.image}><img src={item.images[1]} /></div>
                            <Typography gutterBottom variant="h4" component="div">
                                {item.brand}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.description}
                            </Typography>
                            <Typography gutterBottom variant="h4" component="div">
                                {item.price}
                            </Typography>
                            <Button variant="outlined" sx={{padding:'10px 15px',textAlign:'center'}} onClick={()=>handleClickOpen(item.id)}> Edit <EditIcon sx={{margin:'0 0 5px 5px'}} /> </Button>
                            
                        </CardContent>
                    </Card>
                    )
                  }
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                        
                    <DialogTitle id="alert-dialog-title">
                        {'Edit'}
                    </DialogTitle>
                    <DialogContent>
                        
                      <DialogContentText id="alert-dialog-description">
                      <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='name' value={title} onChange=''  id="outlined-basic" label="Title" variant="outlined" />
                      <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='name' value={brand} onChange=''  id="outlined-basic" label="Brand" variant="outlined" />
                      <TextField sx={{width:'200px',margin:'20px',display:'block'}} name='name' value={price} onChange=''  id="outlined-basic" label="Price" variant="outlined" />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
                      <Button onClick={handleClose} autoFocus>Agree</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              );
              
}
export default Seco ;