import {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from "../Utils/menu.js"
import '../Menu_Styles/main.css';
import SearchBar from './SearchBar.jsx';
import Quotes from './Quotes.jsx';
import useSound from "use-sound";
import pipe from "../Utils/metal-pipe-falling-sound-effect-made-with-Voicemod-technology.mp3"

const allCategories = ['All', ...new Set(items.map(x=>x.category))];

const MenuRender = () => {
  const [menuItems, setMenuItem] = useState(items);
  const [categories] = useState(allCategories)
  const [pipeSound] = useSound(pipe);
  const filterItem = (category) => category !== "All" ? setMenuItem(items.filter(x => {return x.category === category})) : setMenuItem(items);
  return (
    <main>
      <section className="section">
        <div className='backgroundImage'></div>
        <div className='Quote'>
          <div className="title">
              <Quotes pipePlay={pipeSound}/>
              <SearchBar pipePlay={pipeSound}/>
          </div>
        </div>
        <Categories categories={categories} filterItems={filterItem}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default MenuRender
