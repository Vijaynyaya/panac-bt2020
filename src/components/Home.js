import React from 'react';
import { Link } from 'react-router-dom';
import Catalogue from '../filteredFinalData.json';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Container} from '@mui/material'


const Home = ({ addToCart }) => {
    // define layout style for product container
    const containerStyle = { 
        display: 'flex',
        flexFlow: 'row wrap',
        margin: '1em auto',
        justifyContent: 'center',
        alignContent: 'flex-start',
        gap: '0.3em 0.5em',
        backgroundColor: '#E5E4E2',
        padding: '3em 0.5em',
    }
    // define style for product item
    const productStyle = {
        minWidth: {xs: '140px', md: '20%'},
        maxWidth: '100%',
        flex: '1 1 0',
        textDecoration: 'none',
    }
    return (
        <Container sx={containerStyle}>
            {/*render each product*/}
            {Catalogue.map((item, index) => { return <Card sx={productStyle}  key={item['Handle']}>
                <Link to={`/product/${index}`}  sx={{textDecoration: 'none'}} style={{textDecoration: 'none'}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item['Image Src']}
                        alt={item['Title']}
                    />
                    <CardContent>
                        <Typography sx={{fontSize: '1rem', minHeight: {md:'3rem', xs:'6rem'}}} component="h5">
                            {item['Title']}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{minHeight: '1.5rem', padding: '0.3rem 0rem'}}>
                            {`$${item['Variant Price']}`}
                        </Typography>
                        <Typography variant="body2" color="#3B3131">
                            {`${item['Variant Inventory Qty']} pieces currently in stock`}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button fullWidth={true} variant="contained" sx={{bottom: '0.3rem'}} onClick={(e)=>{addToCart(e, index)}}>Add to cart</Button>
                    </CardActions>
                </Link>
            </Card>})}
        </Container>
    )
}

export default Home;