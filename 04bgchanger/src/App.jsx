import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        className="relative min-h-screen "
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-600 rounded-lg flex justify-center items-center">
          <button
            className="p-6 bg-red-600 m-4 rounded-full w-24 text-center shadow-lg text-black "
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="p-6 bg-green-600 m-4 rounded-full w-24 text-center shadow-lg text-black"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="p-6 bg-blue-600 m-4 rounded-full w-24 text-center shadow-lg text-black"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
