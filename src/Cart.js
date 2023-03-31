//To write the react Component
import React from 'react';
import CartItem from './CartItem';

//Class Component
class Cart extends React.Component{
    render(){
        return (
            <div className='cart'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        );
    }
}

export default Cart;