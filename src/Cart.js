//To write the react Component
import React from 'react';
import CartItem from './CartItem';

//Class Component
const Cart = (props) => {

    const { products,increaseQty,decreaseQty,deleteItm } = props;

    return (
        <div className='cart'>
            {products.map((product) => {

                // product.id is only for react optimization
                return (<CartItem
                    product={product}
                    key={product.id}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    deleteItm={deleteItm}
                />);
            })}
        </div>
    );
}


export default Cart;