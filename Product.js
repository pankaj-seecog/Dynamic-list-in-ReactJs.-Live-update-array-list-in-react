import React from 'react';
import './Product.css';

const Product = (props)=>{
return (
  <div className='Product'>
<h2>{props.name}</h2>
<h5>Cost : Rs. {props.cost}</h5>
<input onChange={props.change} value={props.name}/>
  </div>
)
}

export default Product;