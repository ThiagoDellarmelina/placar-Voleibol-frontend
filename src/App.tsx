import React from "react";
import Header from "./components/header";
import ScoreBoard from "./components/scoreBoard";
import Sponsors from "./components/sponsors";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Sponsors />
      <ScoreBoard />
    </div>
  );
};

export default App;
