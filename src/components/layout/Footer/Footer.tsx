import React from 'react'
import {Paper, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Paper sx={{background: '#2196f3', color:"#fff", position: 'relative'}} square>
            
            <Typography sx={{p:2}}>Copyright© El Gran Sabor 2022</Typography>
        </Paper>
    )
}

export default Footer