import React from 'react';
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import ItemList from "./ItemList";

function Item({renderItems}) {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState(false);

useEffect(() => {
  fetch(`/items`)
    .then((r) => r.json())
    .then(setItems);
}, []);

    const filterItems = items.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <main>
      <div className="container">
      <SearchItem setQuery={setQuery}/>
      <ItemList items={filterItems} renderItems={renderItems}/>
      <div items={items}> </div>
      </div>
      </main>
    );
  }
  
  export default Item;