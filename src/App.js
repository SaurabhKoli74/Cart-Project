import React from 'react';
import Cart from "./Cart";
import Navbar from './Navbar';
//Functional Component
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }


  }
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot.docs[0].data() );//to return data as object we .data()...
    //     //docs[0] contains information in document format and also contains other information of a sigle doc
    //     //we want only object of key value pairs so add .data()

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       //below without using 'const' or 'let' it gives error
    //       const data = doc.data();
    //       data.id = doc.id;
    //       return data;
    //     });

    //     this.setState({
    //       products: products
    //       // or
    //       //products
            // loading:false
    //     });



    //   });

    
    // By above method in the situation like when change in database collection occures then it wont affect
    //our app so to do that we will add listener callback function

    firebase
          .firestore()
          .collection('products')
          .onSnapshot((snapshot)=>{
            /*snapshot.docs.map((doc) => {
                     console.log(doc.data())
                  });*/
          
                  const products = snapshot.docs.map((doc) => {
                    //below without using 'const' or 'let' it gives error
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                  });
          
                  this.setState({
                    products: products,
                    // or
                    //products
                    loading:false
                  });
          });



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
    });
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

  getTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((itm) => {
      total = total + itm.qty * itm.price;
    });

    return total;
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart
          products={products}
          deleteItm={this.deleteItm}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}


        />
        {loading && <h1>loading products...</h1>}

        <div style={{ fontSize: 20, padding: 0 }}>
          Total: {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
