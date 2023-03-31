//To write the react Component
import React from 'react';
import CartItem from './CartItem';

//Class Component
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: 'phone',
                    price: 999,
                    qty: 1,
                    img: '',
                    id: 1

                },
                {
                    title: 'Watch',
                    price: 99,
                    qty: 2,
                    img: '',
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: 9999,
                    qty: 5,
                    img: '',
                    id: 3
                }
            ]
        }


    }
    increaseQty=(product)=>{
        // console.log(this.state.products)
        const {products}=this.state;
        const  index = products.indexOf(product);

        products[index].qty+=1;
        this.setState({
            // products:products
            products
        })
    }
    render() {
        // const arr=[1,2,3,4,5]; // For testing purpose
        const { products } = this.state;
        
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

                {products.map((product) => {

                    // product.id is only for react optimization
                    return (<CartItem 
                        product={product} 
                        key={product.id} 
                        increaseQty={this.increaseQty}/>);
                })};



            </div>
        );
    }
}

export default Cart;