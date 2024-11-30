import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vw;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 0;
`;

const RecentEdit = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-top: 10px;
  color: #ffffff60;
`;

const EditInfo = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PersonalInfo = styled.div`
  width: 906px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 61px;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 calc(33.333% - 24px); /* 3개씩 배치되도록 너비 설정 (20px은 간격을 고려한 값) */
  min-width: 200px; /* 최소 너비를 설정하여 너무 좁아지지 않게 */
  margin-bottom: 32px; /* 아래쪽에 간격 추가 */
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #ffffff80;
  margin-bottom: 13px;
`;

const Input = styled.input`
  width: 266px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #4b67d850;
  background-color: #ffffff00;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  padding-left: 24px;
`;

const ClubInfo = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const LabelStrong = styled.span`
  font-weight: 600;
`;

const InputLong = styled(Input)`
  width: 906px;
`;

const Submit = styled.button`
  width: 179px;
  height: 48px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 17.58px;
  background-color: #5e89e2;
`;

function ProfileEdit() {
  return (
    <>
      <Header type="default" />
      <Content>
        <Title>회원정보</Title>
        <RecentEdit>최근 수정일 ~~</RecentEdit>
        <EditInfo>
          <PersonalInfo>
            <InputBlock>
              <Label htmlFor="name">이름</Label>
              <Input type="text" name="name" />
            </InputBlock>
            <InputBlock>
              <Label htmlFor="stdid">학번</Label>
              <Input type="text" name="stdid" />
            </InputBlock>
            <InputBlock>
              <Label htmlFor="major">학과</Label>
              <Input type="text" name="major" />
            </InputBlock>
            <InputBlock>
              <Label htmlFor="nickname">닉네임</Label>
              <Input type="text" name="nickname" />
            </InputBlock>
            <InputBlock>
              <Label htmlFor="phone">전화번호</Label>
              <Input type="phone" name="phone" />
            </InputBlock>
            <InputBlock>
              <Label htmlFor="email">이메일</Label>
              <Input type="email" name="email" />
            </InputBlock>
          </PersonalInfo>
          <ClubInfo>
            <InputBlock>
              <Label htmlFor="club">
                <LabelStrong>운영진이신가요?</LabelStrong> 운영진이라면 소속 동아리명을 작성해 주세요. 모집 공고와 활동 소식 작성 권한이 부여됩니다.
              </Label>
              <InputLong type="text" name="club" />
            </InputBlock>
          </ClubInfo>
          <Submit type="submit">회원정보 수정</Submit>
        </EditInfo>
      </Content>
    </>
  );
}

export default ProfileEdit;
