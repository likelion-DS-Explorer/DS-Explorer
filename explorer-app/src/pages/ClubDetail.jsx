// import styled from "styled-components";
import React, { useState } from "react";
/*버튼*/
import likeBtn from "../img/likeBtn.png";
import likeBtnAfter from "../img/likeBtnAfter.png";
import styled from "styled-components";
import Header from "../components/Header";

const Content = styled.div`
   display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
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

const ProPic = styled.div`
`;

const Img = styled.img`
  border-radius: 50%;
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

const Text = styled.p`
  width: 80%;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  padding-top: 62px;
`;

function ClubDetail() {
  const [isBookmarked, setIsBookmarked] = useState(false); // 좋아요 버튼 상태 관리

  const handleBookmarkClick = () => {
    // 북마크 상태 변경
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  return (
    <>
    <Content>
      <Title>ssss</Title>
      <Notification>
        <ProPic>
            <Img src="https://dummyimage.com/488" width={488} height={488} alt="Main" />        
        </ProPic>
        <ProInfo>
          <InfoList>
          <InfoListLi>
              <InfoListTitle>동아리명</InfoListTitle>
              <InfoListContent>덕성여자대학교 멋쟁이사자처럼</InfoListContent>
            </InfoListLi>
            <InfoListLi>
              <InfoListTitle>카테고리</InfoListTitle>
              <InfoListContent>매주 월요일 19:00 (2-3시간)</InfoListContent>
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
                sㅐ용
              </InfoListContent>
            </InfoListLi>
          </InfoList>
          <BtnDiv>
            <Button type="button" className="likeBtn" onClick={handleBookmarkClick}>
              <img src={isBookmarked ? likeBtnAfter : likeBtn} alt="Like" width={28}/>
            </Button>
          </BtnDiv>
        </ProInfo>
      </Notification>
      <Text>
        아아아아아
        아아아아아
        아아아아아
      </Text>
      </Content>
    </>
  );
}

export default ClubDetail;
