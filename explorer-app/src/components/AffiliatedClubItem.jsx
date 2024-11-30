import React from 'react';

function AffiliatedClubItem({ data }) {
  return (
    <div className="affiliated-table-row">
      <span className="affiliated-medium-text">{data.joinDate}</span>
      <span className="affiliated-medium-text">{data.role}</span>
      <span className="affiliated-semi-bold-text">{data.clubName}</span>
      <span className="affiliated-medium-text">{data.category}</span>
      <span className="affiliated-medium-text">{data.activityPeriod}</span>
    </div>
  );
}

export default AffiliatedClubItem;