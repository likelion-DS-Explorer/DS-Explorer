//Club.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // React Router의 Link 사용

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.p`
  margin: 0;
  margin-top: 18px;
  font-size: 20px;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Club(props) {
  // `props.code`가 "lion"이면 `/clubs/${props.id}`, 그렇지 않으면 현재 경로에 머무름
  const targetUrl = props.id === "lion" ? `/clubs/detail` : "/clubs";  // "/clubs"로 설정하여 Club 페이지로 유지

  return (
    <StyledLink to={targetUrl}> {/* 동적으로 경로 설정 */}
      <Img src={props.src} alt={`${props.name} 동아리 이미지`} />
      <Name>{props.name}</Name>
    </StyledLink>
  );
}

export default Club;
