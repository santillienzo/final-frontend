import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Avatar, Button, Divider, IconButton, InputLabel, MenuItem, Tooltip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import DeleteIcon from '@mui/icons-material/Delete';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import data from '../../../lib/data'

interface Props{
    openDrawer: boolean,
    toggleDrawer: any,
    anchor: "bottom" | "left" | "right" | "top" 
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

const ProductList = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleChange = (event: SelectChangeEvent) => {
        setQuantity(Number(event.target.value));
    };

    return(

        <Box
            sx={{ width: 400 }}
            role="presentation"
        >
            <List>
                {
                    data.map((product, i)=>(
                        <ListItem sx={{display:'flex', justifyContent: 'space-between'}} key={i}>
                            <Avatar alt="Remy Sharp" src={product.image} />
                            <Box sx={{display:'flex', flexDirection:'column', flex:1, ml:2}}>
                                <Typography variant='h6'>{product.name}</Typography>
                                <Typography>${product.price}</Typography>
                            </Box>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">Cantidad</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quantity.toString()}
                                    label="Cantidad"
                                    onChange={handleChange}
                                >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                            <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                    >
                                        <Tooltip title='Eliminar de carrito'>
                                            <DeleteIcon />
                                        </Tooltip>
                            </IconButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider/>
            <Box padding={2}>
                <Typography variant="h5">Resumen del pedido</Typography>
                <Box marginTop={1}>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Typography>5 productos</Typography>
                        <Typography>$1500</Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Typography variant="h6">Subtotal</Typography>
                        <Typography variant="h6">$1500</Typography>
                    </Box>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{width: '100%'}}>
                        Ir a pagar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
};

const CartDrawer = ({openDrawer, toggleDrawer, anchor} : Props) => {


    return (
        <div>
            <Drawer
                anchor={anchor}
                open={openDrawer}
                onClose={toggleDrawer(false)}
            >
                <DrawerHeader>
                    <Typography variant="h5">Carrito</Typography>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>
                <ProductList/>
            </Drawer>
        </div>
    );
}

export default CartDrawer;
