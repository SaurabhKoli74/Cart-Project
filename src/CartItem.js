import React from 'react'; //to write the react component

//Class Component
class CartItem extends React.Component {
  //create state
  constructor() {
    super();
    this.state = {
      title: 'phone',
      price: 999,
      qty: 1,
      img: ''
    }

    //alternative bind method
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }
  /*
  increaseQuantity() {
    console.log(this.state);
  }
  */
  increaseQuantity = () => {
    // console.log(this.state);

    // this.state.qty+=1; 
    // above line will only change the react object state but it will not rerender so changes will not affect on JSX code


    //Two ways to do that

    //1st way
    // this.setState({
    //   qty: this.state.qty + 1
    // });


    //2nd way (when we need previous state then recommended to use this method)
    this.setState((preState) => {
      return {
        qty: preState.qty + 1
      }
    });

  }
  render() {
    //js 
    const { price, title, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          {/* inline style */}
          <img alt="Product Image" style={styles.image} src={this.state.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="decrease" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/992/992514.png" />
            {/* <img onClick={ this.increaseQuantity.bind(this) } alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"/> */}
            <img onClick={this.increaseQuantity} alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
            <img alt="delete" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png" />

          </div>
        </div>
      </div>
    );
  }
}

//inline style
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;