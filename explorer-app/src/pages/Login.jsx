import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

//아이디 찾기랑 비밀번호 찾기 링크를 몰라서 find00으로 넣어뒀습니다!

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 7vw;
  margin-bottom: 7vw;
`;

const Title = styled.h3`
  font-size: 19.22px;
  font-weight: 400;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 13.45px;
  font-weight: 400;
  margin-top: 10px;
  color: #ffffff80;
`;

const LoginForm = styled.form`
  margin-top: 99.4px;
  display: flex;
  justify-content: center;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 286px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #4b67d850;
  background-color: #ffffff00;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  padding-left: 11px;
  margin-bottom: 8px;
`;

const Submit = styled.button`
  width: 118px;
  height: 104px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 17.58px;
  font-weight: 400;
  background-color: #5e89e2;
  margin-left: 19px;
`;

const LinkDiv = styled.div``;

const Link = styled.button`
  font-size: 13.23px;
  font-weight: 400;
  color: #ffffff80;
  border: none;
  border-left: 1px solid #ffffff80;
  background-color: #ffffff00;
  padding: 0 40px;
`;

const Signup = styled(Link)`
  border: none;
  font-weight: 800;
`;

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Header type="default" />
      <Content>
        <Title>
          로그인 후 다양한 서비스를 이용해 보세요.
          <Description>아직 DS explorer : 동아리 탐험대 회원이 아니시면, 지금 회원가입을 해주세요.</Description>
        </Title>
        <LoginForm>
          <InputBlock>
            <Input type="text" placeholder="아이디"></Input>
            <Input type="text" placeholder="비밀번호"></Input>
          </InputBlock>
          <Submit type="submit">로그인</Submit>
        </LoginForm>
        <LinkDiv>
          <Signup type="button" onClick={() => navigate("/signup")}>
            회원가입
          </Signup>
          <Link type="button" onClick={() => navigate("/findid")}>
            아이디 찾기
          </Link>
          <Link type="button" onClick={() => navigate("/findpw")}>
            비밀번호 찾기
          </Link>
        </LinkDiv>
      </Content>
    </>
  );
}

export default Login;
