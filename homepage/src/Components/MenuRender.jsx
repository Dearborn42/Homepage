import {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from "../Utils/menu.js"
import '../Menu_Styles/main.css';

const allCategories = ['All', ...new Set(items.map(x=>x.category))];

const MenuRender = () => {
  const [menuItems, setMenuItem] = useState(items);
  const [categories] = useState(allCategories)
  const filterItem = (category) => category !== "All" ? setMenuItem(items.filter(x => {return x.category === category})) : setMenuItem(items);
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItem}/>
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default MenuRender
