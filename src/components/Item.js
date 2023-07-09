import React , {useState} from "react";

function Item({ name, category }) {
  
   const [ isremoveCart , setisRemoveCart  ] = useState( false)
   
   function handleClick (){
    setisRemoveCart(!isremoveCart)
  }

  const inCart = isremoveCart? "Remove from Cart" : "Add to Cart"
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}>{isremoveCart ? "Remove from cart" : "Add to cart" } </button>
    </li>
  );
}

export default Item;
