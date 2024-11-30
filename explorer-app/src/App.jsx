import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Rocket from "./pages/Rocket";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import AffiliatedClubs from "./pages/AffiliatedClubs";
import Apply from "./pages/Apply";
import EditPost from "./pages/EditPost";
import Clubs from "./pages/Clubs";
import ClubDetail from "./pages/ClubDetail";
import Recruit from "./pages/Recruit";
import Recruitment from "./pages/Recruitment";
import RecruitDetail from "./pages/RecruitDetail";
import News from "./pages/News";
import NewsReport from "./pages/NewsReport";
import NewsDetail from "./pages/NewsDetail";
import ClubsInfo from "./pages/ClubsInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Rocket />} />
        <Route exact path="/users/login/" element={<Login />} />
        <Route exact path="/users/register/" element={<Register />} />
        <Route exact path="/users/profile/<str:student_id>/" element={<Profile />} />
        <Route exact path="/users/profile/<str:student_id>/profileEdit" element={<ProfileEdit />} /> /* 프로필 수정 */
        <Route exact path="/users/profile/<str:student_id>/affiliated-clubs/" element={<AffiliatedClubs />} />
        <Route exact path="/users/profile/<str:student_id>/apply/" element={<Apply />} />
        <Route exact path="/users/profile/<str:student_id>/editpost/" element={<EditPost />} />
        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="clubs/<int:club_id>" element={<ClubDetail />} />
        <Route exact path="/clubsinfo" element={<ClubsInfo />} /> /* 동아리 소개 작성 */
        <Route exact path="/recruit/" element={<Recruit />} />
        <Route exact path="/recruit/recuritment" element={<Recruitment />} /> /* 모집공고작성 */
        <Route exact path="/recruit/<int:recruit_id>/" element={<RecruitDetail />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/newsreport" element={<NewsReport />} /> /* 활동 소식 작성 */
        <Route exact path="/news/<int:news_id>/" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
