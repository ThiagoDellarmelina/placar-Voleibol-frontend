import React, { useState } from "react";
import TeamCard from "./teamCard";
import Timer from "./timer";
import "../styles/scoreBoard.css";

const ScoreBoard: React.FC = () => {
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);
  const [setsA, setSetsA] = useState<number>(0);
  const [setsB, setSetsB] = useState<number>(0);
  const [swapSides, setSwapSides] = useState<boolean>(false);
  const [resetTimer, setResetTimer] = useState<boolean>(false);

  const incrementScore = (team: "A" | "B") => {
    if (team === "A") setScoreA(scoreA + 1);
    if (team === "B") setScoreB(scoreB + 1);
  };

  const resetSet = () => {
    if (scoreA > scoreB) setSetsA(setsA + 1);
    if (scoreB > scoreA) setSetsB(setsB + 1);
    setScoreA(0);
    setScoreB(0);
    setResetTimer((prev) => !prev); // Alterna o estado para reiniciar o Timer
  };

  const resetGame = () => {
    setScoreA(0);
    setScoreB(0);
    setSetsA(0);
    setSetsB(0);
    setResetTimer((prev) => !prev); // Reinicia o Timer
  };

  return (
    <div className="scoreBoard">
      <div className="teams" style={{ flexDirection: swapSides ? "row-reverse" : "row" }}>
        <TeamCard team="A" score={scoreA} sets={setsA} logo="/teamA.png" incrementScore={() => incrementScore("A")} />
        <Timer reset={resetTimer} />
        <TeamCard team="B" score={scoreB} sets={setsB} logo="/teamB.png" incrementScore={() => incrementScore("B")} />
      </div>
      <div className="controls">
        <button onClick={resetSet}>Novo Set</button>
        <button onClick={resetGame}>Resetar Jogo</button>
        <button onClick={() => setSwapSides(!swapSides)}>Trocar Lados</button>
      </div>
    </div>
  );
};

export default ScoreBoard;
