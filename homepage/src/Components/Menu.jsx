import {useState} from "react";
import Acordian from "./Acordian";

const Menu = ({items}) => {
  const sorted = items.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
  const sortedCategories = Object.keys(sorted);

  return (
    <div className="menu">
        {sortedCategories.map(x => (<Acordian data={sorted[x]} />))}
    </div>
  )
}

export default Menu