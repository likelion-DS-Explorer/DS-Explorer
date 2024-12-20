/*
슬라이더 때문에
npm install react-slick
npm install slick-carousel
설치해주세요
*/

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import RecruitDetailComponent from "../components/RecruitDetailComponent";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function RecruitDetail() {
  return (
    <>
      <Content>
        <RecruitDetailComponent />
      </Content>
    </>
  );
}

export default RecruitDetail;
