import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <img className='image-container'
        src={imageUrl} alt='item'
      />
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>

      <span className='quantity'>
        <div className='arrow'
          onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow'
          onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>

      <div className='remove-button'
        onClick={() => clearItem(cartItem)} >&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
