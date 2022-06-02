import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <Paper sx={{background: '#2196f3', color:"#fff"}} square>
            
            <Typography sx={{ml:2}}>Copyright© El Gran Sabor 2022</Typography>
        </Paper>
    )
}

export default Footer