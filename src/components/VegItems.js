import React from 'react';
import './VegItems.css';

function VegItems() {
  const vegItems = [
    { name: 'Paneer Tikka', image: 'paneer-tikka.jpg' },
    { name: 'Veg Biryani', image: 'veg-biryani.jpg' },
    { name: 'Aloo Gobi', image: 'aloo-gobi.jpg' },
    { name: 'Chole Bhature', image: 'chole-bhature.jpg' },
    { name: 'Dosa', image: 'dosa.jpg' },
    { name: 'Samosa', image: 'samosa.jpg' },
    { name: 'Pav Bhaji', image: 'pav-bhaji.jpg' },
    { name: 'Methi Thepla', image: 'thepla.jpg' },
    { name: 'Kachori', image: 'kachori.jpg' },
    { name: 'Dhokla', image: 'dhokla.jpg' },
    { name: 'Aloo Tikki', image: 'aloo-tikki.jpg' },
    { name: 'Pani Puri', image: 'pani-puri.jpg' },
    { name: 'Vada Pav', image: 'vada-pav.jpg' },
    { name: 'Masala Papad', image: 'masala-papad.jpg' },
    { name: 'Gobi Manchurian', image: 'gobi-manchurian.jpg' }
  ];

  return (
    <div className="veg-items">
      {vegItems.map((item, index) => (
        <div className="veg-item" key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default VegItems;
