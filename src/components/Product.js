import React  from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  const [disable, setDisable] = React.useState(false);
  return (
    <div >
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price"><b>₹{product.price}</b></div>
      <div>
        <button disabled={disable} onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}