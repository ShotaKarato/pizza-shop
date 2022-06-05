import React from 'react'
import Item from '../interfaces/ItemInterface'

interface Props {
  cartItem: Item;
  removeItem: (index: number) => void;
  index: number;
}

const Order: React.FC<Props> = ({cartItem, removeItem, index}) => {
  const handleClick = (index: number) => {
    removeItem(index);
  }
  return <li onClick={() => handleClick(index)}>{cartItem.name}</li>
}

export default Order