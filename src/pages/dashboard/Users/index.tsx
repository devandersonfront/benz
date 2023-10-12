import styled from "@emotion/styled";
import { BaseButton } from "components/Button/Atom";
import { BasePagination as Pagenation } from "components/Pagination/Atom";
import { BaseTable } from "components/Table/Atom";
import { colors } from "style/theme";
import { icons } from "modules/icons";
import { css } from "@emotion/react";
import { useState } from "react";

import RegisterModal from "./RegisterModal";
import UsersTable from "./UsersTable";

function Users() {
  const orderFilterList = [5, 10, 15];
  const [orders, setOrders] = useState(orderFilterList[0]);
  const [orderFilterOpen, setOrderFilterOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <Container>
      <RegisterBtnBox>
        <BaseButton onClick={() => setIsRegisterOpen(true)}>
          신규 등록 <icons.Plus_Icon />
        </BaseButton>
      </RegisterBtnBox>

      <FilterBox>
        <BaseButton additionalCSS={DisplayFilterBtnCSS} onClick={() => setOrderFilterOpen((prev) => !prev)}>
          <p>
            Display <span>{orders} orders</span>
          </p>
          <icons.Arrowdown_Icon />

          <OrderDropdown isOpen={orderFilterOpen} onClick={(e) => e.stopPropagation()}>
            {orderFilterList.map((list) => (
              <OrderList key={list}>{list} orders</OrderList>
            ))}
          </OrderDropdown>
        </BaseButton>

        <SearchBox>
          <icons.Search_Icon />
          <SearchInput placeholder="Search here..." />
        </SearchBox>
      </FilterBox>

      <TableBox>
        <UsersTable />
      </TableBox>

      <PaginationBox>
        <Pagenation
          totalData={38}
          countPerPage={5}
          notifier={(currentPage) => {
            console.log("현재 페이지가 뭔지 알려드립니다", currentPage);
          }}
        />
      </PaginationBox>

      <RegisterModal isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: auto;
  background-color: ${colors.indigo};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const RegisterBtnBox = styled.div`
  margin-top: 24px;
  padding: 0 24px;
`;
const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 24px;
`;
const DisplayFilterBtnCSS = css`
  background-color: ${colors.pointColorGray};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;

  & p {
    & span {
      color: #eef0f4;
      font-size: 14px;
      font-family: Roboto;
      font-weight: 700;
      word-wrap: break-word;
    }
  }
`;

const OrderDropdown = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: auto;
  left: 0;
  top: 110%;
  z-index: var(--zIndex-1st);
  background-color: ${colors.pointColorGray};
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  visibility: hidden;
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.2s ease-in;
  transform-origin: top;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
      transform: scaleY(1);
    `}
`;
const OrderList = styled.li`
  width: 100%;
  height: auto;
  display: flex;
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

const TableBox = styled.div`
  margin-top: 20px;
`;

const PaginationBox = styled.div`
  margin: 24px 0;
`;

export default Users;
