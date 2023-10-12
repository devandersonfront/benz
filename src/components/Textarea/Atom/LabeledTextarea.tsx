import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { LabelHTMLAttributes, TextareaHTMLAttributes } from "react";

type Attributes = LabelHTMLAttributes<HTMLLabelElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface Props extends Attributes {
  labelText: string;
  additionalCSS?: SerializedStyles;
  notifier?: (value: string, ...args: any) => any;
}

function LabeledTextarea(props: Props) {
  return (
    <InputBox additionalCSS={props.additionalCSS}>
      <Label htmlFor={props.htmlFor}>{props.labelText}</Label>
      <Textarea
        placeholder={props.placeholder}
        id={props.htmlFor}
        onChange={(e) => {
          props.notifier && props.notifier(e.target.value);
        }}
      />
    </InputBox>
  );
}

const InputBox = styled.div<{ additionalCSS?: SerializedStyles }>`
  ${({ additionalCSS }) => additionalCSS && additionalCSS}
`;
const Label = styled.label`
  color: #eef0f4;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 88px;
  resize: none;

  padding: 12px 10px 12px 20px;

  background: #3b4758;
  border-radius: 6px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  border: none;

  position: relative;

  color: #bac4d1;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;

  &:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: #7d8fa9;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;
    word-wrap: break-word;
  }
`;

export default LabeledTextarea;
