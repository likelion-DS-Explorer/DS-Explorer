import React from 'react';
import { useNavigate } from "react-router-dom";

const NoticeItem = ({ id, image, clubName, deadline, title }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`/recruit/${id}`); // Navigate to the NewsDetail page with the news ID
    };

  return (
    <div className="notice-item" onClick={handleClick}>
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