import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header";
import Footer from "../components/Footer";
import palette from "../lib/colorPalette";
import ClubItem from "../components/ClubItem/ClubItem";
import performanceMusic from "../img/music.png";
import sportsLeisure from "../img/sports.png";
import academicResearch from "../img/academic.png";
import artCreation from "../img/art.png";
import it from "../img/IT.png";
import religion from "../img/religion.png";
import genderFeminism from "../img/gender.png";
import socialService from "../img/communityService.png";
import cultureTradition from "../img/culture.png";
import rocket from "../img/rocket.png";
import miniLogo1 from "../img/mini_logo1.png";
import miniLogo2 from "../img/mini_logo2.png";
import miniLogo3 from "../img/mini_logo3.png";
import backgroundImage from "../img/stars_bg.png";
import animation from "../img/Animation.webm";
import back1 from "../img/back1.png";
import back2 from "../img/back2.png";
import back3 from "../img/back3.png";
import back4 from "../img/back4.png";
import back5 from "../img/back5.png";
import back6 from "../img/back6.png";
import back7 from "../img/back7.png";

const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  height: 904px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 8vw;
  & > :last-child {
    align-self: center; /* 마지막 자식 요소(Button)에만 적용 */
  }
`;

const Text = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${palette.orangetext};
  background-color: ${palette.orange};
  border: 2px solid ${palette.orangetext};
  width: 282px;
  height: 48px;
  border-radius: 5px;
  margin: 0;
  padding: 0;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 200px;
  right: 100px;
  width: 40%;
  height: 60%;
  object-fit: cover;
  z-index: 1; /* 뒤로 보내기 */
`;

const OverlayContainer = styled.div`
  z-index: 2;
`;

const OverlayImage = styled.img`
  position: absolute;
`;

const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 610px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 470px;
  background-color: #767c8b;
  border-radius: 30px;
  box-shadow: 30px 30px 30px rgba(114, 173, 217, 0.16); /* X, Y, Blur, Color */
  backdrop-filter: blur(60px); /* 배경 흐림 효과 */
  -webkit-backdrop-filter: blur(60px); /* 크롬, 사파리 호환 */
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 60px;
`;

const Minibox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px 60px 40px;
  justify-content: space-evenly;
`;

const Line = styled.div`
  width: 5px;
  height: 280px;
  background-color: #a9aeb7;
  margin: 0;
  padding: 0;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1312px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: contain;
  padding: 0 13vw;
`;

function Main() {
  const navigate = useNavigate(); // Initialize useNavigate

  const clubs = [
    { image: performanceMusic, category: "공연·음악", subcategory: "솔바람 | SoulLy | 운향 | 운현극예술 연구회 |\n 카들레아 | F.O.R.K | P.I.C.E. | M.O.D.s" },
    { image: sportsLeisure, category: "스포츠·레저", subcategory: "운산 | FC Flora | 하이클리어 |\n BEAUTIFLY | Win Hands Down" },
    { image: academicResearch, category: "학술·탐구", subcategory: "ISSUE" },
    { image: artCreation, category: "예술·창작", subcategory: "열음 | 예운 | 운지문학회 | 한빛 | 필름소피 | 두들링" },
    { image: it, category: "IT", subcategory: "멋쟁이 사자처럼" },
    { image: religion, category: "종교", subcategory: "덕불 | 데레사 | CCC" },
    { image: genderFeminism, category: "젠더·페미니즘", subcategory: "RADIUS | FM419 | 자세히생각하라 | 이오" },
    { image: socialService, category: "사회 봉사", subcategory: "덕성로타트랙 | KUSA | 도담도담 | 덕냥당" },
    { image: cultureTradition, category: "문화·전통", subcategory: "꽃신을 신고" },
  ];

  return (
    <>
      <Section1>
        <Left>
          <Text style={{ fontSize: "40px", fontWeight: "700", marginBottom: "70px" }}>덕성의 동아리, 쉽고 빠르게 탐험하다</Text>
          <Text style={{ fontSize: "70px", fontWeight: "700", marginBottom: "90px" }}>DS Explorer</Text>
          <Button onClick={() => navigate("/clubs")}>
            <Img src={rocket} alt="로켓이미지" style={{ width: "33px", height: "24px" }} />
            탐험하기
          </Button>
        </Left>
        <Right>
          <VideoBackground autoPlay muted loop>
            <source src={animation} type="video/webm" />
          </VideoBackground>
          <OverlayContainer>
            <OverlayImage src={back1} alt="back1" style={{ top: "107px", right: "285px" }} />
            <OverlayImage src={back2} alt="back2" style={{ top: "184px", right: "120px" }} />
            <OverlayImage src={back3} alt="back3" style={{ top: "317px", right: "200px" }} />
            <OverlayImage src={back4} alt="back4" style={{ top: "217px", right: "30px" }} />
            <OverlayImage src={back5} alt="back5" style={{ top: "373px", right: "60px" }} />
            <OverlayImage src={back6} alt="back6" style={{ top: "512px", right: "150px" }} />
            <OverlayImage src={back7} alt="back7" style={{ top: "765px", right: "260px" }} />
          </OverlayContainer>
        </Right>
      </Section1>
      <Section2>
        <Box>
          <Text style={{ fontSize: "40px", fontWeight: "700", marginBottom: "50px" }}>우주를 탐험하듯 동아리를 탐험하세요!</Text>
          <Contents>
            <Minibox>
              <Text style={{ display: "flex", alignItems: "center", fontWeight: "700", fontSize: "20px" }}>
                <Img src={miniLogo1} alt="작은아이콘1" /> 동아리 탐험을
              </Text>
              <Text style={{ fontWeight: "300", fontSize: "20", textAlign: "start" }}>
                다양한 카테고리로 분류된 동아리를 손쉽게 찾아보세요. 예술, 스포츠, IT 등 원하는 분야의 동아리를 빠르고 간편하게 탐색할 수 있어요.
              </Text>
            </Minibox>
            <Line />
            <Minibox style={{ margin: "0px 30px" }}>
              <Text style={{ display: "flex", alignItems: "center", fontWeight: "700", fontSize: "20px" }}>
                <Img src={miniLogo2} alt="작은아이콘2" style={{ marginRight: "30px" }} /> 한눈에
              </Text>
              <Text style={{ fontWeight: "300", fontSize: "20", textAlign: "start" }}>
                각 동아리의 모집 정보와 활동 소식이 구조화된 형태로 제공돼요. 여러 동아리를 한눈에 비교하고, 나에게 딱 맞는 동아리를 선택할 수 있어요.
              </Text>
            </Minibox>
            <Line />
            <Minibox>
              <Text style={{ display: "flex", alignItems: "center", fontWeight: "700", fontSize: "20px" }}>
                <Img src={miniLogo3} alt="작은아이콘3" style={{ marginRight: "20px" }} /> 한 곳에서
              </Text>
              <Text style={{ fontWeight: "300", fontSize: "20", textAlign: "start" }}>
                마이페이지에서 스크랩한 모집 공고와 관심 있는 동아리 정보를 한 곳에서 편리하게 확인할 수 있어요. 필요한 정보에 언제든지 쉽게 접근할 수 있어요.
              </Text>
            </Minibox>
          </Contents>
        </Box>
      </Section2>
      <Section3>
        <Text style={{ display: "flex", width: "100%", fontWeight: "700", fontSize: "40px", marginBottom: "30px" }}>
          무한한 가능성의 우주로 떠날 준비 되셨나요?
        </Text>
        <Text style={{ display: "flex", width: "100%", fontWeight: "300", fontSize: "16px", marginBottom: "50px" }}>
          9개 분야에서 여러분의 관심사와 꿈을 펼칠 수 있는 동아리가 기다리고 있어요. 새로운 도전과 배움을 경험하며, 즐거움과 성장을 기대해요!
        </Text>
        <div className="main-page">
          <div className="club-grid">
            {clubs.map((club, index) => (
              <ClubItem key={index} image={club.image} category={club.category} subcategory={club.subcategory} />
            ))}
          </div>
        </div>
      </Section3>
      <Footer />
    </>
  );
}

export default Main;
