import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import ScrapAnnouncementItem from '../components/MyPage/ScrapAnnouncementItem';
import FavoriteClubItem from '../components/MyPage/FavoriteClubItem';
import '../styles/Profile.css';
import profileImage from '../img/mypage_profile.png';
import profileSetting from '../img/profileSetting.png';
import applyIcon from '../img/applyIcon.png';
import belongIcon from '../img/belongIcon.png';
import recruitIcon from '../img/recruitIcon.png';
import newsIcon from '../img/newsIcon.png';
import clubIcon from '../img/clubIcon.png';
import scrapIcon from '../img/scrapIcon.png';
import clubHeartIcon from '../img/clubHeartIcon.png';

function Profile() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // 예제 데이터
  const placeholderScrapAnnouncements = [
    { image: 'https://via.placeholder.com/150', clubName: '동아리 A', announcementTitle: '모집 공고 A' },
    { image: 'https://via.placeholder.com/150', clubName: '동아리 B', announcementTitle: '모집 공고 B' },
  ];

  const placeholderFavoriteClubs = [
    { image: 'https://via.placeholder.com/150', clubName: '동아리 C', description: '이 동아리는 ...' },
    { image: 'https://via.placeholder.com/150', clubName: '동아리 D', description: '이 동아리는 ...' },
  ];

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData && storedUserData !== "undefined") {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
        setUserData(null);
      }
    } else {
      navigate("/users/login"); // 로그인 페이지로 이동
    }
  }, [navigate]);

  if (!userData) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <div className="mypage">
        <div className="profile-box">
          <img src={profileSetting} alt="설정" className="profile-settings" onClick={() => navigate(`/users/profile/:student_id/profileEdit`)} />
          <img src={profileImage} alt="프로필" className="profile-image" />
          <h2 className="profile-name">{userData.name || "이름 없음"}</h2>
          <p className="profile-info">{userData.student_id}</p>
          <p className="profile-info">{userData.major}</p>
          <div className="profile-stats">
            <div className="stat-item" onClick={() => navigate(`/users/profile/${userData.student_id}/apply/`)}>
              <img src={applyIcon} alt="지원 동아리" className="stat-icon" />
              <span className="stat-title">지원 동아리</span>
            </div>
            <div className="stat-item" onClick={() => navigate(`/users/profile/${userData.student_id}/affiliated-clubs/`)}>
              <img src={belongIcon} alt="소속 동아리" className="stat-icon" />
              <span className="stat-title">소속 동아리</span>
            </div>
          </div>
          <div className="register-buttons">
            <button className="register-post-button" onClick={() => setPopupVisible(!isPopupVisible)}>작성하기</button>
            <button className="edit-post-button" onClick={() => navigate(`/users/profile/${userData.student_id}/editpost/`)}>수정하기</button>
          </div>
          <div className={`register-popup ${isPopupVisible ? 'visible' : ''}`}>
            <div className="popup-item" onClick={() => navigate(`/recruit/recruitment`)}>
              <div className="popup-icon recruit"><img src={recruitIcon} alt="모집공고" /></div>
              <div className="popup-content">
                <h3>모집공고 등록</h3>
                <p>동아리 회원 모집 공고를 올려보세요.</p>
              </div>
            </div>
            <div className="popup-item" onClick={() => navigate(`/newsreport`)}>
              <div className="popup-icon activity"><img src={newsIcon} alt="활동소식" /></div>
              <div className="popup-content">
                <h3>활동소식 등록</h3>
                <p>동아리의 활동을 간단히 공유해보세요.</p>
              </div>
            </div>
            <div className="popup-item" onClick={() => navigate(`/clubsinfo`)}>
              <div className="popup-icon activity"><img src={clubIcon} alt="활동소식" /></div>
              <div className="popup-content">
                <h3>상세 동아리 탐험 등록</h3>
                <p>동아리의 상세 정보를 등록해보세요.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="section-container">
            <div className="section-header">
              <img src={scrapIcon} alt="스크랩 공고 아이콘" className="section-icon" />
              <h2 className="section-title">스크랩 공고</h2>
            </div>
            <div className="scroll-container">
              {placeholderScrapAnnouncements.map((item, index) => (
                <ScrapAnnouncementItem
                  key={index}
                  image={item.image}
                  clubName={item.clubName}
                  announcementTitle={item.announcementTitle}
                />
              ))}
            </div>
          </div>

          <div className="section-container">
            <div className="section-header">
              <img src={clubHeartIcon} alt="관심 동아리 아이콘" className="section-icon" />
              <h2 className="section-title">관심 동아리</h2>
            </div>
            <div className="scroll-container">
              {placeholderFavoriteClubs.map((item, index) => (
                <FavoriteClubItem
                  key={index}
                  image={item.image}
                  clubName={item.clubName}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
