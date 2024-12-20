import React, { useState } from "react";
import "../styles/News.css";
import SessionItem from "../components/SessionItem";
import exampleImage1 from "../img/tempData/news1.png";
import exampleImage2 from "../img/tempData/news2.png";
import exampleImage3 from "../img/tempData/news3.png";
import exampleImage4 from "../img/tempData/news4.png";
import exampleImage5 from "../img/tempData/news5.png";

function News() {
  const sessionData = [
    {
      id: 1,
      image: exampleImage1,
      title: "멋쟁이사자처럼, '사계(개)절' 프로젝트 데모데이 및 수료식 성료!",
      category: "IT | 멋쟁이사자처럼",
      content:
        "2024년 2학기, 멋쟁이사자처럼 동아리의 '사계(개)절' 프로젝트가 성공적으로 마무리되었습니다.",
      status: "완료활동 2024.12.19",
      statusColor: "rgba(245, 165, 36, 0.6)",
    },
    {
      id: 2,
      image: exampleImage2,
      title: "2024 F.O.R.K 2nd Homecoming  “For.kids” 🎸🎤🔥",
      category: "공연·음악 | F.O.R.K",
      content:
        "덕성여대 중앙락밴드 F.O.R.K의 졸업생과 메인 기수가 함께하는 두 번째 홈커밍에 여러분을 초대합니다!",
      status: "참여가능 2024.11.25",
      statusColor: "rgba(0, 111, 238, 0.6)",
    },
    {
      id: 3,
      image: exampleImage3,
      title:
        "🎬 월제 16회 소울라이 정기공연 X 영화제 🎭 ~ DSFF: Duksung Soully Film Festival ~!",
      category: "공연·음악 | soully",
      content:
        "📢 2024년, 영화 같은 특별한 춤의 세계로 초대합니다! 왁킹, 락킹, 하우스 등 다양한 무대를 만나보세요.",
      status: "참여가능 2024.11.25",
      statusColor: "rgba(0, 111, 238, 0.6)",
    },
    {
      id: 4,
      image: exampleImage4,
      title: "교내 전시회 ‘겨울 빛’ 개최",
      category: "예술·창작 | 한빛",
      content:
        "덕성여자대학교 사진동아리 ‘한빛’이 도서관 전시실에서 ‘청춘의 한 순간’을 주제로 전시회를 엽니다.",
      status: "참여가능 2024.11.20",
      statusColor: "rgba(0, 111, 238, 0.6)",
    },
    {
      id: 5,
      image: exampleImage5,
      title: "필름소피 팟캐스트 <ep.22 최악의 영화>",
      category: "예술·창작 | 필름소피",
      content:
        "덕성여자대학교 영상영화제작동아리 필름소피의 팟캐스트 스물두 번째 에피소드가 업로드되었습니다.",
      status: "완료활동 2024.11.9",
      statusColor: "rgba(245, 165, 36, 0.6)",
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const currentItems = sessionData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (pageIndex) => setCurrentPage(pageIndex);

  return (
    <>
      <div className="session-news-page">
        <div className="session-header">
          <h1 className="session-title">동아리에서 이뤄진 활동을 여기서 확인하세요!</h1>
          <p className="session-description">
            다가올 소식과 지난 소식에서 동아리가 진행했던 다양한 활동과 앞으로의
            행사 일정을 한눈에 확인하며, 함께할 멋진 경험들을 미리 만나보세요.
          </p>
        </div>
        <div className="session-list">
          {currentItems.map((news) => (
            <SessionItem
              key={news.id}
              image={news.image}
              title={news.title}
              category={news.category}
              content={news.content}
              status={news.status}
              statusColor={news.statusColor}
            />
          ))}
        </div>
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(sessionData.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`page-number ${index === currentPage ? "active" : ""}`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default News;
