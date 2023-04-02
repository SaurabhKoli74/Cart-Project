import React from 'react'; //to write the react component

//Class Component
const CartItem = (props) => {

  const { price, title, qty, img } = props.product;
  const { product,
    increaseQty,
    decreaseQty,
    deleteItm
  } =props;
  return (
    <div className="cart-item">
      <div className="left-block">
        {/* inline style */}
        <img alt='' style={styles.image} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: '#777' }}>Rs.{price}</div>
        <div style={{ color: '#777' }}>Qty.{qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img onClick={() => { decreaseQty(product) }} alt="decrease" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/3031/3031143.png" />
          {/* <img onClick={ this.increaseQuantity.bind(this) } alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"/> */}
          <img onClick={() => { increaseQty(product) }} alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
          <img onClick={() => deleteItm(product.id)} alt="delete" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/2984/2984959.png" />

        </div>
      </div>
    </div>
  );
}


//inline style
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
    objectFit: 'contain'
  }
}

export default CartItem;