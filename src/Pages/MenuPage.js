import React from 'react';
import Header from '../components/Header'; 
import Category from '../components/Category'; 
import VegItems from '../components/VegItems'; 


const vegItems = [
  { id: 1, name: 'Veg Biryani', image: 'https://example.com/biryani.jpg', price: 10.99 },
  { id: 2, name: 'Paneer Tikka', image: 'https://example.com/paneer.jpg', price: 8.99 },
  { id: 3, name: 'Veg Pizza', image: 'https://example.com/pizza.jpg', price: 12.99 },
  { id: 4, name: 'Dal Tadka', image: 'https://example.com/dal.jpg', price: 6.99 },
  { id: 5, name: 'Aloo Gobi', image: 'https://example.com/aloo-gobi.jpg', price: 7.99 },
  { id: 6, name: 'Veg Burger', image: 'https://example.com/burger.jpg', price: 5.99 },
  { id: 7, name: 'Chole Bhature', image: 'https://example.com/chole-bhature.jpg', price: 9.99 },
  { id: 8, name: 'Pasta', image: 'https://example.com/pasta.jpg', price: 11.99 },
  { id: 9, name: 'Spring Rolls', image: 'https://example.com/spring-rolls.jpg', price: 4.99 },
  { id: 10, name: 'Veg Samosa', image: 'https://example.com/samosa.jpg', price: 3.99 },
  { id: 11, name: 'Fruit Salad', image: 'https://example.com/fruit-salad.jpg', price: 6.49 },
  { id: 12, name: 'Veg Fried Rice', image: 'https://example.com/fried-rice.jpg', price: 7.49 },
  { id: 13, name: 'Veg Wrap', image: 'https://example.com/veg-wrap.jpg', price: 5.49 },
  { id: 14, name: 'Masala Dosa', image: 'https://example.com/masala-dosa.jpg', price: 6.49 },
  { id: 15, name: 'Veg Kebab', image: 'https://example.com/kebab.jpg', price: 8.99 },
];

function Menu() {
  return (
    <div>
      
      <Header />
      
      
      <Category />

      
      <VegItems title="Veg Menu" items={vegItems} />
    </div>
  );
}

export default Menu;
