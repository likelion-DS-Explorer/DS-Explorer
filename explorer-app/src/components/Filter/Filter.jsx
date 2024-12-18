import React, { useState } from "react";
import arrowIcon from "../../img/arrowIcon.png";
import '../Filter/Filter.css'

const Filter = ({ totalNotices, onReset, onSortChange, onFilterChange }) => {
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);

  const handleToggle = (setFunction) => {
    setFunction((prevState) => !prevState);
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
        <span className="total-count" style={{ fontSize: "14px", fontWeight: "normal" }}>{totalNotices}</span>
      </div>
      <hr className="divider" />

      {/* Sort Section */}
      <div className="sort-section">
        <div className="sort-header">
          <span className="sort-title">정렬기준</span>
          <button className="sort-toggle" onClick={() => handleToggle(setIsSortOpen)}>
            <img
              src={arrowIcon}
              alt="toggle"
              style={{ transform: isSortOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </button>
        </div>
        {isSortOpen && (
          <div className="radio-group">
            {[
              { label: "종료 임박순", count: 0 },
              { label: "인기순", count: 0 },
              { label: "최신순", count: 0 },
            ].map((sort, index) => (
              <label key={index} style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="sort"
                  value={sort.label}
                  onChange={onSortChange}
                  className="radio-input"
                />
                <span style={{ fontSize: "14px" }}>{sort.label}</span> <span style={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}>{sort.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <hr className="divider" />

      {/* Category Section */}
      <div className="sort-section">
        <div className="sort-header">
          <span className="sort-title">카테고리</span>
          <button className="sort-toggle" onClick={() => handleToggle(setIsCategoryOpen)}>
            <img
              src={arrowIcon}
              alt="toggle"
              style={{ transform: isCategoryOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </button>
        </div>
        {isCategoryOpen && (
          <div className="radio-group">
            {[
              { label: "공연·음악", count: 0 },
              { label: "스포츠·레저", count: 0 },
              { label: "사회 봉사", count: 0 },
              { label: "예술·창작", count: 0 },
              { label: "종교", count: 0 },
              { label: "젠더·페미니즘", count: 0 },
              { label: "IT", count: 0 },
              { label: "문화·전통", count: 0 },
              { label: "기타", count: 0 },
            ].map((category, index) => (
              <label key={index} style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="category"
                  value={category.label}
                  onChange={onFilterChange}
                  className="radio-input"
                />
                <span style={{ fontSize: "14px" }}>{category.label}</span> <span style={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}>{category.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <hr className="divider" />

      {/* Style Section */}
      <div className="sort-section">
        <div className="sort-header">
          <span className="sort-title">활동 스타일</span>
          <button className="sort-toggle" onClick={() => handleToggle(setIsStyleOpen)}>
            <img
              src={arrowIcon}
              alt="toggle"
              style={{ transform: isStyleOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </button>
        </div>
        {isStyleOpen && (
          <div className="radio-group">
            {[
              { label: "실전 중심", count: 0 },
              { label: "학습 중심", count: 0 },
              { label: "친목 중심", count: 0 },
            ].map((style, index) => (
              <label key={index} style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="style"
                  value={style.label}
                  onChange={onFilterChange}
                  className="radio-input"
                />
                <span style={{ fontSize: "14px" }}>{style.label}</span> <span style={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}>{style.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <hr className="divider" />

      {/* Frequency Section */}
      <div className="sort-section">
        <div className="sort-header">
          <span className="sort-title">활동 빈도</span>
          <button className="sort-toggle" onClick={() => handleToggle(setIsFrequencyOpen)}>
            <img
              src={arrowIcon}
              alt="toggle"
              style={{ transform: isFrequencyOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </button>
        </div>
        {isFrequencyOpen && (
          <div className="radio-group">
            {[
              { label: "유동적 (일정에 따라)", count: 0 },
              { label: "월 1회", count: 0 },
              { label: "격주 1회", count: 0 },
              { label: "주 1회", count: 0 },
              { label: "주 2회 이상", count: 0 },
            ].map((frequency, index) => (
              <label key={index} style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="frequency"
                  value={frequency.label}
                  onChange={onFilterChange}
                  className="radio-input"
                />
                <span style={{ fontSize: "14px" }}>{frequency.label}</span> <span style={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}>{frequency.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
