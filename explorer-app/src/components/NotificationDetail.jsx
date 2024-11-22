import React, { useState } from "react";
import "./Notification.css";
import likeBtn from "../images/likeBtn.png";
import bookmarkBtn from "../images/bookmarkBtn.png";
import picOne from "../images/one.png";
import picTwo from "../images/two.png";
import picThree from "../images/three.png";
import picFour from "../images/four.png";
import picFive from "../images/five.png";
import picSix from "../images/six.png";

const imageUrls = [picOne, picTwo, picThree, picFour, picFive, picSix];

function NotificationDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleLikeClick = () => {
    window.location.href = "https://example.com/like";
  };

  const handleBookmarkClick = () => {
    window.location.href = "https://example.com/bookmark";
  };

  const handleApplyClick = () => {
    window.location.href = "https://example.com/apply";
  };

  // 미리보기 이미지 배열을 순환적으로 가져오는 함수
  const getPreviewImages = () => {
    const previewImages = [];
    for (let i = -2; i <= 3; i++) {
      const index = (currentIndex + i + imageUrls.length) % imageUrls.length;
      previewImages.push(imageUrls[index]);
    }
    return previewImages;
  };

  const previewImages = getPreviewImages();

  return (
    <div className="notification">
      <div className="proPic">
        <div className="currentPic">
          <img src={imageUrls[currentIndex]} width={488} height={488} alt="Main" />
        </div>
        <p className="page">
          {currentIndex + 1}
          <span>/6</span>
        </p>
        <div className="proPicSmall">
          {previewImages.map((url, index) => (
            <img
              key={index}
              src={url.replace("488", "96")}
              width={96}
              height={96}
              onClick={() => handleClick((currentIndex + index - 2 + imageUrls.length) % imageUrls.length)}
              alt="Preview"
            />
          ))}
        </div>
      </div>
      <div className="proInfo">
        <h2 className="infoTitle">[멋쟁이사자처럼]12기 아기사자 모집 안내</h2>
        <div className="dDay">
          <p>D-15</p>
        </div>
        <h3 className="groupName">덕성여자대학교 멋쟁이사자처럼</h3>
        <ul className="infoList">
          <li>
            <h4 className="infoListTitle">활동시간</h4>
            <p>매주 월요일 19:00 (2-3시간)</p>
          </li>
          <li>
            <h4 className="infoListTitle">활동장소</h4>
            <p>교내 강의실</p>
          </li>
          <li>
            <h4 className="infoListTitle">회비정보</h4>
            <p>5만원/연</p>
          </li>
          <li>
            <h4 className="infoListTitle">접수기간</h4>
            <p>
              <p>시작일 | 2024.09.16</p>
              <p>마감일 | 2024.10.12</p>
            </p>
          </li>
          <li>
            <h4 className="infoListTitle">활동분야</h4>
            <p className="hashtagDiv">
              <div className="hashtag">IT</div>
              <div className="hashtag">연합</div>
              <div className="hashtag">스터디/연구</div>
              <div className="hashtag">창업/자기개발</div>
            </p>
          </li>
          <li>
            <h4 className="infoListTitle">지원절차</h4>
            <p>
              <p>서류 모집: 2024년 2월 8일(목) ~ 2024년 2월 2일(목) 18시</p>
              <p>최종 면접: 2024년 3월 4일(월) ~ 2024년 3월 6일(수)</p>
            </p>
          </li>
        </ul>
        <div className="btnDiv">
          <button type="button" className="likeBtn" onClick={handleLikeClick}>
            <img src={likeBtn} alt="Like" />
          </button>
          <button type="button" className="bookmarkBtn" onClick={handleBookmarkClick}>
            <img src={bookmarkBtn} alt="Bookmark" />
          </button>
          <button type="button" className="applyBtn" onClick={handleApplyClick}>
            지원하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetail;
