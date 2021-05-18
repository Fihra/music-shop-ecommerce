import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { DataGrid } from '@material-ui/data-grid';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

const Cart = () => {
    const productContext = useContext(ProductContext);
    const myCart = productContext.productsData.myCart;

    const showItems = () => {
        return (
            <div>
                <ul>
                    {myCart.map((item, i) => {
                        return <li key={i}>{item.name} ======= ${item.price}</li>
                    })}
                </ul>
            </div>
        )
    }

    // const columns =  [
    //     {field: 'id', headerName: "ID", width: 100},
    //     {field: 'picture', headerName: "Picture", width: 150, height: 150 },
    //     {field: 'name', headerName: "Name", width: 250},
    //     {field: 'price', headerName: "Price", width: 130},
    // ]

    // const rows = () => {
    //     const copyCart = [...myCart];
    //     const newCart = copyCart.map((product, i) => {
    //         const item = {id: i, picture: product.logo, name: product.name, price: `$${product.price}`};
    //         return item;
    //     })
    //     return newCart;
    // }

    // const showData = () => {
    //     return (
    //         <div style={{height: 500, width: '75%'}}>
    //             <DataGrid rows={rows()} columns={columns}/>
    //         </div>
    //     )
    // }

    const rows =() => {
        const fieldNames = ["Picture", "Name", "Price"];

        return fieldNames.map((field, i) => {
            return <TableCell key={i}>{field}</TableCell>
        } )
    }

    const showProducts = () => {
        return myCart.map((item, i) => {
            return (
                <TableRow key={i}>
                    <TableCell><img src={item.logo} alt={item.name} style={{height: 100, width: 100}}/></TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>${item.price}</TableCell>
                </TableRow>
            )
        } )
    }

    const getTotal = () => {
        let total = 0;
        myCart.forEach((item) => {
            return total += item.price;
        })
        return total;
        // console.log(myCart);
        // debugger;
    }

    return (
        <div>
            <h2>My Shopping Cart</h2>
            {/* <div>
            {myCart === "" && myCart.length <= 0  ? "Nothing in Cart": showItems()}
            {myCart === "" && myCart.length <= 0  ? "Nothing in Cart": showData()}
            </div> */}
            <span>Total: ${getTotal()}</span>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {rows()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showProducts()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Cart;
