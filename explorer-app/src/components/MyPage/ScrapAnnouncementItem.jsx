import React from 'react';

const ScrapAnnouncementItem = ({ image, clubName, announcementTitle }) => {
  return (
    <div className="scrap-announcement-item">
      <img src={image} alt={clubName} />
      <h3 className="scrap-title">{announcementTitle}</h3>
      <p className="club-name">{clubName}</p>
    </div>
  );
};

export default ScrapAnnouncementItem;