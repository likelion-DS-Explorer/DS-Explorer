import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ClubItem from '../components/ClubItem/ClubItem';
import performanceMusic from '../img/music.png';
import sportsLeisure from '../img/sports.png';
import academicResearch from '../img/academic.png';
import artCreation from '../img/art.png';
import it from '../img/IT.png';
import religion from '../img/religion.png';
import genderFeminism from '../img/gender.png';
import socialService from '../img/communityService.png';
import cultureTradition from '../img/culture.png';

function Main() {
  const clubs = [
    { image: performanceMusic, category: '공연·음악', subcategory: '솔바람 | SoulLy | 운향 | 운현극예술 연구회 |\n 카들레아 | F.O.R.K | P.I.C.E. | M.O.D.s' },
    { image: sportsLeisure, category: '스포츠·레저', subcategory: '운산 | FC Flora | 하이클리어 |\n BEAUTIFLY | Win Hands Down' },
    { image: academicResearch, category: '학술·탐구', subcategory: 'ISSUE' },
    { image: artCreation, category: '예술·창작', subcategory: '열음 | 예운 | 운지문학회 | 한빛 | 필름소피 | 두들링' },
    { image: it, category: 'IT', subcategory: '멋쟁이 사자처럼' },
    { image: religion, category: '종교', subcategory: '덕불 | 데레사 | CCC' },
    { image: genderFeminism, category: '젠더·페미니즘', subcategory: 'RADIUS | FM419 | 자세히생각하라 | 이오' },
    { image: socialService, category: '사회 봉사', subcategory: '덕성로타트랙 | KUSA | 도담도담 | 덕냥당' },
    { image: cultureTradition, category: '문화·전통', subcategory: '꽃신을 신고' },
  ];

  return (
    <>
      <Header type="home" />
      <div className="main-page">
        <div className="club-grid">
          {clubs.map((club, index) => (
            <ClubItem
              key={index}
              image={club.image}
              category={club.category}
              subcategory={club.subcategory}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;