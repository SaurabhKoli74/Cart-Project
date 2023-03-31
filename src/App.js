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
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id: 1

        },
        {
          title: 'Watch',
          price: 99,
          qty: 2,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          title: 'Laptop',
          price: 9999,
          qty: 5,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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

  getCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getTotal =()=>{
    const {products} = this.state;
    let total=0;
    products.map((itm)=>{
      total=total+itm.qty*itm.price;
    });

    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart
          products={products}
          deleteItm={this.deleteItm}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}

        />

        <div style={{fontSize:20,padding:0}}>
          Total: {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
