import React from "react";

interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }) => {
  return <div>Score: {score}</div>;
};

export default Score;
