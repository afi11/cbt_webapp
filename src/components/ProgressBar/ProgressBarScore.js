import React from "react";

export default function ProgressBarScore(props) {
  const { completed, max, score } = props;

  const percent = {
    width: `${completed}%`,
  };

  return (
    <div className="mt-3 w-full bg-gray-300 shadow">
      <div className="bg-purple-600 py-1 flex justify-center item-center" style={percent}>
        <span className="text-white font-semibold text-md">{`${score}/${max}`}</span>
      </div>
    </div>
  );
}
