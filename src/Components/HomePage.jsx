"use client";

import { useState } from "react";

export default function HomePage() {
  const [inputData, setinputData] = useState("Nothing is here");
  const [boldOutputData, setBoldOutputData] = useState([]);
  const [normalOutputData, setNormalOutputData] = useState([]);
  const [joinedOutputData, setJoinedOutputData] = useState([])

  function enableBionicReading() {
    let bold = [];
    let normal = [];
    inputData.split(" ").map((e) => {
      bold.push(e.slice(0, Math.round(e.length / 2)));
      normal.push(e.slice(Math.round(e.length / 2)));
    });
    console.log(bold, normal);

    setBoldOutputData(bold);
    setNormalOutputData(normal);
  }

  

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-8">
      <textarea
        className="border-2 rounded-xl p-4 focus:outline-none bg-gray-100"
        name=""
        id=""
        cols="90"
        rows="10"
        placeholder="Paste/Write the text..."
        // onChange={(e) => {
        //   setinputData(e.target.value);
        // }}
      ></textarea>
      <button
        className="px-8 py-4 rounded bg-black text-white
      "
        onClick={enableBionicReading}
      >
        Do the Magik
      </button>

      <div>
        {boldOutputData.map((bold) => (
          <b key={bold}>{bold}</b>
        ))}
      </div>
    </div>
  );
}
