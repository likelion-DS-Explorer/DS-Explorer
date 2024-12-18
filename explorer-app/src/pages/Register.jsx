import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import exploreBtn from "../img/exploreBtn.png";
import backBtn from "../img/backBtn.png";

const Content = styled.div`
  font-family: 'DMSansMedium', sans-serif;
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

const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 461px;
  overflow-x: visible;
  margin-bottom: 70px;
`;

const Warning = styled.p`
  font-size: 13.45px;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  width: 600px;
  text-align: left;
  color: #F31260;
`;

const Warning2 = styled(Warning)`
  width: 390px;
`

const Comment = styled(Warning2)`
  color: #ffffff;
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
  border: 1px solid #0070F3;
  background-color: #ffffff00;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  padding-left: 24px;
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

const InputDiv = styled.div`
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 118px;
  height: 48px;
  border: none;
  border-radius: 4px;
  color: #F5A524;
  font-size: 16px;
  font-weight: bold;
  background-color: #F5A52420;
  margin-left: 29px;

   &:hover {
    background-color: #F5A52470;
    cursor: pointer; 
  }
`;

const Submit = styled(Button)`
  width: 216px;
  background-color: #F5A52400;
  border-radius: 8px;
  border: 2px solid #F5A524;
  margin: 0;
`;

const Back = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const BtnBlk = styled.div`
  width: 118px;
`

const ButtonName = styled.p`
  margin: 0;
`;

/* Modal */
const Modal = styled.div`
  background-color: #FFFFFF40;
  width: 1204px;
  height: 418px;
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
  display: flex;
`;

const ModalBtn = styled.button`
  width: 186px;
  height: 75px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #F5A524;
  background-color: #F5A52420;
  border: 2px solid #F5A524;
  align-text: center;
  align-items: center;
  display: flex;
  justify-content: center;

   &:hover {
    background-color: #F5A52470;
    cursor: pointer; 
  }
`;

const ModalBtn2 = styled(ModalBtn)`
  margin-left: 20px;
  background-color: #ffffff00;
`;

function Register(props) {
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(0);
  const [flag2, setFlag2] = useState(0);
  const navigate = useNavigate();

  const goToNextPage = () => {
    setPage(2);
  };

  const handleSignup = () => {
    setPage(3);
  };

  const handleExplore = () => {
    navigate("/"); // 탐험 페이지로 이동
  };

  const handleLogin = () => {
    navigate("/users/login"); // 로그인 페이지로 이동
  };

  const handleBackToPage1 = () => {
    setPage(1);
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
                <EmailDiv>
                  <Input1Div>
                  <Input1 type="email" name="email" />
                  <Button type="button">중복 확인하기</Button>
                  </Input1Div>
                  {flag === 1 && (<Warning>입력하신 이메일은 이미 계정에 연결되어 있습니다. 로그인하시거나 비밀번호를 재설정해 주세요.</Warning>)}
                  {flag === 2 && (<Comment>사용 가능한 계정입니다. </Comment>)}
                </EmailDiv>
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
            <InputDiv>
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
                  {flag2 === 1 && (<Warning2>이 닉네임은 이미 사용 중입니다. 다른 닉네임을 선택해 주세요.</Warning2>)}
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
              </InputDiv>
              <BtnDiv>
                <Back type="button" onClick={handleBackToPage1}>
                  <img src={backBtn} alt="이전" />
                  <ButtonName>이전</ButtonName>
                </Back>
                <Submit type="button" onClick={handleSignup}>
                  회원가입
                </Submit>
                <BtnBlk></BtnBlk>
              </BtnDiv>
              
            </>
          )}
        </InputInfo>

        {page === 3 && (
          <Modal>
            <ModalTitle>가입 신청이 완료되었습니다!</ModalTitle>
            <ModalDetail>승인은 3일 이내에 완료되며, 그 후 서비스 이용이 가능합니다.</ModalDetail>
            <ModalBtnDiv>
              <ModalBtn onClick={handleExplore}>
                <img src={exploreBtn} alt="탐험하기" /><ButtonName>탐험하기</ButtonName>
              </ModalBtn>
              <ModalBtn2 onClick={handleLogin}>로그인</ModalBtn2>
            </ModalBtnDiv>
          </Modal>
        )}
      </Content>
    </>
  );
}

export default Register;
