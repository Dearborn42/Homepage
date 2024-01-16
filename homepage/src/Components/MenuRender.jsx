import {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from "../Utils/menu.js"
import '../Menu_Styles/main.css';
import SearchBar from './SearchBar.jsx';
import Quotes from './Quotes.jsx';

const allCategories = ['All', ...new Set(items.map(x=>x.category))];

const MenuRender = () => {
  const [menuItems, setMenuItem] = useState(items);
  const [categories] = useState(allCategories)
  const filterItem = (category) => category !== "All" ? setMenuItem(items.filter(x => {return x.category === category})) : setMenuItem(items);
  return (
    <main>
      <section className="section">
        <div className='backgroundImage'></div>
        <div className='Quote'>
          <div className="title">
              <Quotes />
              <SearchBar />
          </div>
        </div>
        <Categories categories={categories} filterItems={filterItem}/>
        <Menu items={menuItems}/>
        <iframe style={{borderRadius: `12px`}} src="https://open.spotify.com/embed/playlist/0p68nRIH0Bw9UlHFJdU44s?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </section>
    </main>
  )
}

export default MenuRender
