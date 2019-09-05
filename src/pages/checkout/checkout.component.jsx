import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span className=''>Product</span>
      </div>
      <div className='header-block'>
        <span className=''>Details</span>
      </div>
      <div className='header-block'>
        <span className=''>Price</span>
      </div>
      <div className='header-block'>
        <span className=''>Quantity</span>
      </div>
      <div className='header-block'>
        <span className=''>Remove</span>
      </div>
    </div>
    <div className=''>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
    </div>
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
