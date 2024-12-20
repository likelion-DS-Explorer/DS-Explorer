import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

// 폰트 스타일 적용
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vw;
  font-family: 'DMSansBlack', sans-serif; /* 폰트 적용 */
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
  flex: 1 1 calc(33.333% - 24px);
  min-width: 200px;
  margin-bottom: 32px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 13px;
`;

const Input = styled.input`
  width: 266px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #006FEE;
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
  border-radius: 8px;
  color: #F5A524;
  font-size: 16px;
  font-weight: bold;
  background-color: #F5A52420;
  font-family: 'DMSansBlack', sans-serif; 

  &:hover {
    background-color: #F5A52470;
    cursor: pointer; 
  }
`;

function ProfileEdit() {
  return (
    <>
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
