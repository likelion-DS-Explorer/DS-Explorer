import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import NoticeItem from "../components/NoticeItem";
import Filter from "../components/Filter/Filter";
import "../styles/Recruit.css";

function Recruit() {
  const [recruitData, setRecruitData] = useState([]); // API에서 가져올 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const itemsPerPage = 8; // 페이지당 아이템 수

  // API 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/recruit/");
        setRecruitData(response.data.result); // API에서 result 키의 데이터를 가져옴
      } catch (err) {
        console.error("API 호출 에러:", err);
        setError("모집 공고 데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 데이터가 비었을 때도 기본 UI 표시
  const totalPages = Math.ceil(Math.max(recruitData.length, 1) / itemsPerPage); // 최소 1페이지
  const currentItems = recruitData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (pageIndex) => setCurrentPage(pageIndex); // 페이지 변경 핸들러

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
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
      <Header type="default" />
      <div className="notice-page">
        <div className="filter-container">
          <Filter
            totalNotices={recruitData.length || 0}
            onReset={() => console.log("초기화")}
            onSortChange={(e) => console.log("정렬 변경:", e.target.value)}
            onFilterChange={(e) => console.log("필터 변경:", e.target.checked)}
          />
        </div>
        <div className="notice-content">
          <div className="notice-grid">
            {loading ? (
              <div>로딩 중입니다...</div>
            ) : error ? (
              <div>{error}</div>
            ) : recruitData.length > 0 ? (
              currentItems.map((item) => (
                <NoticeItem
                  key={item.id}
                  image={item.images.length > 0 ? item.images[0].image_url : "https://via.placeholder.com/150"}
                  clubName={item.club_code || "동아리"}
                  deadline={`D-${item.d_day}`}
                  title={item.title}
                />
              ))
            ) : (
              <div>모집 공고가 없습니다.</div>
            )}
          </div>
          {/* 페이지네이션 */}
          <div className="pagination">
            {renderPageNumbers()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruit;
