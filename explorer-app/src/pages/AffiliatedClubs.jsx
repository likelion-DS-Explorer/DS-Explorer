import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../components/Header";
import "../styles/AffiliatedClubs.css";
import affliatedClubCircleIcon from "../img/affliatedClubCircleIcon.png";

Modal.setAppElement("#root");

function AffiliatedClubs() {
  const allData = [
    {
      joinDate: "2024.03.15",
      role: "운영진",
      clubName: "멋쟁이사자처럼",
      category: "IT",
      activityPeriod: "2024.03.15 ~ 2024.12.20",
    },
    {
      joinDate: "2023.05.01",
      role: "회원",
      clubName: "사진동아리",
      category: "예술",
      activityPeriod: "2023.05.01 ~ 2024.02.28",
    },
    {
      joinDate: "2022.06.20",
      role: "부회장",
      clubName: "음악사랑",
      category: "음악",
      activityPeriod: "2022.06.20 ~ 2023.12.31",
    },
    {
      joinDate: "2021.04.10",
      role: "회원",
      clubName: "체육동아리",
      category: "체육",
      activityPeriod: "2021.04.10 ~ 2022.03.30",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
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

  const handleOpenMemberModal = () => {
    setIsMemberModalOpen(true);
  };

  const handleCloseMemberModal = () => {
    setIsMemberModalOpen(false);
  };

  const handleOpenAddMemberModal = () => {
    setIsAddMemberModalOpen(true);
  };

  const handleCloseAddMemberModal = () => {
    setIsAddMemberModalOpen(false);
  };

  return (
    <>
      <Header type="default" />
      <div className="affiliated-clubs-page-container">
        <div className="affiliated-clubs-content">
          <div className="affiliated-header-section">
            <img
              src={affliatedClubCircleIcon}
              className="affiliated-header-img"
              alt="icon"
            ></img>
            <h1 className="affiliated-header-title">소속 동아리 기록</h1>
            <p className="affiliated-header-count">총 {allData.length}건</p>
          </div>
          <div className="affiliated-description-section">
            <p className="affiliated-description">
              • 소속된 동아리 정보를 확인할 수 있습니다.
            </p>
            <p className="affiliated-description">
              • 동아리 이름을 클릭하면 상세 정보를 볼 수 있습니다.
            </p>
            <p className="affiliated-description">
              • 등록된 동아리 정보는 졸업 후에도 조회 가능합니다.
            </p>
          </div>
          <hr className="affiliated-divider-thick" />
          <div className="affiliated-table-header">
            <span>가입일</span>
            <span>역할</span>
            <span></span>
            <span>동아리명</span>
            <span>카테고리</span>
            <span>활동기간</span>
          </div>
          <hr className="affiliated-divider-thin" />
          {currentData.map((data, index) => (
            <div className="affiliated-table-row" key={index}>
              <span className="affiliated-medium-text">{data.joinDate}</span>
              <span className="affiliated-medium-text">{data.role}</span>
              {data.role === "운영진" ? (
                <button
                  className="affiliated-add-member-button"
                  onClick={handleOpenMemberModal}
                >
                  +
                </button>
              ) : (
                <span className="affiliated-placeholder"></span>
              )}
              <span className="affiliated-semi-bold-text">{data.clubName}</span>
              <span className="affiliated-medium-text">{data.category}</span>
              <span className="affiliated-medium-text">
                {data.activityPeriod}
              </span>
            </div>
          ))}
          <div className="affiliated-pagination">
            <button
              className="affiliated-nav-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="affiliated-status-page-text">
              {currentPage} / {totalPages}
            </span>
            <button
              className="affiliated-nav-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Member Modal */}
      <Modal
        isOpen={isMemberModalOpen}
        onRequestClose={handleCloseMemberModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close-button" onClick={handleCloseMemberModal}>
          X
        </button>
        <h2 className="modal-title">소속 동아리원</h2>
        <table className="modal-table">
          <thead>
            <tr>
              <th>학번</th>
              <th>이름</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, idx) => (
              <tr key={idx}>
                <td>20230733</td>
                <td>한정현</td>
                <td>
                  <button className="affiliated-add-member-button">삭제하기</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="affiliated-add-member-button"
          onClick={handleOpenAddMemberModal}
        >
          부원 추가하기
        </button>
      </Modal>

      {/* Add Member Modal */}
      <Modal
        isOpen={isAddMemberModalOpen}
        onRequestClose={handleCloseAddMemberModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close-button" onClick={handleCloseAddMemberModal}>
          X
        </button>
        <h2 className="modal-title">부원 추가하기</h2>
        <div className="modal-search">
          <select className="modal-filter">
            <option>이름</option>
            <option>학번</option>
          </select>
          <input type="text" placeholder="검색" />
        </div>
        <table className="modal-table">
          <thead>
            <tr>
              <th>학번</th>
              <th>이름</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, idx) => (
              <tr key={idx}>
                <td>20220921</td>
                <td>한정현</td>
                <td>
                  <button className="affiliated-add-member-button">추가하기</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </>
  );
}

export default AffiliatedClubs;