import React from "react";
import ReactDOM from "react-dom";
import PostList from "./components/PostList";
// import "./main.js";
// import "./keys.json";
import "./styles.css";
// import {locData} from './main.js';





function App() {
  return (
    <div className="App">
      {/* <PostList locData={locData}/> */}
      <h2>Hello World !</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);