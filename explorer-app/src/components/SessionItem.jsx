import React from 'react';

const SessionItem = ({ image, title, category, content, status }) => {
    return (
        <div className="session-news-item">
            <img src={image} alt={title} className="session-image" />
            <div className="session-text-container">
                <h2 className="session-title">{title}</h2>
                <p className="session-category">{category}</p>
                <p className="session-content">{content}</p>
                <p className="session-status">{status}</p>
            </div>
        </div>
    );
};

export default SessionItem;