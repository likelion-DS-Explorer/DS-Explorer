import React, { useState } from "react";
import Header from "../components/Header";
import ApplicationStatusItem from "../components/ApplicationStatusItem";
import applyCircleIcon from "../img/applyCircleIcon.png"
import "../styles/Apply.css";

function Apply() {
  const allData = [
    {
      applicationDate: "2024.01.15",
      clubName: "멋쟁이사자처럼",
      announcementTitle: "🦁12기 아기사자 모집 안내🦁",
      category: "IT",
      method: "온라인",
      status: "합격",
      resultDate: "2024.03.15",
      remarks: "서류 및 면접",
    },
    {
      applicationDate: "2024.02.01",
      clubName: "코딩동아리",
      announcementTitle: "✨ 코딩 마스터 모집✨",
      category: "개발",
      method: "오프라인",
      status: "불합격",
      resultDate: "2024.04.01",
      remarks: "최종 면접 탈락",
    },
    {
      applicationDate: "2024.03.20",
      clubName: "음악사랑",
      announcementTitle: "🎵 뮤지션 지원하세요!",
      category: "음악",
      method: "온라인",
      status: "대기 중",
      resultDate: "2024.05.10",
      remarks: "결과 발표 대기",
    },
    {
      applicationDate: "2024.04.15",
      clubName: "체육동아리",
      announcementTitle: "⚽ 스포츠 멤버 모집",
      category: "체육",
      method: "오프라인",
      status: "합격",
      resultDate: "2024.06.01",
      remarks: "서류 및 면접 통과",
    },
    {
      applicationDate: "2024.05.01",
      clubName: "디자인클럽",
      announcementTitle: "🎨 디자이너 모집",
      category: "디자인",
      method: "온라인",
      status: "합격",
      resultDate: "2024.06.15",
      remarks: "합격 통보 완료",
    },
    {
      applicationDate: "2024.05.20",
      clubName: "사진동아리",
      announcementTitle: "📸 사진으로 세상 담기",
      category: "예술",
      method: "오프라인",
      status: "불합격",
      resultDate: "2024.07.01",
      remarks: "서류 탈락",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Header type="default" />
      <div className="application-status-page">
        <div className="application-status-container">
          <div className="header-section">
            <img src={applyCircleIcon} className="header-img" ></img>
            <h1 className="header-title">지원 동아리 현황</h1>
            <p className="header-count">총 {allData.length}건</p>
          </div>
          <div className="description-section">
            <p className="description">
              • 최근 1년 이내의 동아리 지원 내역을 확인할 수 있습니다.
            </p>
            <p className="description">
              • 지원 상태와 결과 발표일 정보를 통해 지원 현황을 확인하세요.
            </p>
          </div>
          <hr className="divider-thick" />
          <div className="table-header">
            <span>지원일</span>
            <span>동아리명 / 공고제목</span>
            <span>카테고리</span>
            <span>지원방법</span>
            <span>진행상태</span>
            <span>결과발표</span>
            <span>비고</span>
          </div>
          <hr className="divider-thin" />
          {currentData.map((data, index) => (
            <ApplicationStatusItem key={index} data={data} />
          ))}
          <div className="status-pagination">
            <button
              className="nav-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="status-page-text">
              {currentPage} / {totalPages}
            </span>
            <button
              className="nav-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;