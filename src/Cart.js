//To write the react Component
import React from 'react';
import CartItem from './CartItem';

//Class Component
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products:[
                {
                    title: 'phone',
                    price: 999,
                    qty: 1,
                    img: ''

                },
                {
                    title: 'Watch',
                    price: 99,
                    qty: 2,
                    img: ''

                },
                {
                    title: 'Laptop',
                    price: 9999,
                    qty: 5,
                    img: ''
                    
                },
            ]
        }
    
        
      }
    render() {
        // const arr=[1,2,3,4,5]; // For testing purpose
        const {products}=this.state;
        return (
            <div className='cart'>
                {/* <CartItem/>
                <CartItem/>
                <CartItem/> */}
                {/* {arr}    Iterate over all array elements and prints list*/}
                {/*
                //To perform some operation on each element and display the modifies output     
                //It wont change the original array
                //It's just performing some operation over the array elements and returning it            
               {arr.map((itm)=>{
                    return itm+5;
               })} 
*/}


{/*             
            <CartItem title="Watch" qty="1" price="999"/>
            //Use of Props to pass arguement to child component
*/}
            {products.map((product)=>{
                
                return (<CartItem product={product}/>);
            })};



            </div>
        );
    }
}

export default Cart;