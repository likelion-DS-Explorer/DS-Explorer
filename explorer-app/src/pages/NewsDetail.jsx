import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "../styles/NewsDetail.css";

function NewsDetail() {
  const { news_id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/news/${news_id}/`
        );
        setNewsData(response.data);
      } catch (err) {
        console.error("Error fetching news detail:", err);
        setError("뉴스 데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [news_id]);

  const handlePrevImage = () => {
    if (newsData && newsData.images) {
      setCurrentImage((prev) =>
        prev === 0 ? newsData.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (newsData && newsData.images) {
      setCurrentImage((prev) =>
        prev === newsData.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="session-detail-container">
        <h1 className="session-detail-title">
          {newsData.title || "제목 없음"}
        </h1>
        <p className="session-detail-meta">
          작성자: {newsData.author || "작성자 없음"} 작성일:{" "}
          {newsData.created_at || "날짜 없음"}
        </p>
        <div className="session-detail-image-gallery">
          {newsData.images && newsData.images.length > 0 ? (
            <>
              <img
                src={newsData.images[currentImage]}
                alt={`Gallery ${currentImage + 1}`}
                className="session-detail-gallery-image"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150")
                }
              />
              <div className="session-detail-image-controls">
                <button onClick={handlePrevImage}>&lt;</button>
                <span>
                  {currentImage + 1}/{newsData.images.length}
                </span>
                <button onClick={handleNextImage}>&gt;</button>
              </div>
            </>
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>
        <p className="session-detail-content">
          {newsData.content || "내용이 없습니다."}
        </p>
      </div>
    </>
  );
}

export default NewsDetail;
