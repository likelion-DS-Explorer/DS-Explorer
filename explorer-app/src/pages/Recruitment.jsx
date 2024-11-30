import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paper from "../img/pencil_writing.png";
import pencil from "../img/pencil.png";
import expantion from "../img/expantion.png";
import * as I from "../styles/InputStyle";
import "react-datepicker/dist/react-datepicker.css";

function Recruitment() {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [images, setImages] = useState([]);

  // 날짜 관련 상태
  const [startDate1, setStartDate1] = useState(null);
  const [startDate2, setStartDate2] = useState(null);
  const [startDate3, setStartDate3] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  return (
    <>
      <Header type="default" />
      <I.Main>
        {/* 모집공고 작성 가이드 */}
        <I.Box>
          <I.BoxHeader>
            <I.Minibox>
              <I.Icon>
                <I.Img src={paper} alt="아이콘" style={{ margin: "0px 0px 4px 4px" }} />
              </I.Icon>
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>모집공고 작성 가이드</I.Text>
              <I.Text2
                style={{
                  fontSize: "13px",
                }}
              >
                원활한 모집공고 발행을 위해 아래 내용을 확인해 주세요.
              </I.Text2>
            </I.Minibox>
            <I.Img
              src={expantion}
              alt="확장아이콘"
              isExpanded={isGuideExpanded}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              onClick={() => setIsGuideExpanded(!isGuideExpanded)}
            />
          </I.BoxHeader>
          <I.ExpandableContent isVisible={isGuideExpanded}>
            <I.Text2>- 공개 범위: 모집 공고는 DS Explorer 웹에 회원가입한 덕성여대 학생들에게만 공개됩니다.</I.Text2>
            <I.Text2>
              ● 등록 및 수정: 모집 공고는 모집 마감 전까지 언제든 수정 가능합니다. 수정은 게시물 수정 페이지에서 진행해 주세요. 모집 공고가 완성되면 등록 버튼을
              눌러 게시해 주세요.
            </I.Text2>
            <I.Text2>
              ● 게시물 작성 제한: 모집공고 페이지에서는 필수 정보 입력과 모집공고 사진 업로드만 가능합니다. 동아리 관련 글 작성은 상세 동아리 탐험 등록
              페이지에서 진행해 주세요.
            </I.Text2>
          </I.ExpandableContent>
        </I.Box>

        {/* 필수 정보 입력 */}
        <I.Box>
          <I.BoxHeader>
            <I.Minibox>
              <I.Icon>
                <I.Img src={pencil} alt="아이콘" />
              </I.Icon>
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>필수 정보 입력</I.Text>
              <I.Text2 style={{ fontSize: "13px" }}>모집 공고에 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.</I.Text2>
            </I.Minibox>
            <I.Img
              src={expantion}
              alt="확장아이콘"
              isExpanded={isInputExpanded}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              onClick={() => setIsInputExpanded(!isInputExpanded)}
            />
          </I.BoxHeader>
          <I.ExpandableContent isVisible={isInputExpanded}>
            <I.Contents>
              <I.Sequence>
                <I.Number style={{ marginBottom: "160px" }}>01</I.Number>
                <I.Number style={{ marginBottom: "265px" }}>02</I.Number>
                <I.Number>03</I.Number>
              </I.Sequence>
              <I.Article>
                <I.Inputbox>
                  <I.Text style={{ fontSize: "20px" }}>동아리 활동정보</I.Text>
                  <I.Group>
                    <I.Text3>활동분야</I.Text3>
                    <I.Input type="text" placeholder="반점(,)으로 구분해 입력해 주세요. 예) 창립/자기개발, 연합, 스터디/연구" />
                  </I.Group>
                  <I.Group>
                    <I.Text3>활동스타일</I.Text3>
                    <I.CheckboxGroup>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="project" />
                        <label htmlFor="project">프로젝트 및 대외 활동</label>
                      </I.Checkbox>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="study" />
                        <label htmlFor="study">학습 및 연구</label>
                      </I.Checkbox>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="networking" />
                        <label htmlFor="networking">친목 및 네트워킹</label>
                      </I.Checkbox>
                    </I.CheckboxGroup>
                  </I.Group>
                </I.Inputbox>
                <I.Inputbox style={{ marginTop: "50px" }}>
                  <I.Text style={{ fontSize: "20px" }}>지원 및 진행 일정</I.Text>
                  <I.Group>
                    <I.Text3>지원방법</I.Text3>
                    <I.Dropdown>
                      <option value="">선택해주세요</option>
                      <option value="online">온라인 신청</option>
                      <option value="email">이메일 접수</option>
                      <option value="offline">오프라인 신청</option>
                    </I.Dropdown>
                  </I.Group>
                  <I.Group>
                    <I.Text3>지원절차</I.Text3>
                    <I.Dropdown>
                      <option value="">선택해주세요</option>
                      <option value="documents">서류 전형</option>
                      <option value="mix">서류 및 면접 전형</option>
                      <option value="interview">면접 전형</option>
                      <option value="none">별도 전형 없음</option>
                    </I.Dropdown>
                  </I.Group>
                  <I.Group>
                    <I.Text3>모집기간</I.Text3>
                    <I.DatePickerContainer>
                      <I.DatePickerWrapper>
                        <I.Text2 style={{ color: "#c5c5c9" }}>서류</I.Text2>
                        <I.CustomDatePicker
                          selected={startDate1}
                          onChange={(date) => setStartDate1(date)}
                          dateFormat="yyyy/MM/dd"
                          placeholderText="YYYY/MM/DD"
                        />
                      </I.DatePickerWrapper>
                      <I.DatePickerWrapper>
                        <I.Text2 style={{ color: "#c5c5c9" }}>면접</I.Text2>
                        <I.CustomDatePicker
                          selected={startDate2}
                          onChange={(date) => setStartDate2(date)}
                          dateFormat="yyyy/MM/dd"
                          placeholderText="YYYY/MM/DD"
                        />
                      </I.DatePickerWrapper>
                    </I.DatePickerContainer>
                  </I.Group>
                  <I.Group>
                    <I.Text3>결과발표</I.Text3>
                    <I.DatePickerContainer>
                      <I.Text2 style={{ color: "#c5c5c9" }}>결과</I.Text2>
                      <I.CustomDatePicker selected={startDate3} onChange={(date) => setStartDate3(date)} dateFormat="yyyy/MM/dd" placeholderText="YYYY/MM/DD" />
                    </I.DatePickerContainer>
                  </I.Group>
                </I.Inputbox>
                <I.Inputbox style={{ marginTop: "50px" }}>
                  <I.Text style={{ fontSize: "20px" }}>문의사항</I.Text>
                  <I.Group>
                    <I.Text3>연락처/링크</I.Text3>
                    <I.Input type="text" placeholder="입력해주세요" style={{ width: "192px" }} />
                  </I.Group>
                </I.Inputbox>
              </I.Article>
            </I.Contents>
          </I.ExpandableContent>
        </I.Box>

        {/* 드래그 앤 드롭 및 버튼 */}
        <I.UploadContainer onDragOver={handleDragOver} onDrop={handleDrop}>
          <I.PlaceholderText isHidden={images.length > 0}>
            드래그 앤 드롭이나 추가하기 버튼으로
            <br />
            사진을 업로드 해주세요.
          </I.PlaceholderText>
          <I.Button onClick={() => document.getElementById("fileInput").click()}>사진 추가하기</I.Button>
          <input type="file" id="fileInput" style={{ display: "none" }} multiple accept="image/*" onChange={handleFileInputChange} />
          <I.ImagePreview>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Uploaded preview ${index}`} />
            ))}
          </I.ImagePreview>
        </I.UploadContainer>
      </I.Main>
      <I.Submission>
        <I.SubmitButton>등록</I.SubmitButton>
        <I.SubmitButton>삭제</I.SubmitButton>
      </I.Submission>
      <Footer />
    </>
  );
}

export default Recruitment;
