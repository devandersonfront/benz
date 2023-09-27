import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";

interface Props {
  notifier?: (ischecked: boolean) => any;
}

function BaseCheckbox({ notifier }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const onClick = () => {
    const updateState = !isChecked;
    setIsChecked(updateState);
    notifier && notifier(updateState);
  };

  return (
    <CheckboxWrapper>
      <CheckLabel
        htmlFor="user-remember"
        onClick={onClick}
        isChecked={isChecked}
      />
      <Checkbox type="checkbox" name="user-remember" />
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  position: relative;
`;
const Checkbox = styled.input`
  appearance: none;
`;
const CheckLabel = styled.label<{ isChecked: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #7d8fa9;
  border-radius: 10%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  ${({ isChecked }) =>
    isChecked &&
    css`
      &::after {
        content: "✔";
        width: 30px;
        height: 30px;
        font-size: 20px;
        text-align: center;
      }
    `}
`;

export default BaseCheckbox;
