import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import mainLogo from "../img/main_logo.png";
import Search from "../img/searchicon.png";

const Container = styled.div`
  background-color: ${palette.background};
  width: 100%;
  height: 120px;
  box-shadow: 0px 2px 10px #3989c6;
`;

const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85vw;
  margin: 0 auto;
`;

const Default = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85vw;
  margin: 0 auto;
  justify-content: space-between;
`;

const Img = styled.img``;

const Nav = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5vw;
  justify-content: space-between;
  margin-right: 25vw;
`;

const Navbar = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
`;

const Button = styled.div`
  color: ${palette.white};
  font-family: "DM Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 10px 12px;
  border-radius: 20px;
  width: 50px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #2b397c;
  border-radius: 8px;
  padding: 8px 12px;
  width: 300px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: #2b397c;
  font-size: 16px;
  padding: 4px;

  &::placeholder {
    color: #2b397c;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #2b397c;
  display: flex;
  align-items: center;
`;

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("검색어:", searchTerm);
    // 실제 검색 기능을 추가하려면 여기에서 API 호출 등을 수행
  };

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="검색어를 입력하세요" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <SearchButton onClick={handleSearch}>
        <Img src={Search} alt="검색아이콘" />
      </SearchButton>
    </SearchContainer>
  );
}

function Header({ type, isLoggedIn, setIsLoggedIn  }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/users/login/");
  };

  return (
    <Container>
      {type === "home" && (
        <Home>
          <Img src={mainLogo} alt="동아리탐험대" onClick={() => handleNavigation("/")}/>
          <Nav>
            <Navbar onClick={() => handleNavigation("/recruit")}>모집 공고</Navbar>
            <Navbar onClick={() => handleNavigation("/news")}>활동 소식</Navbar>
            <Navbar onClick={() => handleNavigation("/users/profile/:student_id/")}>마이페이지</Navbar>
          </Nav>
          {isLoggedIn ? (
            <Button onClick={handleLogout} style={{ backgroundColor: "#1B253E", marginRight: "24px" }}>
              로그아웃
            </Button>
          ) : (
            <>
              <Button onClick={() => handleNavigation("/users/login/")} style={{ backgroundColor: "#1B253E", marginRight: "24px" }}>
                로그인
              </Button>
              <Button onClick={() => handleNavigation("/users/register/")} isOutline>
                회원가입
              </Button>
            </>
          )}
        </Home>
      )}
      {type === "default" && (
        <Default>
          <Img src={mainLogo} alt="동아리탐험대" />
          <Nav style={{ width: "23vw", margin: "0", justifyContent: "space-evenly" }}>
            <Navbar onClick={() => handleNavigation("/recruit")}>모집 공고</Navbar>
            <Navbar onClick={() => handleNavigation("/news")}>활동 소식</Navbar>
            <Navbar onClick={() => handleNavigation("/users/profile/:student_id/")}>마이페이지</Navbar>
          </Nav>
          {isLoggedIn ? (
            <Button onClick={handleLogout} style={{ backgroundColor: "#1B253E", marginRight: "24px" }}>
              로그아웃
            </Button>
          ) : (
            <>
              <Button onClick={() => handleNavigation("/users/login/")} style={{ backgroundColor: "#1B253E", marginRight: "24px" }}>
                로그인
              </Button>
              <Button onClick={() => handleNavigation("/users/register/")} isOutline>
                회원가입
              </Button>
            </>
          )}
        </Default>
      )}
    </Container>
  );
}

export default Header;
