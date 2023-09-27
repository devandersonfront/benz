import styled from "@emotion/styled";
import React from "react";
import Router from "router";

function App() {
  return (
    <Main>
      <Router />
    </Main>
  );
}

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default App;
