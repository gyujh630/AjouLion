import React from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from "react-router-dom";

const StyledMyPage = styled.div`
  text-align: center;
`;

const SubNavigation = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 10px 0;
  max-width: 100vw;
  overflow-x: auto;
  list-style-type: none;
`;

const SubNavigationItem = styled(NavLink)`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  margin-right: 10px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
  list-style-type: none;
  text-decoration: none;
  color: #333;

  &.active {
    border-color: #007bff;
  }
`;

const MyPage = () => {
  return (
    <StyledMyPage>
      <header>
        <h1>My Page</h1>
      </header>
      <main>
        <SubNavigation>
          <li>
            <SubNavigationItem
              to="/mypage/application"
              activeClassName="active"
            >
              수혜 신청 목록
            </SubNavigationItem>
          </li>
          <li>
            <SubNavigationItem to="/mypage/donation" activeClassName="active">
              기부 목록
            </SubNavigationItem>
          </li>
          <li>
            <SubNavigationItem to="/mypage/device" activeClassName="active">
              등록된 기기
            </SubNavigationItem>
          </li>
          <li>
            <SubNavigationItem to="/mypage/profile" activeClassName="active">
              내 정보
            </SubNavigationItem>
          </li>
        </SubNavigation>
        <Routes>
          <Route path="/mypage/application" element={<Application />} />
          <Route path="/mypage/donation" element={<Donation />} />
          <Route path="/mypage/device" element={<Device />} />
          <Route path="/mypage/profile" element={<Profile />} />
        </Routes>
      </main>
    </StyledMyPage>
  );
};

const Application = () => <div>수혜 신청 목록 내용</div>;
const Donation = () => <div>기부 목록 내용</div>;
const Device = () => <div>등록된 기기 내용</div>;
const Profile = () => <div>내 정보 내용</div>;

export default MyPage;
