import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "pages/auth";
import Dashboard from "pages/dashboard";
import ProtedctedRoute from "components/Router/ProtedctedRoute";
import { useCheckAuth } from "utils/checkAuth";

function Index() {
  useLocation();
  const auth = useCheckAuth();

  return (
    <Routes>
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
    </Routes>
  );
}

export default Index;
