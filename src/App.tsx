import React from "react";
import { Router } from "react-router-dom";
import { History } from "history";
import { Routes } from "./Routes";

interface IProps {
  history: History;
}

const App: React.FC<IProps> = (props: IProps) => {
  return (
    <Router history={props.history}>
      <Routes />
    </Router>
  );
};

export default App;
