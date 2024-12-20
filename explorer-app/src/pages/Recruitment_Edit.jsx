import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paper from "../img/pencil_writing.png";
import pencil from "../img/pencil.png";
import expantion from "../img/expantion.png";
import * as I from "../styles/InputStyle";
import "react-datepicker/dist/react-datepicker.css";

function Recruitment_Edit() {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 80) {
      setTitle(e.target.value);
    }
  };

  // API 연동 - 모집공고 수정
  const handleUpdate = async (postId) => {
    if (!title || !content || !startDate1 || !startDate2) {
      alert("필수 정보를 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("category", "updatedCategory");
    formData.append("style", "updatedStyle");
    formData.append("frequency", "updatedFrequency");
    formData.append("days", "updatedDays");
    formData.append("start_time", "09:00:00");
    formData.append("end_time", "18:00:00");
    formData.append("location", "updatedLocation");
    formData.append("fee_type", "updatedFeeType");
    formData.append("fee", 100);
    formData.append("apply_method", "updatedApplyMethod");
    formData.append("apply_process", "updatedApplyProcess");
    formData.append("start_doc", startDate1.toISOString().split("T")[0]);
    formData.append("end_doc", startDate2.toISOString().split("T")[0]);
    formData.append("start_interview", startDate1.toISOString().split("T")[0]);
    formData.append("end_interview", startDate2.toISOString().split("T")[0]);
    formData.append("recruit_result", startDate3 ? startDate3.toISOString().split("T")[0] : "");
    formData.append("title", title);
    formData.append("content", content);
    formData.append("is_temp", false);

    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    try {
      const response = await axios.patch(`http://localhost:3000/recruit/${postId}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("모집공고 수정 성공:", response.data);
      alert("모집공고가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <I.Main>
        {/* 모집공고 작성 가이드 */}
        <I.Box>
          <I.BoxHeader>
            <I.Minibox>
              <I.Icon>
                <I.Img src={paper} alt="아이콘" style={{ margin: "0px 0px 4px 4px" }} />
              </I.Icon>
              <I.Text style={{ marginLeft: "20px", marginRight: "10px" }}>모집공고 작성 가이드</I.Text>
              <I.Text2 style={{ fontSize: "13px" }}>원활한 모집공고 발행을 위해 아래 내용을 확인해 주세요.</I.Text2>
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
          </I.BoxHeader>
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
      </I.Main>

      <I.Submission style={{ margin: "70px" }}>
        <I.SubmitButton onClick={() => handleUpdate(123)}>수정</I.SubmitButton>
      </I.Submission>
      <Footer />
    </>
  );
}

export default Recruitment_Edit;
