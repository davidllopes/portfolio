import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./scss/style.scss";
import ReactGA from "react-ga4";
const TRACKING_ID = "G-KT28THRTH3";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function sendToAnalytics({ id, name, value }) {
    ReactGA.ga("send", "event", {
        eventCategory: "Web Vitals",
        eventAction: name,
        eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
        eventLabel: id, // id unique to current page load
        nonInteraction: true, // avoids affecting bounce rate
    });
}

reportWebVitals(sendToAnalytics);
