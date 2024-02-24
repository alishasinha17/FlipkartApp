import React, { useState } from 'react'
import "./style.css"
import menu from './Api'
import MenuCard from './card'
import NavBar from './navBar'

const uniqueList = [... new Set
(menu.map((curElem) =>{
  return curElem.category;
})),"All"];

console.log(uniqueList)
const Resturant = () => {

  const [menuData, setmenuData] = useState(menu);
  const [menuList,setmenuList] = useState(uniqueList);

  

  const filterItem = (category) =>{

    if(category==="All"){
       setmenuData(menu);
       return
    }
    const updatedList = menu.filter((curElem) =>{
      return curElem.category === category;
    });

    setmenuData(updatedList);
  };
  return (
    <>
      <div className='sname'>
      <h3>Shop By Old is Gold</h3>
    </div>

       <NavBar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>

    </>
  )
} 

export default Resturant