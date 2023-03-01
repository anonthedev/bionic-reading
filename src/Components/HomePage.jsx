"use client";

import { useState } from "react";

export default function HomePage() {
  const [inputData, setinputData] = useState("");
  const [boldOutputData, setBoldOutputData] = useState([]);
  const [normalOutputData, setNormalOutputData] = useState([]);

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
    scrollTo({
      top: document.body.scrollHeight,
      bottom: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-screen flex justify-center items-center flex-col gap-8 mb-8">
      <div className="flex flex-col gap-8 h-screen items-center justify-center">
        <textarea
          className="border-2 rounded-xl p-4 focus:outline-none bg-gray-100 font-nunito"
          name=""
          id=""
          cols="90"
          rows="10"
          placeholder="Paste/Write the text..."
          value={inputData}
          onChange={(e) => {
            setinputData(e.target.value);
          }}
        ></textarea>
        <button
          className="px-8 py-4 rounded bg-black text-white
      font-raleway self-center"
          onClick={enableBionicReading}
        >
          Do the Magik
        </button>
      </div>

      <div className="bg-slate-200 p-4 rounded max-h-80 overflow-y-auto">
        <div className="flex flex-row gap-2 max-w-2xl flex-wrap text-center items-center justify-center">
          {boldOutputData.length !== 0 ? (
            boldOutputData.map((bold, index) => {
              return (
                <p key={index} className="font-nunito">
                  <b>{bold}</b>
                  <span>{normalOutputData[index]}</span>
                </p>
              );
            })
          ) : (
            <p className="font-raleway">
              Edited text will be displayed here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
