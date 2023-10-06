import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BaseButton } from "components/Button/Atom";
import { BaseModal } from "components/Modal/Atom";
import ModalPortal from "components/ModalPortal";
import { icons } from "modules/icons";
import { useEffect, useState } from "react";
import { colors } from "style/theme";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Receptions() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageValue, setMessageValue] = useState("");

  useEffect(() => {
    console.log("meesageis", messageValue);
  });

  return (
    <>
      <BaseButton>
        신규 접수 <icons.Plus_Icon />
      </BaseButton>

      <BaseButton additionalCSS={blueBtnCSS} onClick={() => setIsMessageOpen(true)}>
        메세지 전송 <icons.Email_Icon />
      </BaseButton>

      <ModalPortal>
        <BaseModal isOpen={isMessageOpen} onClose={() => setIsMessageOpen(false)}>
          <MessageModalContentWrapper>
            <MessageModalHeader>
              <h2>메세지 전송</h2>

              <div className="options">
                <div className="icon-box" onClick={() => setIsMessageOpen(false)}>
                  <icons.Close_Icon />
                </div>
              </div>
            </MessageModalHeader>

            <MessageModalTextEditor value={messageValue} onChange={setMessageValue} />
          </MessageModalContentWrapper>
        </BaseModal>
      </ModalPortal>
    </>
  );
}

const blueBtnCSS = css`
  width: 107px;
  height: 40px;
  background-color: ${colors.pointColorLightblue};
`;

const MessageModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MessageModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    color: #eef0f4;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 700;
    word-wrap: break-word;
  }

  & .options {
    & .icon-box {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

const MessageModalTextEditor = styled(Quill)``;

export default Receptions;
