import styled from "styled-components";
import palette from "../lib/colorPalette";
import dropdown from "../img/dropdown.png";
import DatePicker from "react-datepicker";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 856px;
  background-color: #6d6d79;
  border-radius: 24px;
  padding: 0px 70px;
  margin-top: 32px;
`;

export const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 128px;
`;

export const Minibox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2f1fa;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  transition: transform 0.3s ease-in-out; /* 부드러운 회전 효과 */
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Text = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

export const Text2 = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 34px;
  text-align: start;
`;

export const Text3 = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
`;

export const ExpandableContent = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  color: ${palette.white};
  margin-bottom: 32px;
`;

export const Contents = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const Sequence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-right: 50px;
`;

export const Number = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

export const Article = styled.div``;

export const Inputbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 371px;
  height: 30px;
  font-size: 12px;
  border: 1px solid #c5c5c9;
  border-radius: 6px;
  padding-left: 10px;
  margin-left: 80px;
  background-color: transparent; /* 배경색 투명 */
  color: #c5c5c9;
  outline: none; /* 클릭 시 테두리 제거 */
  caret-color: #c5c5c9; /* 커서 색상 */

  &::placeholder {
    color: #c5c5c9; /* 플레이스홀더 색상 */
  }

  &:focus {
    border-color: #c5c5c9; /* 클릭 시 테두리 색상 유지 */
    box-shadow: none; /* 클릭 시 생기는 외곽선 제거 */
  }
`;

export const CheckboxDouble = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-between;
  padding: 5px 0px 10px 0px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 480px;
  margin-left: 67px;
  justify-content: space-between;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  input[type="checkbox"] {
    appearance: none; /* 기본 체크박스 스타일 제거 */
    width: 18px; /* 체크박스 크기 */
    height: 18px; /* 체크박스 크기 */
    border: 1px solid #c5c5c9; /* 테두리 색상 (하얀색) */
    border-radius: 50%; /* 원형으로 만듦 */
    background-color: transparent; /* 배경 투명 */
    cursor: pointer; /* 클릭 가능한 마우스 포인터 */
    margin: 0px 10px 0px 0px;

    /* 체크 시 스타일 */
    &:checked {
      background-color: #ffffff; /* 배경색 하얀색 */
      position: relative;
    }

    /* 체크표시 모양 
    &:checked::before {
      content: "✔"; /
      color: #6d6d79; 
      font-size: 12px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }  */
  }

  label {
    color: #c5c5c9; /* 라벨 텍스트 색상 */
    font-size: 15px;
    font-weight: 300;
    cursor: pointer; /* 체크박스와 동일한 클릭 포인터 */
    margin-bottom: 3px;
  }
`;

export const Dropdown = styled.select`
  width: 192px;
  height: 30px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  color: #c5c5c9; /* 텍스트 색상 */
  border: 1px solid #c5c5c9; /* 테두리 색상 */
  border-radius: 6px; /* 둥근 모서리 */
  background-color: transparent; /* 배경 투명 */
  padding: 0 10px; /* 텍스트와 테두리 간격 */
  appearance: none; /* 기본 화살표 제거 */
  outline: none; /* 포커스 시 외곽선 제거 */
  cursor: pointer; /* 마우스 포인터 */
  margin-left: 80px;

  /* 드롭다운 화살표 커스텀 */
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;

  /* 드롭다운 옵션 스타일 */
  option {
    color: #c5c5c9; /* 옵션 텍스트 색상 */
    background: #6d6d79; /* 옵션 배경 */
  }

  /* 드롭다운 클릭했을 때 */
  & option:checked {
    background-color: #4b4b4b;
    color: #ffffff;
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 80px;
`;

export const DateGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  justify-content: end;
  gap: 20px;
`;

// DatePicker 스타일
export const CustomDatePicker = styled(DatePicker)`
  width: 192px; /* 드롭다운과 비슷한 너비 */
  height: 30px; /* 드롭다운과 비슷한 높이 */
  font-size: 14px; /* 글씨 크기 */
  color: #c5c5c9; /* 글씨 색상 */
  border: 1px solid #c5c5c9; /* 테두리 색상 */
  border-radius: 6px; /* 둥근 모서리 */
  background-color: transparent; /* 배경 투명 */
  padding: 0 10px; /* 텍스트와 테두리 간격 */
  appearance: none; /* 기본 스타일 제거 */
  outline: none; /* 클릭 시 외곽선 제거 */
  cursor: pointer; /* 마우스 포인터 */

  &::placeholder {
    color: #c5c5c9; /* 플레이스홀더 색상 */
  }
`;

export const UploadContainer = styled.div`
  width: 996px;
  max-width: 996px;
  height: 444px;
  background-color: #606575;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-top: 32px;
  overflow: hidden; /* 내부 컨텐츠를 상자 안에 유지 */

  &:hover {
    background-color: #515666;
  }
`;

export const Button = styled.button`
  width: 179px;
  height: 48px;
  margin-top: 40px;
  background-color: ${palette.blue};
  color: ${palette.bluetext};
  border: none;
  border-radius: 4px;
  padding: 8px 16px 11px 16px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  position: relative; /* 버튼을 프리뷰 위에 표시 */
  z-index: 2;

  &:hover {
    background-color: #061635;
  }
`;

export const ImagePreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* 스크롤 가능 */

  img {
    width: 200px;
    height: 200px;
    border-radius: 18px;
    object-fit: cover;
  }
`;

export const PlaceholderText = styled.div`
  display: ${(props) => (props.isHidden ? "none" : "block")};
  color: ${palette.white};
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  font-family: "DM Sans";
  z-index: 1;
`;

export const Submission = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 170px 0px 90px 0px;
  gap: 20px;
`;

export const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 55px;
  border: 2px solid ${palette.orange};
  border-radius: 8px;
  background-color: ${palette.orange};
  cursor: pointer;
  color: ${palette.orangetext};
  font-size: 18px;

  &:hover {
  }
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 55px;
  border: 2px solid ${palette.orangetext};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  color: ${palette.orangetext};
  font-size: 18px;

  &:hover {
  }
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;
`;

export const Title = styled.div`
  width: 996px;
  height: 60px;
  border-bottom: 1px solid #9d9da6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Write = styled.input`
  width: 95%;
  height: 100%;
  font-size: 44px;
  border: none;
  padding-left: 10px;
  background-color: transparent; /* 배경색 투명 */
  color: ${palette.white};
  outline: none; /* 클릭 시 테두리 제거 */
  font-weight: 300;

  &::placeholder {
    color: ${palette.white}; /* 플레이스홀더 색상 */
    font-weight: 300;
  }

  &:focus {
    box-shadow: none; /* 클릭 시 생기는 외곽선 제거 */
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 280px;
  font-size: 24px;
  border: none;
  padding-left: 10px;
  background-color: transparent; /* 배경색 투명 */
  color: ${palette.white};
  outline: none; /* 클릭 시 테두리 제거 */
  font-weight: 300;
  resize: none; /* 크기 조절 비활성화 */
  font-family: "DM Sans";
  margin-top: 50px;

  scrollbar-width: thin; /* 스크롤바 너비 (auto, thin, none) */
  scrollbar-color: #555 #2d2d2d; /* 슬라이더 색상과 트랙 색상 */

  &::placeholder {
    color: ${palette.white}; /* 플레이스홀더 색상 */
    font-weight: 300;
  }

  &:focus {
    box-shadow: none; /* 클릭 시 생기는 외곽선 제거 */
  }
`;

export const Limit = styled.div`
  color: #cccccc;
  font-family: "DM Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 10%;
`;

export const WeekSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const WeekButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #c5c5c9;
  background-color: ${(props) => (props.selected ? "#4b4b4b" : "transparent")};
  color: ${(props) => (props.selected ? "#ffffff" : "#c5c5c9")};
  cursor: pointer;

  &:hover {
    background-color: #6d6d79;
    color: #ffffff;
  }
`;

export const TimeRange = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input[type="range"] {
    width: 300px;
    margin: 5px;
  }
  div {
    margin-top: 10px;
    color: #c5c5c9;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c5c5c9;
  cursor: pointer;

  input {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #c5c5c9;
    border-radius: 50%;
    background-color: transparent;

    &:checked {
      background-color: #ffffff;
    }
  }
`;
