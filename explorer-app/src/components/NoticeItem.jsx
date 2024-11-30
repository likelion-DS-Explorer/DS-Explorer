import React from 'react';

const NoticeItem = ({ image, clubName, deadline, title }) => {
  return (
    <div className="notice-item">
      <img src={image} alt={title} className="notice-image" />
      <div className="notice-info">
        <span className="notice-club-name">{clubName}</span>
        <span className="notice-deadline">{deadline}</span>
      </div>
      <h3 className="notice-title">{title}</h3>
    </div>
  );
};

export default NoticeItem;