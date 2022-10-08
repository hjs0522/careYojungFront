import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import Header from "./components/Header";
import Mappage from "./pages/Mappage";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { Loader, Segment, Dimmer, Image } from "semantic-ui-react";
import Compare from "./pages/Compare";
import PhotoEx from "./pages/PhotoEx";
import Information from "./pages/Information";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>);
