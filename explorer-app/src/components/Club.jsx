import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Name = styled.p`
  margin: 0;
  margin-top: 18px;
  font-size: 20px;
  font-weight: 700;
`;

function Club(props) {
  return (
    <>
      <Img src={props.src} />
      <Name>{props.name}</Name>
    </>
  );
}

export default Club;
