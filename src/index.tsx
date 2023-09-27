import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "provider/ThemeProvider";
import Global from "style/Global";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <Global />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
