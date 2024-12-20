import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Club from "../components/Club";

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
  return (
    <>
      <Content>
        <Title>전체 동아리 탐험</Title>
        <Description>
          정동아리, 준동아리, 소모임까지 덕성여대의 동아리를 모두 확인할 수 있습니다. <br />
          동아리를 클릭하면 해당 동아리의 소개 페이지로 이동합니다. 지금 탐험을 떠나보세요!
        </Description>
        <ClubDiv>
          <ClubItem>
            <Club src="https://dummyimage.com/200" name="동아리명" />
          </ClubItem>
          <ClubItem>
            <Club src="https://dummyimage.com/200" name="동아리명" />
          </ClubItem>
          <ClubItem>
            <Club src="https://dummyimage.com/200" name="동아리명" />
          </ClubItem>
          <ClubItem>
            <Club src="https://dummyimage.com/200" name="동아리명" />
          </ClubItem>
          <ClubItem>
            <Club src="https://dummyimage.com/200" name="동아리명" />
          </ClubItem>
          <ClubItem>
            <Club src="https://dummyimage.com/200" name="동아리명" />
          </ClubItem>
        </ClubDiv>
      </Content>
    </>
  );
}

export default ClubList;
