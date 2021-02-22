import React from "react";
import "./Score.scss";

interface Props {
  score: number | undefined;
}

const Score: React.FC<Props> = ({ score }) => {
  return (
    <div className="score">
      <div /> {score}
    </div>
  );
};

export default Score;
