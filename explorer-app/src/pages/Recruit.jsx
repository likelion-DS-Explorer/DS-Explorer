import React, { useState } from "react";
import Header from "../components/Header";
import NoticeItem from "../components/NoticeItem";
import Filter from "../components/Filter/Filter";
import "../styles/Recruit.css";
import exampleImage from "../img/scrapExample.png";

function Recuit() {
  // 100개의 데이터를 생성하여 총 100개로 구성
  const allNotices = Array.from({ length: 100 }, (_, index) => ({
    image: exampleImage,
    clubName: `동아리 ${index + 1}`,
    deadline: `D-${(index % 10) + 1}`,
    title: `동아리 ${index + 1} 모집 안내`,
  }));

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allNotices.length / itemsPerPage);
  const [pageRangeStart, setPageRangeStart] = useState(0); // 페이지 번호 시작 인덱스

  const currentItems = allNotices.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevRange = () => {
    if (pageRangeStart > 0) {
      setPageRangeStart(pageRangeStart - 10);
    }
  };

  const handleNextRange = () => {
    if (pageRangeStart + 10 < totalPages) {
      setPageRangeStart(pageRangeStart + 10);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const rangeEnd = Math.min(pageRangeStart + 10, totalPages);
    for (let i = pageRangeStart; i < rangeEnd; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageClick(i)} className={`page-number ${currentPage === i ? "active" : ""}`}>
          {i + 1}
        </button>
      );
    }
    return pages;
  };

  return (
    <>
      <Header type="default" />
      <div className="notice-page">
        <div className="filter-container">
          <Filter
            totalNotices={allNotices.length}
            onReset={() => console.log("초기화")}
            onSortChange={(e) => console.log("정렬 변경:", e.target.value)}
            onFilterChange={(e) => console.log("필터 변경:", e.target.checked)}
          />
        </div>
        <div className="notice-content">
          <div className="notice-grid">
            {currentItems.map((item, index) => (
              <NoticeItem key={index} image={item.image} clubName={item.clubName} deadline={item.deadline} title={item.title} />
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePrevRange} disabled={pageRangeStart === 0}>
              &lt;
            </button>
            {renderPageNumbers()}
            <button onClick={handleNextRange} disabled={pageRangeStart + 10 >= totalPages}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recuit;
