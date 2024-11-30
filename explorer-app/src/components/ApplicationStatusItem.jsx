import React from 'react';

function ApplicationStatusItem({ data }) {
  return (
    <div className="table-row">
      <span className="medium-text">{data.applicationDate}</span>
      <div className="club-details">
        <span className="regular-text">{data.clubName}</span>
        <span className="semibold-text">{data.announcementTitle}</span>
      </div>
      <span className="medium-text">{data.category}</span>
      <span className="medium-text">{data.method}</span>
      <span className="medium-text">{data.status}</span>
      <span className="medium-text">{data.resultDate}</span>
      <span className="medium-text">{data.remarks}</span>
    </div>
  );
}

export default ApplicationStatusItem;
