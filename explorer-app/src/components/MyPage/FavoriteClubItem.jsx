import React from 'react';

const FavoriteClubItem = ({ image, clubName, description }) => {
  return (
    <div className="favorite-club-item">
      <img src={image} alt={clubName} className="favorite-image" />
      <h3 className="favorite-club-name">{clubName}</h3>
      <p className="favorite-description">{description}</p>
    </div>
  );
};

export default FavoriteClubItem;
