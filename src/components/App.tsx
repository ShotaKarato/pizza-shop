import React, { useState } from 'react';
// component
import Menu from './Menu';
// items data
import items from "../items";
import Item from '../interfaces/ItemInterface';
import Order from './Order';

const App: React.FC = () => {

  const [cart, setCart] = useState<Item[]>([]);

  const addItem = (id: number) => {
    setCart((prev) => {
      const purchacedItem = items.find((item) => item.id === id)!;
      return [...prev, purchacedItem];
    });
  }

  const removeItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1 className="heading">Today's Menu</h1>
      <ul className="menus">
        {items.map((item) => <Menu key={item.id} cart={cart} item={item} addItem={addItem} />)}
      </ul>
      <div className="order-container">
        <ul className="orders">
          {cart.map((cartItem, i) => <Order key={i} index={i} cartItem={cartItem} removeItem={removeItem} />)}
        </ul>
      </div>
    </div>
  )
}

export default App