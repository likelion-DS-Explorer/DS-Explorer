import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paper from "../img/pencil_writing.png";
import pencil from "../img/pencil.png";
import expantion from "../img/expantion.png";
import * as I from "../styles/InputStyle";
import "react-datepicker/dist/react-datepicker.css";

function ClubInfo() {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [timeRange, setTimeRange] = useState([12, 17]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState("");

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

  const handleTimeChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    const newRange = [...timeRange];
    const index = e.target.name === "startTime" ? 0 : 1;
    newRange[index] = newValue;
    if (newRange[0] <= newRange[1]) setTimeRange(newRange);
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 80) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content || !category || !contact || selectedDays.length === 0) {
      alert("모든 필수 정보를 입력해주세요.");
      return;
    }

    const formData = {
      code: "lion",
      category,
      frequency: "more",
      days: selectedDays,
      start_time: `${timeRange[0]}:00:00`,
      end_time: `${timeRange[1]}:00:00`,
      location: "교내",
      fee_type: "yearly",
      fee: 50000,
      content,
      image_urls: images,
      contact,
    };

    try {
      const response = await axios.post("http://localhost:8000/clubs/", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("동아리 정보가 성공적으로 등록되었습니다!");
      console.log(response.data);
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록에 실패했습니다. 다시 시도해주세요.");
    }
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
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>동아리 상세 탐험 작성 가이드</I.Text>
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
            <I.Text2>· 공개 범위: 모집 공고는 DS Explorer 웹에 회원가입한 덕성여대 학생들에게만 공개됩니다.</I.Text2>
            <I.Text2>
              · 등록 및 수정: 등록한 콘텐츠는 활동이 종료되기 전까지 언제든 수정 가능합니다. 수정은 게시물 수정 페이지에서 확인 및 진행할 수 있습니다. 내용을
              모두 작성한 후 등록 버튼을 눌러 게시해 주세요.
            </I.Text2>
            <I.Text2>
              · 작성 유의사항: 동아리 활동 및 특성을 자세히 소개해 주세요. 사진 및 필수 정보 입력을 통해 동아리의 주요 정보를 전달할 수 있습니다. 동아리 모집
              공고는 별도의 '모집 공고' 페이지에서 작성 가능합니다.
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
              <I.Text2 style={{ fontSize: "13px" }}>동아리 상세 탐험에 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.</I.Text2>
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
                <I.Number style={{ marginBottom: "332px" }}>02</I.Number>
                <I.Number style={{ marginBottom: "105px" }}>03</I.Number>
                <I.Number style={{ marginBottom: "160px" }}>04</I.Number>
                <I.Number style={{ marginBottom: "80px" }}>05</I.Number>
              </I.Sequence>
              <I.Article>
                <I.Inputbox>
                  <I.Text style={{ fontSize: "20px" }}>동아리 기본정보</I.Text>
                  <I.Group>
                    <I.Text3>동아리명</I.Text3>
                    <I.Input type="text" placeholder="입력해주세요" style={{ width: "177px" }} />
                  </I.Group>
                  <I.Group>
                    <I.Text3>카테고리</I.Text3>
                    <I.Dropdown>
                      <option value="">선택해주세요</option>
                      <option value="music">공연·음악</option>
                      <option value="sports">스포츠·레저</option>
                      <option value="study">학술·탐구</option>
                      <option value="art">예술·창작</option>
                      <option value="it">IT</option>
                      <option value="Religion">종교</option>
                      <option value="feminism">젠더·페미니즘</option>
                      <option value="Volunteer">사회 봉사</option>
                      <option value="tradition">문화·전통</option>
                      <option value="other">기타</option>
                    </I.Dropdown>
                  </I.Group>
                </I.Inputbox>
                <I.Inputbox style={{ marginTop: "50px" }}>
                  <I.Text style={{ fontSize: "20px" }}>활동빈도 및 시간설정</I.Text>
                  <I.Group>
                    <I.Text3>활동빈도</I.Text3>
                    <I.Dropdown>
                      <option value="">선택해주세요</option>
                      <option value="1">유동적 (일정에 따라)</option>
                      <option value="2">월 1 회</option>
                      <option value="3">격주 1 회</option>
                      <option value="4">주 1 회</option>
                      <option value="5">주 2 회 이상</option>
                    </I.Dropdown>
                  </I.Group>
                  <I.Group>
                    <I.Text3>요일설정</I.Text3>
                    <I.CheckboxDouble>
                      <I.CheckboxGroup style={{ width: "600px", marginLeft: "80px" }}>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="mon" />
                          <label htmlFor="mon">월</label>
                        </I.Checkbox>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="tue" />
                          <label htmlFor="tue">화</label>
                        </I.Checkbox>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="wed" />
                          <label htmlFor="wed">수</label>
                        </I.Checkbox>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="thu" />
                          <label htmlFor="thu">목</label>
                        </I.Checkbox>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="fri" />
                          <label htmlFor="fri">금</label>
                        </I.Checkbox>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="sat" />
                          <label htmlFor="sat">토</label>
                        </I.Checkbox>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="sun" />
                          <label htmlFor="sun">일</label>
                        </I.Checkbox>
                      </I.CheckboxGroup>
                      <I.CheckboxGroup style={{ width: "600px", marginLeft: "80px" }}>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="none" />
                          <label htmlFor="none">해당없음</label>
                        </I.Checkbox>
                      </I.CheckboxGroup>
                    </I.CheckboxDouble>
                  </I.Group>
                  <I.Group>
                    <I.Text3>시간설정</I.Text3>
                    <I.CheckboxDouble>
                      <I.TimeRange>
                        <input type="range" min="0" max="24" value={timeRange[0]} name="startTime" onChange={handleTimeChange} />
                        <input type="range" min="0" max="24" value={timeRange[1]} name="endTime" onChange={handleTimeChange} />
                        <div>
                          {timeRange[0]}:00 - {timeRange[1]}:00
                        </div>
                      </I.TimeRange>
                      <I.CheckboxGroup style={{ width: "600px", marginLeft: "80px" }}>
                        <I.Checkbox>
                          <I.Input type="checkbox" id="none" />
                          <label htmlFor="none">해당없음</label>
                        </I.Checkbox>
                      </I.CheckboxGroup>
                    </I.CheckboxDouble>
                  </I.Group>
                </I.Inputbox>
                <I.Inputbox style={{ marginTop: "50px" }}>
                  <I.Text style={{ fontSize: "20px" }}>활동장소</I.Text>
                  <I.Group>
                    <I.Text3>활동장소</I.Text3>
                    <I.CheckboxGroup style={{ width: "265px", marginLeft: "80px" }}>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="in" />
                        <label htmlFor="in">교내</label>
                      </I.Checkbox>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="out" />
                        <label htmlFor="out">외부 :</label>
                        <I.Input2 type="text" />
                      </I.Checkbox>
                    </I.CheckboxGroup>
                  </I.Group>
                </I.Inputbox>
                <I.Inputbox style={{ marginTop: "50px" }}>
                  <I.Text style={{ fontSize: "20px" }}>회비정보</I.Text>
                  <I.Group>
                    <I.Text3>회비유형</I.Text3>
                    <I.CheckboxGroup style={{ width: "505px", marginLeft: "80px" }}>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="in" />
                        <label htmlFor="in">연간</label>
                      </I.Checkbox>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="out" />
                        <label htmlFor="out">월간</label>
                      </I.Checkbox>
                      <I.Checkbox>
                        <I.Input type="checkbox" id="out" />
                        <label htmlFor="out">1회 납부(특정 활동이나 이벤트에만 필요한 경우)</label>
                      </I.Checkbox>
                    </I.CheckboxGroup>
                  </I.Group>
                  <I.Group>
                    <I.Text3>금액입력</I.Text3>
                    <I.Input2 type="text" style={{ height: "25px", marginLeft: "80px" }} />
                    <div style={{ fontSize: "15px", fontWeight: "300", color: "#c9c9c9" }}>원(숫자만 입력 가능)</div>
                  </I.Group>
                </I.Inputbox>
                <I.Inputbox style={{ marginTop: "50px" }}>
                  <I.Text style={{ fontSize: "20px" }}>문의사항</I.Text>
                  <I.Group>
                    <I.Text3>연락처/링크</I.Text3>
                    <I.Input type="text" placeholder="입력해주세요" style={{ width: "177px" }} />
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
          <input type="file" id="fileInput" style={{ display: "none" }} multiple accept="image/*" onChange={handleFileInputChange} />
          <I.ImagePreview>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Uploaded preview ${index}`} />
            ))}
          </I.ImagePreview>
        </I.UploadContainer>
        <I.Button onClick={() => document.getElementById("fileInput").click()}>사진 추가하기</I.Button>

        {/* 제목 입력 */}
        <I.WriteBox>
          <I.Title>
            <I.Write type="text" placeholder="제목을 입력해주세요." value={title} onChange={handleTitleChange} />
            <I.Limit>{title.length}/80</I.Limit>
          </I.Title>
          <I.Textarea placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
        </I.WriteBox>
        <I.Submission style={{ margin: "70px" }}>
          <I.CancelButton>삭제</I.CancelButton>
          <I.SubmitButton onClick={handleSubmit}>등록</I.SubmitButton>
        </I.Submission>
      </I.Main>
      <Footer />
    </>
  );
}

export default ClubInfo;
