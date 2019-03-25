import React,{Component} from 'react';
import Product from './Product';
class Products extends Component{

constructor(){
  super();
  this.state = {
    products : [
{name : 'Apple',cost : 200},
{name : "Banana",cost : 100}

    ]
  }
}

productChange=(event,i)=>{
console.log('The index is ',i)
let tmpProducts = this.state.products;
tmpProducts[i].name = event.target.value;
this.setState({
products : tmpProducts
})
}

render(){
  return (
 <div>
{
  this.state.products.map((product,i)=>{
    return <Product change={(event)=>this.productChange(event,i)} name={product.name} cost={product.cost} />
  })
}

 </div>
  )
}



}

export default Products;