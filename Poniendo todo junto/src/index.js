import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PersonCard from "./PersonCard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
    <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
    <PersonCard
      lastName="Fillmore"
      firstName="Millard"
      age={50}
      hairColor="Brown"
    />
    <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Brown" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
