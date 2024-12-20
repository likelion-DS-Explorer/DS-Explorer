import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/News.css";
import Header from "../components/Header";
import SessionItem from "../components/SessionItem";

function News() {
  const itemsPerPage = 5; // 한 페이지에 5개씩 표시
  const pageGroupSize = 5; // 페이지 그룹 크기

  const [newsData, setNewsData] = useState([]); // API에서 가져올 뉴스 데이터
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [pageRangeStart, setPageRangeStart] = useState(0); // 페이지 그룹 시작점
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 백엔드 API 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://127.0.0.1:8000/news/");
        console.log("API 응답:", response.data);
        setNewsData(response.data.results || []); // results 배열을 상태에 저장
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 페이지네이션 데이터
  const totalPages = Math.ceil(Math.max(newsData.length, 1) / itemsPerPage); // 최소 1페이지 표시
  const currentItems = newsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // 페이지네이션 핸들러
  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevRange = () => {
    if (pageRangeStart > 0) {
      setPageRangeStart(pageRangeStart - pageGroupSize);
      setCurrentPage(pageRangeStart - pageGroupSize);
    }
  };

  const handleNextRange = () => {
    if (pageRangeStart + pageGroupSize < totalPages) {
      setPageRangeStart(pageRangeStart + pageGroupSize);
      setCurrentPage(pageRangeStart + pageGroupSize);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const rangeEnd = Math.min(pageRangeStart + pageGroupSize, totalPages);

    for (let i = pageRangeStart; i < rangeEnd; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`page-number ${currentPage === i ? "active" : ""}`}
        >
          {i + 1}
        </button>
      );
    }
    return pages;
  };

  return (
    <>
      <div className="session-news-page">
        <div className="session-header">
          <h1 className="session-title">동아리에서 이뤄진 활동을 여기서 확인하세요!</h1>
          <p className="session-description">
            다가올 소식과 지난 소식에서 동아리가 진행했던 다양한 활동과 앞으로의 행사 일정을 한눈에 확인하며,
            함께할 멋진 경험들을 미리 만나보세요.
          </p>
        </div>
        <div className="session-list">
          {loading ? (
            <div>로딩 중...</div>
          ) : error ? (
            <div>{error}</div>
          ) : newsData.length > 0 ? (
            currentItems.map((news) => (
              <SessionItem
                key={news.id}
                image={
                  news.images && news.images.length > 0
                    ? `http://127.0.0.1:8000${news.images[0]}`
                    : "https://via.placeholder.com/150"
                }
                title={news.title}
                category={news.news_type}
                content={news.content}
                status={
                  news.news_type === "News_to_come" ? "다가올 소식" : "지난 소식"
                }
              />
            ))
          ) : (
            <div>소식이 없습니다.</div>
          )}
        </div>
        <div className="pagination">
          <button onClick={handlePrevRange} disabled={pageRangeStart === 0}>
            &lt;
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextRange}
            disabled={pageRangeStart + pageGroupSize >= totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default News;