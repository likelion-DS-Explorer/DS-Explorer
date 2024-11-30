import React, { useState } from "react";
import "../styles/News.css";
import Header from "../components/Header";
import SessionItem from "../components/SessionItem";
import exampleImage from "../img/scrapExample.png";

function News() {
  // 활동 데이터 50개 생성
  const sessionData = Array.from({ length: 50 }, (_, index) => ({
    image: exampleImage,
    title: `활동 ${index + 1}`,
    category: `카테고리 ${(index % 5) + 1}`,
    content: `활동 ${index + 1}은 카테고리 ${(index % 5) + 1}에 속하며, 참가자들이 새로운 기술을 배우고 팀원들과 협력하는 기회를 제공합니다. ${
      index % 2 === 0
        ? "다가오는 행사에서는 더 특별한 경험과 다양한 프로그램이 준비되어 있습니다."
        : "지난 행사에서는 많은 참여와 호응을 얻으며 성공적으로 마무리되었습니다."
    }`,
    status: index % 2 === 0 ? "다가올 소식" : "지난 소식",
  }));

  const itemsPerPage = 5; // 한 페이지에 5개씩 표시
  const pageGroupSize = 5; // 페이지 그룹 크기
  const totalPages = Math.ceil(sessionData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageRangeStart, setPageRangeStart] = useState(0);

  const currentItems = sessionData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevRange = () => {
    if (pageRangeStart > 0) {
      setPageRangeStart(pageRangeStart - pageGroupSize);
    }
  };

  const handleNextRange = () => {
    if (pageRangeStart + pageGroupSize < totalPages) {
      setPageRangeStart(pageRangeStart + pageGroupSize);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const rangeEnd = Math.min(pageRangeStart + pageGroupSize, totalPages);

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
      <div className="session-news-page">
        <div className="session-header">
          <h1 className="session-title">동아리에서 이뤄진 활동을 여기서 확인하세요!</h1>
          <p className="session-description">
            다가올 소식과 지난 소식에서 동아리가 진행했던 다양한 활동과 앞으로의 행사 일정을 한눈에 확인하며, 함께할 멋진 경험들을 미리 만나보세요.
          </p>
        </div>
        <div className="session-list">
          {currentItems.map((news, index) => (
            <SessionItem key={index} image={news.image} title={news.title} category={news.category} content={news.content} status={news.status} />
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevRange} disabled={pageRangeStart === 0}>
            &lt;
          </button>
          {renderPageNumbers()}
          <button onClick={handleNextRange} disabled={pageRangeStart + pageGroupSize >= totalPages}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default News;
