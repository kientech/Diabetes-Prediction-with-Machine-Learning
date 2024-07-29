import React from "react";
import { HiChatAlt2 } from "react-icons/hi";

const Result = ({ result }) => {
  return (
    <div className="flex gap-5">
      <div className="w-full h-[200px] bg-red-200 rounded-lg">
        <h1 className="font-bold text-md p-4">Prediction</h1>
        {result && result === "Not Diabetes" ? (
          <h2 className="text-center font-bold text-green-800">{result}</h2>
        ) : (
          <h2 className="text-center font-bold text-red-500">{result}</h2>
        )}
      </div>
      <div className="w-full h-[200px] bg-green-200 rounded-lg"></div>
    </div>
  );
};

export default Result;
