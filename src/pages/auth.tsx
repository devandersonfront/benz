import styled from "@emotion/styled";
import { ReactComponent as LightLogo } from "images/svg/Light_logo.svg";
import { colors } from "style/theme";
import BaseCheckbox from "components/Checkbox/Atom/BaseCheckbox";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { authTokenAtom } from "recoil/authAtom";
import { API, authEnum } from "config/auth";
import errorBoundary from "utils/errorBoundary";
import axios from "instance/axios";
import { useNavigate } from "react-router-dom";
import { LabeledInput } from "components/Input/Atom";

function Auth() {
  const [isRemember, setIsRemember] = useState(false);
  const formData = useRef<Map<string, any>>(new Map());
  const setRecoilAuthToken = useSetRecoilState(authTokenAtom);
  const navigate = useNavigate();

  const authFetcher = async () => {
    const response = await axios.get<AuthTokenResponse>(API.auth);
    const token = response.data.data.token;
    isRemember ? localStorage.setItem(authEnum.authToken, token) : setRecoilAuthToken(token);
  };

  const onSignIn = async () => {
    const emailValue = formData.current.get("email");
    const passwordValue = formData.current.get("password");
    const validate = emailValue && passwordValue;

    if (validate) {
      await errorBoundary(authFetcher).then(() => {
        navigate("/dashboard");
      });
    } else {
      alert("please enter email, password");
    }
  };

  return (
    <Container>
      <LogoBox>
        <LightLogo />
      </LogoBox>

      <SignInSection>
        <Authentication_title>Sign In</Authentication_title>

        <AuthForm onSubmit={(e) => e.preventDefault()}>
          <LabeledInput
            htmlFor="email-input"
            labelText="Email"
            placeholder="email@address.com"
            notifier={(value) => {
              formData.current?.set("email", value);
            }}
          />

          <LabeledInput
            htmlFor="password-input"
            labelText="Password"
            placeholder="Password"
            notifier={(value) => {
              formData.current?.set("password", value);
            }}
          />
        </AuthForm>

        <OptionBox>
          <CheckAndRadio>
            <BaseCheckbox notifier={(ischecked) => setIsRemember(ischecked)} />
            <CheckxboxText>Remember me</CheckxboxText>
          </CheckAndRadio>

          <ForgotPass>Forgot password?</ForgotPass>
        </OptionBox>

        <ButtonBox>
          <Button onClick={onSignIn}>Sign in</Button>
        </ButtonBox>

        <SigunUpBox>
          <SignUpText>Don't have an account?</SignUpText>
          <SignUpAnchor>Create new</SignUpAnchor>
        </SigunUpBox>
      </SignInSection>

      <Ellipse />
    </Container>
  );
}

interface AuthTokenResponse {
  data: {
    token: string;
  };
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${colors.pointColorGray};
`;

const LogoBox = styled.div`
  position: absolute;
  top: 38px;
  left: 36px;
  z-index: var(--zIndex-0st);
`;

const Ellipse = styled.div`
  width: 3000px;
  height: 1200px;
  background: ${colors.indigo};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 70%;
  border: 1px black solid;
  position: absolute;
  transform: translateY(-75%);
`;

const SignInSection = styled.section`
  width: 432px;
  height: fit-content;
  background-color: ${colors.indigo};
  z-index: var(--zIndex-1st);
  color: ${colors.white};

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: 0px 4px 20px rgba(6.82, 6.02, 18.06, 0.1);
  border-radius: 12px;

  transform: translateY(40px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Authentication_title = styled.h2`
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
`;

const AuthForm = styled.form`
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputBox = styled.div``;
const Label = styled.label`
  color: #eef0f4;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;

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

  ::-webkit-input-placeholder {
    color: #bac4d1;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;
    word-wrap: break-word;
  }
`;

const OptionBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

const CheckAndRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckxboxText = styled.span`
  color: #eef0f4;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
`;

const ForgotPass = styled.a`
  color: #319dff;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 40px;
`;
const Button = styled.button`
  width: 100%;
  height: 100%;

  background-color: #0077e4;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
`;

const SigunUpBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 3px;
  padding: 12px 0;
  justify-content: center;
`;
const SignUpText = styled.p`
  color: #dde1e8;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
`;
const SignUpAnchor = styled.a`
  color: #319dff;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
`;

export default Auth;
