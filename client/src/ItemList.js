import React from "react";
import ItemCard from "./ItemCard";

function ItemList({items}) {
    const renderItems = items.map((item)=>(
      <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}/>
      ));

return (
      <ul className='items'>
      {renderItems}
      </ul>
    );
  }
  
  export default ItemList;

