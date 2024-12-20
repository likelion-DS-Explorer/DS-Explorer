import React, { useState } from "react";
import Header from "../components/Header";
import NoticeItem from "../components/NoticeItem";
import Filter from "../components/Filter/Filter";
import recruit1 from "../img/tempData/recruit1.png";
import recruit2 from "../img/tempData/recruit2.png";
import recruit3 from "../img/tempData/recruit3.png";
import recruit4 from "../img/tempData/recruit4.png";
import recruit11 from "../img/tempData/11.png";
import recruit22 from "../img/tempData/22.png";
import recruit33 from "../img/tempData/33.png";
import recruit44 from "../img/tempData/44.png";
import recruit55 from "../img/tempData/55.png";
import recruit66 from "../img/tempData/66.png";
import "../styles/Recruit.css";

function Recruit() {
  // 임시 데이터 설정
  const [recruitData] = useState([
    {
      id: 1,
      images: [{ image_url: recruit1 }],
      club_code: "멋쟁이사자처럼",
      d_day: 5,
      title: "🦁 12기 아기사자 모집 안내",
    },
    {
      id: 2,
      images: [{ image_url: recruit2 }],
      club_code: "운향극예술 연구회",
      d_day: 3,
      title: "🎭 연극 멤버 모집 공고",
    },
    {
      id: 3,
      images: [{ image_url: recruit3 }],
      club_code: "P.I.C.E",
      d_day: 7,
      title: "📸 사진 동아리 신입 모집",
    },
    {
      id: 4,
      images: [{ image_url: recruit4 }],
      club_code: "SoulLy",
      d_day: 10,
      title: "🎶 보컬 연습생 모집",
    },
    {
      id: 5,
      images: [{ image_url: recruit11 }],
      club_code: "운현극예술 연구회",
      d_day: 8,
      title: "🎭 신규 연극 멤버 모집",
    },
    {
      id: 6,
      images: [{ image_url: recruit22 }],
      club_code: "M.O.D.s",
      d_day: 2,
      title: "🎶 댄스 팀원 모집",
    },
    {
      id: 7,
      images: [{ image_url: recruit33 }],
      club_code: "카들레아",
      d_day: 12,
      title: "🌸 플로리스트 클래스 모집",
    },
    {
      id: 8,
      images: [{ image_url: recruit44 }],
      club_code: "F.O.R.K",
      d_day: 9,
      title: "🍴 요리 동아리 신입 모집",
    },
    {
      id: 9,
      images: [{ image_url: recruit55 }],
      club_code: "솔바람",
      d_day: 1,
      title: "🎤 라이브 밴드 멤버 모집",
    },
    {
      id: 10,
      images: [{ image_url: recruit66 }],
      club_code: "운현극예술 연구회",
      d_day: 4,
      title: "🎭 창작 연극팀 신입 모집",
    },
  ]);

  const [loading] = useState(false);
  const [error] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(Math.max(recruitData.length, 1) / itemsPerPage);
  const currentItems = recruitData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (pageIndex) => setCurrentPage(pageIndex);

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
                  image={item.images[0].image_url}
                  clubName={item.club_code || "동아리"}
                  deadline={`D-${item.d_day}`}
                  title={item.title}
                />
              ))
            ) : (
              <div>모집 공고가 없습니다.</div>
            )}
          </div>
          {/* <div className="pagination">{renderPageNumbers()}</div> */}
        </div>
      </div>
    </>
  );
}

export default Recruit;
