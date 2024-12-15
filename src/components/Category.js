import React from 'react';
import './Category.css';

function Category() {
  return (
    <div className="category">
      <div className="category-item">
        <img src="veg-placeholder.jpg" alt="Veg" />
        <p>Veg</p>
      </div>
      <div className="category-item">
        <img src="nonveg-placeholder.jpg" alt="Non-Veg" />
        <p>Non-Veg</p>
      </div>
      <div className="category-item">
        <img src="chaat-placeholder.jpg" alt="Chaat" />
        <p>Chaat</p>
      </div>
      <div className="category-item">
        <img src="drinks-placeholder.jpg" alt="Drinks" />
        <p>Drinks</p>
      </div>
      <div className="category-item">
        <img src="icecream-placeholder.jpg" alt="Ice Cream" />
        <p>Ice Cream</p>
      </div>
    </div>
  );
}

export default Category;
