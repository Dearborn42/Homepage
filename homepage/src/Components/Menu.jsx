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
        {sortedCategories.map(x => (<Acordian category={x} data={sorted[x]} />))}
        <iframe style={{borderRadius: `12px`}} src="https://open.spotify.com/embed/playlist/0p68nRIH0Bw9UlHFJdU44s?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
}

export default Menu