import React, { useState } from "react";

const Filter = ({ totalNotices, onReset, onSortChange, onFilterChange }) => {
  const [isSortOpen, setIsSortOpen] = useState(true);

  const handleSortToggle = () => {
    setIsSortOpen(!isSortOpen);
  };

  return (
    <div className="filter-box">
      <div className="filter-header">
        <span className="filter-title">필터</span>
        <button className="reset-button" onClick={onReset}>
          초기화
        </button>
      </div>
      <hr className="divider" />
      <div className="checkbox-section">
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="checkbox"
            onChange={onFilterChange}
          />
          모집 중만 보기
        </label>
        <span className="total-count">{totalNotices}</span>
      </div>
      <hr className="divider" />
      <div className="sort-section">
        <div className="sort-header">
          <span className="sort-title">정렬기준</span>
          <button className="sort-toggle" onClick={handleSortToggle}>
            {isSortOpen ? "↑" : "↓"}
          </button>
        </div>
        {isSortOpen && (
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="sort"
                value="종료 임박순"
                onChange={onSortChange}
              />
              종료 임박순
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="인기순"
                onChange={onSortChange}
              />
              인기순
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="최신순"
                onChange={onSortChange}
              />
              최신순
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
