import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paper from "../img/pencil_writing.png";
import pencil from "../img/pencil.png";
import expantion from "../img/expantion.png";
import * as I from "../styles/InputStyle";
import "react-datepicker/dist/react-datepicker.css";

function NewsReport_Edit({ match }) {
  const newsId = match.params.news_id; // URL에서 뉴스 ID 가져오기

  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [participation, setParticipation] = useState(false);
  const [completion, setCompletion] = useState(false);
  const newsType = "News_to_come"; // 수정된 뉴스 타입
  const clubCode = "lion"; // 고정된 값 예시

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

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 80) {
      setTitle(e.target.value);
    }
  };

  const handleUpdate = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("news_type", newsType);
    formData.append("club_code", clubCode);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("participation", participation);
    formData.append("completion", completion);

    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    try {
      const response = await axios.put(`http://localhost:8000/news/${newsId}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("활동 기록 수정 성공:", response.data);
      alert("활동 기록 수정에 성공했습니다!");
    } catch (error) {
      console.error("활동 기록 수정 실패:", error);
      alert("활동 기록 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/news/${newsId}/`);
      console.log("활동 기록 삭제 성공:", response.data);
      alert("활동 기록 삭제에 성공했습니다!");
    } catch (error) {
      console.error("활동 기록 삭제 실패:", error);
      alert("활동 기록 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <I.Main>
        {/* 활동기록 작성 가이드 */}
        <I.Box>
          <I.BoxHeader>
            <I.Minibox>
              <I.Icon>
                <I.Img src={paper} alt="아이콘" style={{ margin: "0px 0px 4px 4px" }} />
              </I.Icon>
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>활동기록 수정/삭제 가이드</I.Text>
              <I.Text2 style={{ fontSize: "13px" }}>활동기록 수정/삭제 시 참고해주세요.</I.Text2>
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
            <I.Text2>· 공개 범위: 활동기록은 모든 사람에게 공개되며, 누구나 열람할 수 있습니다. 수정 시 이 점을 고려해 주세요.</I.Text2>
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
                <I.Input type="checkbox" id="participation" checked={participation} onChange={() => setParticipation(!participation)} />
                <label htmlFor="participation">참여 가능</label>
              </I.Checkbox>
              <I.Checkbox>
                <I.Input type="checkbox" id="completion" checked={completion} onChange={() => setCompletion(!completion)} />
                <label htmlFor="completion">완료 활동</label>
              </I.Checkbox>
            </I.CheckboxGroup>
          </I.Group>
        </I.Box>

        {/* 드래그 앤 드롭 및 버튼 */}
        <I.UploadContainer onDragOver={handleDragOver} onDrop={handleDrop}>
          <I.PlaceholderText isHidden={images.length > 0}>드래그 앤 드롭이나 추가하기 버튼으로 사진을 업로드 해주세요.</I.PlaceholderText>
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
      </I.Main>

      <I.Submission style={{ margin: "70px" }}>
        <I.CancelButton onClick={handleDelete}>삭제</I.CancelButton>
        <I.SubmitButton onClick={handleUpdate}>수정</I.SubmitButton>
      </I.Submission>
      <Footer />
    </>
  );
}

export default NewsReport_Edit;
