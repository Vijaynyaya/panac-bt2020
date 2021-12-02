import React from 'react';
import Catalogue from '../filteredFinalData.json';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Cart = ({cart}) => {
    console.log(cart)
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Serial No.</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((id, ind) => {
            let item = Catalogue[id]
            return (<TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{ind + 1}</TableCell>
              <TableCell component="th" scope="row">
                {item['Title']}
              </TableCell>
              <TableCell align="right">{item['Variant Price']}</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">{item['Variant Price']*1}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Cart;


