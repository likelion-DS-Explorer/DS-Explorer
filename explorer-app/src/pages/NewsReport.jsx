import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paper from "../img/pencil_writing.png";
import pencil from "../img/pencil.png";
import expantion from "../img/expantion.png";
import * as I from "../styles/InputStyle";
import "react-datepicker/dist/react-datepicker.css";

function NewsReport() {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  // 제목 입력 핸들러
  const handleTitleChange = (e) => {
    if (e.target.value.length <= 80) {
      setTitle(e.target.value);
    }
  };

  return (
    <>
      <Header type="default" />
      <I.Main>
        {/* 활동기록 작성 가이드 */}
        <I.Box>
          <I.BoxHeader>
            <I.Minibox>
              <I.Icon>
                <I.Img src={paper} alt="아이콘" style={{ margin: "0px 0px 4px 4px" }} />
              </I.Icon>
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>활동기록 작성 가이드</I.Text>
              <I.Text2
                style={{
                  fontSize: "13px",
                }}
              >
                활동기록 작성 시 참고해주세요.
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
            <I.Text2>● 공개 범위: 활동기록은 모든 사람에게 공개되며, 누구나 열람할 수 있습니다. 작성 시 이 점을 고려해 주세요.</I.Text2>
            <I.Text2>
              ● 기록의 내용: 활동의 목적과 과정, 참여자들의 후기, 현장 사진 등을 포함해 주세요. 다른 학생들이 동아리 활동의 생생한 분위기를 느낄 수 있도록
              구체적으로 작성해 주세요.
            </I.Text2>
            <I.Text2>
              ● 사진 및 미디어 사용: 이미지 첨부 시 jpg, png 포맷을 지원하며, 파일 크기는 최대 20MB까지 업로드할 수 있습니다. 영상 추가가 필요할 경우, YouTube나
              네이버 TV 링크를 삽입해 주세요.
            </I.Text2>
            <I.Text2>
              ● 등록 및 수정: 활동기록은 언제든 수정 가능합니다. 수정은 게시물 수정 페이지에서 진행해 주세요. 활동 기록이 완성되면 등록 버튼을 눌러 게시해
              주세요.
            </I.Text2>
            <I.Text2>
              ● 주의 사항: 사용한 이미지나 영상은 타인의 권리를 침해하지 않도록 주의해 주세요. 상업적 홍보, 부적절한 표현이 포함된 콘텐츠는 게시가 제한될 수
              있습니다.
            </I.Text2>
          </I.ExpandableContent>
        </I.Box>

        {/* 일반 정보 선택 */}
        <I.Box style={{ justifyContent: "column" }}>
          <I.BoxHeader>
            <I.Minibox>
              <I.Icon>
                <I.Img src={pencil} alt="아이콘" />
              </I.Icon>
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>필수 정보 입력</I.Text>
              <I.Text2 style={{ fontSize: "13px" }}>모집 공고에 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.</I.Text2>
            </I.Minibox>
          </I.BoxHeader>
          <I.Group style={{ margin: "0px 0px 30px 0px" }}>
            <I.CheckboxGroup>
              <I.Checkbox>
                <I.Input type="checkbox" id="project" />
                <label htmlFor="project">참여 가능</label>
              </I.Checkbox>
              <I.Checkbox>
                <I.Input type="checkbox" id="study" />
                <label htmlFor="study">완료 활동</label>
              </I.Checkbox>
            </I.CheckboxGroup>
          </I.Group>
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

        {/* 제목 입력 */}
        <I.WriteBox>
          <I.Title>
            <I.Write type="text" placeholder="제목을 입력해주세요." value={title} onChange={handleTitleChange} />
            <I.Limit>{title.length}/80</I.Limit>
          </I.Title>
          <I.Textarea placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
        </I.WriteBox>
      </I.Main>

      <I.Submission style={{ margin: "70px" }}>
        <I.SubmitButton>등록</I.SubmitButton>
        <I.SubmitButton>삭제</I.SubmitButton>
      </I.Submission>
      <Footer />
    </>
  );
}

export default NewsReport;
