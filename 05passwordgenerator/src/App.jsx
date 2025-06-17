import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    document.querySelector("p")?.classList.remove("hidden");

    setTimeout(() => {
      document.querySelector("p")?.classList.add("hidden");
      passwordRef.current?.blur(); // Remove focus
      window.getSelection()?.removeAllRanges(); // Clear selection
    }, 2000);
  };

  return (
    <>
      <div className="relative h-screen bg-black">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mt-4 px-2 py-8 bg-gray-600 h-auto w-1/3 rounded-lg shadow-lg text-white">
          <h1 className="font-medium text-center">Password Generator</h1>

          <div className="flex items-center justify-center mt-2">
            <input
              type="text"
              value={password}
              placeholder="Password"
              ref={passwordRef}
              readOnly
              className="rounded-l-md bg-gray-200 text-sm text-orange-800 outline-none shadow-md p-2.5 w-4/5"
            />
            <button
              className="px-4 py-2.5 rounded-r-md bg-blue-600 text-sm font-medium"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <p className="text-sm px-6 text-yellow-400 hidden">
            Password copied successfully
          </p>

          <div className="text-sm flex items-center justify-start mt-2 gap-x-2 ">
            <div className="flex items-center gap-x-1 px-4">
              <input
                type="range"
                min={8}
                max={48}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="cursor-pointer"
                name=""
                id=""
              />

              <label htmlFor="length">Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1 px-1">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="cursor-pointer"
              />
              <label htmlFor="number">Numbers</label>

              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="cursor-pointer"
              />
              <label htmlFor="characters">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
