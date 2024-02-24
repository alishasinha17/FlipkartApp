import React from 'react'
import menu from './Api';

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
        {menuData.map((curElem)=>{
        const {category,name,image,description,price} = curElem;

          return(
            <>
            
            <div className='card-container' key={curElem.id}>
            <div className='card'>
              <div className='card-body'>
              <img src={image} alt="images" className='card-media' />
          
                <span className='card-author subtle' >{category}</span>
                <h2 className='card-title'>{name}</h2>
                <h2 className='card-title'>{price}</h2>
                <span className='card-description subtle'>
                {description}
                </span>
                
              </div>
              
  
              <span className='"card-tag subtle btn'>Order Now</span>
            </div>
  
          </div>
           
           
            
          </>
          )
        })}
        </section>
    </>
  );
};

export default MenuCard





