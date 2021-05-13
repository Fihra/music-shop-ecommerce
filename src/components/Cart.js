import React from 'react';

const Cart = () => {

    const session = localStorage.getItem("myCart");

    console.log(typeof session.valueOf('myCart'));

    return (
        <div>
            My Shopping Cart
            <div>
            {session && session.valueOf("myCart") !== "[]"  ? "Show cart": "Nothing in cart"}
            </div>
        </div>
    )
}

export default Cart;
