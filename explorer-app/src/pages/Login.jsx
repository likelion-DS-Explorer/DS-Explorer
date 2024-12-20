import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  color: #F5A524;
  font-size: 20px;
  font-weight: bold;
  background-color: #F5A52420;
  margin-left: 19px;

  &:hover {
    background-color: #F5A52470;
    cursor: pointer; 
  }
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

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 이메일 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [error, setError] = useState(null); // 오류 메시지 상태

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    console.log(email, password);

    try {
      const response = await axios.post("http://127.0.0.1:8000/users/login/", {
        username: email,
        password: password,
      });
    
      console.log("로그인 성공:", response.data);
    
      if (!response.data.user) {
        console.warn("로그인 응답에 user 데이터가 없습니다.");
      }
    
      // user 데이터가 있으면 저장, 없으면 경고
      localStorage.setItem("userData", JSON.stringify(response.data.user || {}));
      localStorage.setItem("token", response.data.token);
      console.log("저장된 userData:", localStorage.getItem("userData"));
    
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.error("로그인 실패:", err);
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
    
  };


  return (
    <>
      <Content>
        <Title>
          로그인 후 다양한 서비스를 이용해 보세요.
          <Description>아직 DS explorer : 동아리 탐험대 회원이 아니시면, 지금 회원가입을 해주세요.</Description>
        </Title>
        <LoginForm onSubmit={handleLogin}>
          <InputBlock>
            <Input type="email"
              placeholder="아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></Input>
          </InputBlock>
          <Submit type="submit">로그인</Submit>
        </LoginForm>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <LinkDiv>
          <Signup type="button" onClick={() => navigate("/users/register/")}>
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
