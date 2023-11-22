import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./styles/index.scss";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";

import { App } from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
