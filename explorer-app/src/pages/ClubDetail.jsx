//ClubDetail.jsx
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import likeBtn from "../img/likeBtn.png";
import likeBtnAfter from "../img/likeBtnAfter.png";
import lionPic from "../img/clubs_img/lion.jpg";

// Styled components (unchanged)
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  font-family: 'DMSansBlack', sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 0;
`;

const Notification = styled.div`
  padding-top: 99px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ffffff60;
  width: 80%;
`;

const ProPic = styled.div``;

const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const ProInfo = styled.div`
  margin-left: 127px;
`;

const InfoList = styled.ul`
  list-style: none;
  font-size: 14.6px;
  font-weight: 200;
  width: 588px;
  margin: 0;
  padding: 0;
`;

const InfoListLi = styled.li`
  display: flex;
  border-top: 1px solid #ffffff;
  padding: 20px 0 20px 0;
  margin: 0;
  &:first-child {
    border-top: none;
  }
`;

const InfoListTitle = styled.p`
  list-style: none;
  font-size: 14.6px;
  font-weight: 600;
  width: 117px;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const InfoListContent = styled.p`
  text-align: left;
  margin: 0;
`;

const BtnDiv = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  margin-top: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 78px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #F5A52420;
  border-color: #F5A524;
  border-radius: 3px;
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
    background-color: #F5A52470;
    cursor: pointer;
  }
`;

const Text = styled.pre`
  width: 80%;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  padding-top: 62px;
  white-space: pre-wrap;
`;

const A = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function ClubDetail() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(0); // Track likes count from the server

  const handleBookmarkClick = async () => {
    try {
      const clubId = 1;
      const token = localStorage.getItem("token");
  
      // 토큰이 없는 경우 로그인 페이지로 리디렉션하거나 경고 메시지 처리
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
  
      console.log("Authorization Token:", token); // 로그로 토큰 확인
  
      const response = await axios.post(`http://127.0.0.1:8000/clubs/${clubId}/like/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200 || response.status === 201) {
        setIsBookmarked(!isBookmarked);
        setLikesCount(response.data.likes_count); // 좋아요 수 업데이트
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      if (error.response && error.response.status === 401) {
        alert("인증 오류: 로그인 상태를 확인하세요.");
      }
    }
  };

  return (
    <>
      <Content>
        <Title>동아리 상세 탐험</Title>
        <Notification>
          <ProPic>
            <Img src={lionPic} width={488} height={488} alt="Main" />
          </ProPic>
          <ProInfo>
            <InfoList>
              <InfoListLi>
                <InfoListTitle>동아리명</InfoListTitle>
                <InfoListContent>덕성여자대학교 멋쟁이사자처럼</InfoListContent>
              </InfoListLi>
              <InfoListLi>
                <InfoListTitle>카테고리</InfoListTitle>
                <InfoListContent>IT</InfoListContent>
              </InfoListLi>
              <InfoListLi>
                <InfoListTitle>활동시간</InfoListTitle>
                <InfoListContent>매주 월요일 19:00 (2-3시간)</InfoListContent>
              </InfoListLi>
              <InfoListLi>
                <InfoListTitle>활동장소</InfoListTitle>
                <InfoListContent>교내 강의실</InfoListContent>
              </InfoListLi>
              <InfoListLi>
                <InfoListTitle>회비정보</InfoListTitle>
                <InfoListContent>5만원/연</InfoListContent>
              </InfoListLi>
              <InfoListLi>
                <InfoListTitle>문의정보</InfoListTitle>
                <InfoListContent>
                  <A href="https://open.kakao.com/o/sa1eBU5f ">https://open.kakao.com/o/sa1eBU5f</A>
                </InfoListContent>
              </InfoListLi>
            </InfoList>
            <BtnDiv>
              <Button type="button" className="likeBtn" onClick={handleBookmarkClick}>
                <img src={isBookmarked ? likeBtnAfter : likeBtn} alt="Like" width={28} />
              </Button>
            </BtnDiv>
          </ProInfo>
        </Notification>
        <Text>
          안녕하세요! 덕성여자대학교 **멋쟁이사자처럼**입니다. <br />
          **@멋쟁이 사자처럼** 12기 모집을 안내해 드립니다! 🦁 <br />
          <br />
          📅 **활동 일정** <br />
          - **활동 시간**: 매주 월요일 19:00부터 약 2-3시간, 교내 세션 (모든 인원 필참!) <br />
          - **결석 규정**: 무단 결석 2회 시 활동비 환불 없이 자격 박탈 <br />
          <br />
          📌 **멋쟁이사자처럼이란?** <br />
          **"GROWL TO WORLD!"** <br />
          **멋쟁이사자처럼**은 테크 기반의 아이디어 실현을 위해 국내 61개 대학이 함께하는 IT 창업 동아리입니다. <br />
          <br />
          🦁 **모집 대상** <br />
          - 아이디어를 실현하고 싶은 분 <br />
          - 협업을 즐길 수 있는 분 <br />
          - 24년도 기준 덕성여대 재학생 및 휴학생, 편입생, 졸업유예자 <br />
          - 오프라인 세션 및 스터디 참여 가능자 <br />
          - 주 20시간 이상 활동 가능한 분 <br />
          - 회비 납부(1년 50,000원)에 부담 없는 분 <br />
          <br />
          📅 **모집 일정** <br />
          - **서류 모집**: 2024년 2월 8일(목) ~ 2월 22일(목) 18:00 <br />
          - **서류 합격자 발표**: 2024년 2월 28일(수) <br />
          - **최종 면접**: 2024년 3월 4일(월) ~ 3월 6일(수) <br />
          - **최종 합격자 발표**: 2024년 3월 12일(화) <br />
          - **12기 OT**: 2024년 3월 14일(목) <br />
          <br />
          📖 **활동 기간**: 2024년 3월 ~ 2024년 12월 <br />
          **중도 탈퇴 없이 성실히 활동할 아기사자를 기다립니다!**<br />
          <br />
          ✍️ **지원 방법** <br />
          - 서류 지원 폼: [지원 링크](https://forms.gle/Arf7ZEAn56cu6S3r7) <br />
          (프로필의 링크트리에서도 확인 가능합니다)<br />
          <br />
          💻 **학습 내용 안내** <br />
          - **온/오프라인 학습**: 멋쟁이사자처럼 온라인 강의 플랫폼을 통해 프로그래밍 학습 <br />
          - **기획/디자인 트랙**: HTML/CSS, Figma 등 사용자 중심 디자인과 기획 학습 <br />
          - **프론트엔드 트랙**: HTML/CSS, JavaScript, React 등을 활용해 웹 인터페이스 개발 <br />
          - **백엔드 트랙**: Django 등을 사용한 서버 및 데이터 관리 학습<br />
          <br />
          2024 덕성 **멋쟁이사자처럼** 모집에 많은 관심과 지원 부탁드립니다! <br />
          📣 여러분의 열정과 아이디어를 기다립니다! <br />
          <br />
        </Text>
      </Content>
    </>
  );
}

export default ClubDetail;
