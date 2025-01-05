import React from "react";
import "../styles/teamCard.css";

interface TeamCardProps {
  team: string;
  score: number;
  sets: number;
  logo: string;
  incrementScore: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, score, sets, logo, incrementScore }) => {
  return (
    <div className="teamCard">
      <img src={logo} alt={`Logo do Time ${team}`} className="teamLogo" />
      <h2>Time {team}</h2>
      <p>Sets Vencidos: {sets}</p>
      <p>Pontuação: {score}</p>
      <button onClick={incrementScore}>+1 Ponto</button>
    </div>
  );
};

export default TeamCard;
