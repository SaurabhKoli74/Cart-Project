import React from 'react'; //to write the react component

//Class Component
class CartItem extends React.Component {
  

  render() {
    //js 
    const { price, title, qty,img} = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          {/* inline style */}
          <img alt="Product Image" style={styles.image} src={img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div> 
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img onClick={this.decreaseQuantity} alt="decrease" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/992/992514.png" />
            {/* <img onClick={ this.increaseQuantity.bind(this) } alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"/> */}
            <img onClick={()=>{this.props.increaseQty(this.props.product)}} alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
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