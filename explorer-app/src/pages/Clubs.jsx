import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Club from "../components/Club";
import clubData from "../data/club.json";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 7vw;
  margin-bottom: 7vw;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-top: 20px;
  line-height: 30px;
`;

const ClubDiv = styled.div`
  margin-top: 36px;
  width: 80vw;
  border-top: 1px solid #ffffff;
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0px;
`;

const ClubItem = styled.div`
  width: 20%;
  margin-bottom: 97px;
`;

function ClubList() {
  const [clubs, setClubs] = useState([]); // 동아리 데이터를 저장할 상태

  useEffect(() => {
    // club.json 파일로부터 데이터를 설정
    setClubs(clubData); // club.json 데이터를 상태로 설정
  }, []);

  const getClubImage = (clubCode) => {
    try {
      // 동적으로 이미지를 가져옵니다.
      return require(`../img/clubs_img/${clubCode}.jpg`);
    } catch (err) {
      // 이미지가 없는 경우 기본 이미지 반환
      return "https://dummyimage.com/200"; // 기본 더미 이미지
    }
  };

  return (
    <>
      <Content>
        <Title>전체 동아리 탐험</Title>
        <Description>
          정동아리, 준동아리, 소모임까지 덕성여대의 동아리를 모두 확인할 수 있습니다. <br />
          동아리를 클릭하면 해당 동아리의 소개 페이지로 이동합니다. 지금 탐험을 떠나보세요!
        </Description>
        <ClubDiv>
          {clubs.map((club, index) => (
            <ClubItem key={index}>
              <Club
                src={getClubImage(club.code)} // 동적으로 가져온 이미지 사용
                name={club.name}
                id={club.code}
              />
            </ClubItem>
          ))}
        </ClubDiv>
      </Content>
    </>
  );
}

export default ClubList;
