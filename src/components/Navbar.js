import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material'

const Navbar = () => {
    return ( 
        <ButtonGroup variant="contained" aria-label="medium secondary button group" >
            <Link to='/' style={{textDecoration: 'none'}}><Button> HOME </Button> </Link>
            <Link to='/cart' style={{textDecoration: 'none'}}><Button> CART</Button> </Link>
        </ButtonGroup>
    )
}

export default Navbar;