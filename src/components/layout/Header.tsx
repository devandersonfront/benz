import styled from "@emotion/styled";
import React from "react";
import { colors } from "style/theme";
import { icons } from "modules/icons";

function Index() {
  return (
    <Header>
      <MenuSearchWrapper>
        <MenuBox>
          <icons.Hamburger_Icon />
        </MenuBox>
        <SearchBox>
          <icons.Search_Icon />
          <SearchInput placeholder="Search here..." />
        </SearchBox>
      </MenuSearchWrapper>

      <OptionBox></OptionBox>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${colors.indigo};
  padding: 20px 24px;
  box-shadow: 0px 4px 20px rgba(6.82, 6.02, 18.06, 0.1);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
const MenuSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const MenuBox = styled.div`
  cursor: pointer;
`;
const SearchBox = styled.div`
  width: 240px;
  height: 40px;
  padding: 10px;
  background: #3b4758;
  color: #bac4d1;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background: #3b4758;
  color: #bac4d1;
  border: none;

  &::-webkit-input-placeholder {
    color: #bac4d1;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;
    word-wrap: break-word;
  }
`;
const OptionBox = styled.div``;

export default Index;
