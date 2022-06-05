import React from 'react'
import Item from '../interfaces/ItemInterface'

interface Props {
  cart: Item[];
  item: Item;
  addItem: (id: number) => void;
}

const Menu: React.FC<Props> = ({cart, item, addItem}) => {
  const isInCart = cart.some((cartItem) => cartItem.id === item.id);
  const handleClick = (id: number) => {
    addItem(id);
  }
  return (
    <li className={isInCart ? "menu inCart" : "menu"}>
      <dl className="menu__info">
        <dt className="menu__name">{item.name}</dt>
        <dd className="menu__desc">{item.desc}</dd>
      </dl>
      <p className="menu__price">${item.price}</p>
      <button className="btn" onClick={() => handleClick(item.id)}>{isInCart ? "Add another" : "Add to cart"}</button>
    </li>
  )
}

export default Menu