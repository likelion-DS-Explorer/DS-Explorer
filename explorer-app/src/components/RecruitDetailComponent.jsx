// import styled from "styled-components";
import React, { useState } from "react";
/*슬라이더 (사진 미리보기창)*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*css*/
import "../styles/RecruitDetail.css";
/*버튼*/
import likeBtn from "../img/likeBtn.png";
import bookmarkBtn from "../img/bookmarkBtn.png";
import bookmarkBtnAfter from "../img/bookmarkBtnAfter.png";
/*사진*/
import picOne from "../img/ex_img/one.png";
import picTwo from "../img/ex_img/two.png";
import picThree from "../img/ex_img/three.png";
import picFour from "../img/ex_img/four.png";
import picFive from "../img/ex_img/five.png";
import picSix from "../img/ex_img/six.png";

const imageUrls = [picOne, picTwo, picThree, picFour, picFive, picSix];

function RecruitDetailComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false); // 좋아요 버튼 상태 관리

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleBookmarkClick = () => {
    // 북마크 상태 변경
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const handleApplyClick = () => {
    window.location.href = "https://example.com/apply";
  };

  // 미리보기 이미지 배열의 앞 5개만 가져오는 함수
  const getPreviewimg = () => {
    return imageUrls;
  };

  const previewimg = getPreviewimg();

  // proPicSmall 슬라이더 설정
  const smallSliderSettings = {
    dots: false, // 작은 이미지에는 점 표시를 사용하지 않음
    infinite: true,
    speed: 300,
    slidesToShow: 5, // 작은 이미지들이 한 번에 5개씩 보이도록 설정
    slidesToScroll: 1, // 한 번에 한 개씩 스크롤
    focusOnSelect: true, // 클릭한 슬라이드를 포커스하게 함
  };

  return (
    <>
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
            <Slider {...smallSliderSettings}>
              {previewimg.map((url, index) => (
                <div key={index}>
                  <img src={url.replace("488", "96")} width={90} height={90} onClick={() => handleClick(index)} alt="Preview" />
                </div>
              ))}
            </Slider>
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
            <button type="button" className="bookmarkBtn" onClick={handleBookmarkClick}>
              <img src={isBookmarked ? bookmarkBtnAfter : bookmarkBtn} alt="Bookmark" />
            </button>
            <button type="button" className="applyBtn" onClick={handleApplyClick}>
              지원하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruitDetailComponent;