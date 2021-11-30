import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Header = ({ data }) => {
    if(!data) {
        return <div>loading...</div> 
    }

    return (
        <Box
            sx={{
                display: 'flex', flexFlow: 'row wrap', justifyContent:'space-around', gap: '0.3em 0.3em'
            }}
        >
            <Paper sx={{flex: '1', minWidth: '180px', padding: '0.5em 1.5em' }}>
                <Typography sx={{color: '#777'}}> Today's Cases</Typography>
                <Typography sx={{color: '#0C090A', fontWeight: 'bold', fontSize: '2em'}}> {data.todayCases}</Typography>
            </Paper>
            <Paper sx={{flex: '1', minWidth: '180px', padding: '0.5em 1.5em' }}>
                <Typography sx={{color: '#777'}}> Active Cases</Typography>
                <Typography sx={{color: '#0C090A', fontWeight: 'bold', fontSize: '2em'}}> {data.active}</Typography>
            </Paper>
            <Paper sx={{flex: '1', minWidth: '180px', padding: '0.5em 1.5em' }}>
                <Typography sx={{color: '#777'}}> Total Cases</Typography>
                <Typography sx={{color: '#0C090A', fontWeight: 'bold', fontSize: '2em'}}> {data.cases}</Typography>
            </Paper>
            <Paper sx={{flex: '1', minWidth: '180px', padding: '0.5em 1.5em' }}>
                <Typography sx={{color: '#777'}}> Total Deaths </Typography>
                <Typography sx={{color: '#0C090A', fontWeight: 'bold', fontSize: '2em'}}> {data.deaths}</Typography>
            </Paper>


        </Box>
    )
}

export default Header;