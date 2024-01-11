import Acordian from "./Acordian";

const Menu = ({items}) => {
  return (
    <div className="menu">
        {items.map(x => {
            const {id, title, img, desc, price} = x;
            return (
                <Acordian />
            )
        })}
    </div>
  )
}

export default Menu