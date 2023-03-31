import React from 'react';
import Cart from "./Cart";
import Navbar from './Navbar';
//Functional Component
class App extends React.Component {

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
  increaseQty = (product) => { //used arrow fun to bind this with fun while passing it as props
    // console.log(this.state)
    console.log("Hey please inc the qty of " + product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      // products:products
      products
    })
  }
  decreaseQty = (product) => {
    console.log("Hey please decr the qty of " + product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty <= 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  deleteItm = (id) => {
    const { products } = this.state;
    const itm = products.filter((itm) =>
      itm.id !== id
    );

    this.setState({
      products: itm
    })
  }

  getCount=()=>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    });
    return count;
  }


  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart 
        products={products}
        deleteItm={this.deleteItm}
        increaseQty={this.increaseQty}
        decreaseQty={this.decreaseQty}
        
        />
      </div>
    );
  }
}

export default App;
