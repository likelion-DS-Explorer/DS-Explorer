import React from "react";
import { useNavigate } from "react-router-dom";

const SessionItem = ({ id, image, title, category, content, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${id}/`); // ID를 기반으로 NewsDetail로 이동
  };

  return (
    <div className="session-news-item" onClick={handleClick}>
      <img
        src={image || "https://via.placeholder.com/150"} // 대체 이미지
        alt={title || "No title"} // 타이틀 없을 경우 기본 텍스트
        className="session-image"
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // 이미지 로드 오류 방지
      />
      <div className="session-text-container">
        <h2 className="session-title">{title || "제목 없음"}</h2>
        <p className="session-category">{category || "카테고리 없음"}</p>
        <p className="session-content">
          {content || "내용이 존재하지 않습니다."}
        </p>
        <p className="session-status">{status || "상태 정보 없음"}</p>
      </div>
    </div>
  );
};

export default SessionItem;
