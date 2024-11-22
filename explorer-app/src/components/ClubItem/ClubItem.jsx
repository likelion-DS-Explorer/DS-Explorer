import React from 'react';
import './ClubItem.css';

const ClubItem = ({ image, category, subcategory }) => {
  return (
    <div className="club-item">
      <img src={image} alt={category} className="club-image" />
      <h3 className="club-category">{category}</h3>
      <p className="club-subcategory">{subcategory}</p>
    </div>
  );
};

export default ClubItem;
