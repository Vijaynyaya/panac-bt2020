import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Catalogue from '../filteredFinalData.json';
import { Card, CardMedia, CardContent, CardActions, Button, Typography} from '@mui/material';

const Product = ({addToCart}) => {
    let { id } =  useParams()
    let item = Catalogue[id]
    return <Card sx={{ maxWidth: {xs: '100%', md:'70%'}, backgroundColor: '#E5E4E2', margin: '5rem auto' , padding: '10px 10px'}} key={item['Handle']}>
    <Link to={`/product/${id}`} style={{textDecoration: 'none'}}>
        <CardMedia
            component="img"
            image={item['Image Src']}
            alt={item['Title']}
        />
        <CardContent>
            <Typography variant="h5" component="div">
                {item['Title']}
            </Typography>
            <Typography variant="body1" color="text.primary">
                {`$${item['Variant Price']}`}
            </Typography>
            <Typography variant="body1" color="text.primary">
                {`${item['Variant Inventory Qty']} pieces currently in stock`}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{margin: '15px 10px'}}>
                {item['Body']}
            </Typography>
        </CardContent>
        <CardActions>
            <Button fullWidth={true} variant="contained" 
                sx={{marginTop: '20px', bottom: '2rem'}} 
                onClick={()=>{addToCart(id)}}
            >
                Add to cart
            </Button>
        </CardActions>

    </Link>
</Card>
}

export default Product;