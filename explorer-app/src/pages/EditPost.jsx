import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/EditPost.css";
import EditPostCircleIcon from "../img/EditPostCircleIcon.png";

function EditPost() {
  const allData = [
    {
      type: "활동 기록",
      clubName: "멋쟁이사자처럼",
      title: "'사계(개)절' 프로젝트 데모데이 및 수료식 성료",
      status: "공개",
      createdDate: "2024.03.15",
      modifiedDate: "2024.06.20",
    },
    {
      type: "모집 공고",
      clubName: "멋쟁이사자처럼",
      title: "🦁기획/ 디자인 추가 모집 🦁",
      status: "모집 마감",
      createdDate: "2023.05.01",
      modifiedDate: "2023.05.20",
    },
    {
      type: "동아리 상세 탐험",
      title: "멋쟁이사자처럼",
      status: "공개",
      createdDate: "2022.06.20",
      modifiedDate: "2022.07.01",
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
      <div className="edit-post-page-container">
        <div className="edit-post-content">
          <div className="edit-header-section">
            <img
              src={EditPostCircleIcon}
              className="edit-header-img"
              alt="Edit Post Icon"
            />
            <h1 className="edit-header-title">게시물 수정 관리</h1>
            <p className="edit-header-count">총 {allData.length}건</p>
          </div>
          <div className="edit-description-section">
            <p className="edit-description">
              • 등록한 모집공고와 활동기록을 수정할 수 있습니다. 모든 게시물은 이 페이지에서 수정 및 등록 가능합니다.
            </p>
            <p className="edit-description">
              • 수정된 내용은 저장 후 즉시 반영됩니다.
            </p>
            <p className="edit-description">
              • 모집 상태(모집 전·중·마감, 삭제)와 게시물 상태(공개, 삭제)도 확인하고 관리하세요.
            </p>
          </div>
          <hr className="edit-divider-thick" />
          <div className="edit-table-header">
            <span>게시물 유형</span>
            <span>동아리명/공고제목</span>
            <span>상태</span>
            <span>작성일</span>
            <span>수정일</span>
            <span>수정하기</span>
          </div>
          <hr className="edit-divider-thin" />
          {currentData.map((data, index) => (
            <div className="edit-table-row" key={index}>
              <span className="edit-medium-text">{data.type}</span>
              <div className="edit-club-info">
                <span className="edit-medium-text">{data.clubName}</span>
                <span className="edit-medium-text">{data.title}</span>
              </div>
              <span className="edit-medium-text">{data.status}</span>
              <span className="edit-medium-text">{data.createdDate}</span>
              <span className="edit-medium-text">{data.modifiedDate}</span>
              <button className="edit-modify-button">수정하기</button>
            </div>
          ))}
          <div className="edit-pagination">
            <button
              className="edit-nav-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="edit-status-page-text">
              {currentPage} / {totalPages}
            </span>
            <button
              className="edit-nav-button"
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

export default EditPost;
