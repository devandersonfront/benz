import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Auth from "pages/auth";
import Dashboard from "pages/dashboard";
import ProtedctedRoute from "components/Router/ProtedctedRoute";
import { useCheckAuth } from "utils/checkAuth";
import styled from "@emotion/styled";
import Aside from "components/Layout/Aside";
import Header from "components/Layout/Header";

function Index() {
  useLocation();
  const auth = useCheckAuth();

  return (
    <Routes>
      <Route element={<Layout auth={auth} />}>
        <Route
          path="/"
          element={
            <ProtedctedRoute redirectCondition={auth} redirectPath="/dashboard">
              <Auth />
            </ProtedctedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtedctedRoute redirectCondition={!auth} redirectPath="/">
              <Dashboard />
            </ProtedctedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

const Layout = ({ auth }: { auth: boolean }) => {
  return (
    <Main>
      {!auth ? (
        <Outlet />
      ) : (
        <Container>
          <Aside />

          <ContentSection>
            <Header />

            <ContentBox>
              <Outlet />
            </ContentBox>
          </ContentSection>
        </Container>
      )}
    </Main>
  );
};

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Container = styled.div`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 20px 23px;
  display: flex;
  gap: 17px;
`;

const ContentSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Index;
