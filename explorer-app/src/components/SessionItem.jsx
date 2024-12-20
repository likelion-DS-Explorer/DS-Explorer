import React from "react";
import { useNavigate } from "react-router-dom";

const SessionItem = ({ id, image, title, category, content, status, statusColor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${id}`); // Navigate to the NewsDetail page with the news ID
  };

  return (
    <div className="session-news-item" onClick={handleClick}>
      <img src={image} alt={title} className="session-image" />
      <div className="session-text-container">
        <h2 className="session-title">{title}</h2>
        <p className="session-category">{category}</p>
        <p className="session-content">{content}</p>
        <p className="session-status" style={{ color: statusColor }}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default SessionItem;
