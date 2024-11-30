import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/NewsDetail.css";
import exampleImage1 from "../img/exampleImage1.png";
import exampleImage2 from "../img/exampleImage2.png";

function NewsDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [exampleImage1, exampleImage2];

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header type="default" />
      <div className="session-detail-container">
        <h1 className="session-detail-title">멋쟁이사자처럼, '사계(개)절' 프로젝트 데모데이 및 수료식 성료!</h1>
        <p className="session-detail-meta">작성자: 멋쟁이사자처럼 작성일: 2024.12.19. 오후 01:28</p>
        <div className="session-detail-image-gallery">
          <img src={images[currentImage]} alt={`Gallery ${currentImage + 1}`} className="session-detail-gallery-image" />
          <div className="session-detail-image-controls">
            <button onClick={handlePrevImage}>&lt;</button>
            <span>
              {currentImage + 1}/{images.length}
            </span>
            <button onClick={handleNextImage}>&gt;</button>
          </div>
        </div>
        <p className="session-detail-content">
          2024년 2학기, 멋쟁이사자처럼 동아리의 '사계(개)절' 프로젝트가 성공적으로 마무리되었습니다. Slogan: ‘사’자들은 ‘개’발을 ‘절’대 멈추지 않아라는 슬로건
          아래, 1년 동안 끊임없는 배움과 도전을 거듭해온 동아리원들이 마침내 그 결과를 공유하는 특별한 시간을 가졌습니다.
          <br />
          <br />
          이번 프로젝트는 기획/디자인, 프론트엔드, 백엔드 각 부서가 유기적으로 협력하는 과정을 중심으로 진행되었습니다. 프로젝트의 첫 시작은 1학기 동안 부서별
          혹은 공동 세션을 통해 진행된 배움의 시간으로, 백엔드, 프론트엔드, 기획/디자인 등 각 분야에서 멘토들의 지도를 받으며 실력을 쌓았습니다. 이후 2학기
          동안에는 각 부서별 자율스터디와 팀빌딩을 통해 프로젝트를 구체화하고, 개발 및 디자인 아이디어를 실제로 구현하는 데 집중했습니다.
          <br />
          <br />
          데모데이와 수료식은 그동안의 노력과 성과를 공유하는 중요한 순간이었습니다. 이날 행사에서는 각 팀이 그동안 진행해온 프로젝트의 결과물을 발표하며,
          동아리원들은 물론 멋쟁이사자처럼 연합 해커톤에서 쌓은 경험을 바탕으로 발표를 준비했습니다. 발표자들은 기획 및 디자인 아이디어부터 시작해, 실제 구현된
          시스템 및 개발 결과물을 소개하며 그들의 노력을 보여주었습니다.
          <br />
          <br />
          이번 수료식에서는 동아리원들이 그동안의 성과를 돌아보고, 서로 격려하며 한 해를 마무리하는 시간을 가졌습니다. 멋쟁이사자처럼 동아리의 1년을 함께한 모든
          멤버들은 각자의 분야에서 한층 더 성장하며, 앞으로도 멋진 프로젝트를 기획하고 개발할 수 있는 기반을 다졌습니다.
          <br />
          <br />
          특히, 이번 데모데이와 수료식은 그동안 진행했던 여러 해커톤과 자율스터디, 연합 활동의 성과를 한눈에 보여주는 의미 있는 자리였으며, 동아리원들의 열정과
          노력 덕분에 그 어느 때보다 의미 깊은 마무리가 되었습니다.
        </p>
      </div>
    </>
  );
}

export default NewsDetail;
