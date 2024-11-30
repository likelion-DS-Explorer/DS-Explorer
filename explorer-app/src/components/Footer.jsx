import React, { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

const Box = styled.div`
  background-color: #0b0b20;
  height: 234px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 120px 800px 0px 100px;
  justify-content: space-around;
`;

const Title = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 14.18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

const Text = styled.div`
  color: #6b7684;
  font-family: "DM Sans";
  font-size: 13.83px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function Footer() {
  return (
    <>
      <Box>
        <Section>
          <Title>서비스</Title>
          <Text>자주 묻는 질문</Text>
          <Text>공지사항</Text>
          <Text>로그아웃</Text>
        </Section>
        <Section>
          <Title>문의</Title>
          <Text>1:1 문의</Text>
          <Text>광고 문의</Text>
        </Section>
        <Section style={{ marginLeft: "100px" }}>
          <Title>DS: explorer:동아리 탐험대</Title>
          <Text>기획 디자인: 곽승주</Text>
          <Text>프론트엔드: 김민지 박민주 한정현</Text>
          <Text>백엔드: 이가은 조희원</Text>
        </Section>
      </Box>
    </>
  );
}

export default Footer;
