import React, { useState } from "react";
import axios from "axios";
import SideBar from "./components/SideBar";
import FormPrediction from "./components/FormPrediction";
import Healthy from "./components/Healthy";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState("");
  console.log("🚀 ~ App ~ result:", result);
  return (
    <div className="w-full min-h-screen mx-auto px-10 py-12 bg-[#EBEBEE] rounded-lg flex gap-12">
      <div className="w-[5%]">
        <SideBar />
      </div>
      <div className="w-[60%]">
        <FormPrediction setResult={setResult} />
      </div>
      <div className="w-[35%] gap-y-10 flex flex-col">
        <Healthy />
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;
