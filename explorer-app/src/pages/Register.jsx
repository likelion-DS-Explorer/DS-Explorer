import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import exploreBtn from "../img/exploreBtn.png";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 7vw;
  margin-bottom: 7vw;
  align-items: center; /* 모달창을 포함한 콘텐츠 중앙 정렬 */
`;

const Title = styled.h1`
  font-size: 19.22px;
  font-weight: 400;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 13.45px;
  font-weight: 400;
  margin-top: 10px;
  color: #ffffff80;
`;

const EmailPW = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 62.4px;
`;

const Input1Div = styled.div`
  display: flex;
`;

const Warning = styled.p`
  font-size: 13.45px;
  font-weight: 400;
  margin-top: 10px;
  color: #ffffff80;
`;

const InputInfo = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PersonalInfo = styled.div`
  width: 906px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 61px;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 calc(33.333% - 24px);
  min-width: 200px;
  margin-bottom: 32px;
`;

const Label = styled.label`
  font-size: 19.22px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Input1 = styled.input`
  width: 286px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #4b67d850;
  background-color: #ffffff00;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  padding-left: 24px;
  margin-bottom: 70px;
`;

const Input2 = styled(Input1)`
  width: 266px;
  margin: 0;
`;

const ClubInfo = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const LabelStrong = styled.span`
  font-weight: 600;
`;

const InputLong = styled(Input2)`
  width: 906px;
`;

const Button = styled.button`
  width: 118px;
  height: 48px;
  border: none;
  border-radius: 4px;
  color: white;
  letter-spacing: -0.7px;
  font-size: 17.58px;
  background-color: #5e89e2;
  margin-left: 29px;
`;

const Submit = styled(Button)`
  width: 179px;
  margin: 0;
`;

/* Modal */
const Modal = styled.div`
  background-color: #ffffff90;
  width: 788px;
  height: 465px;
  border-radius: 30px;
  box-shadow: 20px 20px 60px #27add950;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px; /* Content 내에서의 위치 */
`;

const ModalTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

const ModalDetail = styled.p`
  margin-top: 0;
  font-size: 24px;
  font-weight: 500;
`;

const ModalBtnDiv = styled.div`
  margin-top: 25px;
`;

const ModalBtn = styled.button`
  width: 186px;
  height: 76px;
  border-radius: 47.27px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: #5e89e2;
  border: none;
  align-text: center;
  align-items: center;
`;

const ModalBtn2 = styled(ModalBtn)`
  margin-left: 14.21px;
  color: #5e89e2;
  border: 1.5px solid #5e89e2;
  background-color: #ffffff00;
`;

function Signup(props) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const goToNextPage = () => {
    setPage(2);
  };

  const handleSignup = () => {
    setPage(3);
  };

  const handleExplore = () => {
    navigate("/explore"); // 탐험 페이지로 이동
  };

  const handleLogin = () => {
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <>
      <Header type="default" />
      <Content>
        <Title>DS Explorer에 오신 것을 환영합니다!</Title>
        <Description>함께 동아리 탐험을 시작해 봐요. 새로운 우주가 여러분을 기다리고 있어요.</Description>
        <InputInfo>
          {page === 1 && (
            <EmailPW>
              <InputBlock>
                <Label>이메일을 입력해 주세요</Label>
                <Input1Div>
                  <Input1 type="email" name="email" />
                  <Button type="button">중복 확인하기</Button>
                  <Warning></Warning>
                </Input1Div>
              </InputBlock>
              <InputBlock>
                <Label>비밀번호를 입력해 주세요</Label>
                <Input1Div>
                  <Input1 type="password" name="pw" />
                  <Button type="button" onClick={goToNextPage}>
                    계속하기
                  </Button>
                </Input1Div>
              </InputBlock>
            </EmailPW>
          )}

          {page === 2 && (
            <>
              <PersonalInfo>
                <InputBlock>
                  <Label htmlFor="name">이름</Label>
                  <Input2 type="text" name="name" />
                </InputBlock>
                <InputBlock>
                  <Label htmlFor="stdid">학번</Label>
                  <Input2 type="text" name="stdid" />
                </InputBlock>
                <InputBlock>
                  <Label htmlFor="major">학과</Label>
                  <Input2 type="text" name="major" />
                </InputBlock>
                <InputBlock>
                  <Label htmlFor="nickname">닉네임</Label>
                  <Input2 type="text" name="nickname" />
                  <Warning></Warning>
                </InputBlock>
                <InputBlock>
                  <Label htmlFor="phone">전화번호</Label>
                  <Input2 type="phone" name="phone" />
                </InputBlock>
                <InputBlock></InputBlock>
              </PersonalInfo>
              <ClubInfo>
                <InputBlock>
                  <Label htmlFor="club">
                    <LabelStrong>운영진이신가요?</LabelStrong> 운영진이라면 소속 동아리명을 작성해 주세요. 모집 공고와 활동 소식 작성 권한이 부여됩니다.
                  </Label>
                  <InputLong type="text" name="club" />
                </InputBlock>
              </ClubInfo>
              <Submit type="button" onClick={handleSignup}>
                회원가입
              </Submit>
            </>
          )}
        </InputInfo>

        {page === 3 && (
          <Modal>
            <ModalTitle>가입 신청이 완료되었습니다!</ModalTitle>
            <ModalDetail>승인은 3일 이내에 완료되며, 그 후 서비스 이용이 가능합니다.</ModalDetail>
            <ModalBtnDiv>
              <ModalBtn onClick={handleExplore}>
                <img src={exploreBtn} alt="탐험하기" /> 탐험하기
              </ModalBtn>
              <ModalBtn2 onClick={handleLogin}>로그인</ModalBtn2>
            </ModalBtnDiv>
          </Modal>
        )}
      </Content>
    </>
  );
}

export default Signup;
