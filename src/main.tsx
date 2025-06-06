import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";
import { store } from "./app/Store";
import { Provider } from "react-redux";
import { HeroUIProvider } from "@heroui/system";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </HeroUIProvider>
  </StrictMode>
);
