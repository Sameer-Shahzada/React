import { React, useState } from 'react';
import '../TabMenu/tab.css';
import Menu from './menu';
import MenuItems from './MenuItems';
import CategBtn from './CategBtn';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)),'all'];
console.log(allCatValues);

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem =(categItem) => {

    if (categItem === 'all') {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    })
    setItems(updatedItems);
  }
  return (
    <>
      <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
      <hr />

      {/* Button List  */}
      <CategBtn filterItem={filterItem} catItems={catItems} /> 
      

      {/* my main items section */}
      <MenuItems items={items}/>
    </>
  )
}

export default GalleryReact