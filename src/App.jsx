import axios from "axios";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");

  const generate = async () => {
    setUserOutput("loading .. ");
    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBuCPHdwd4R9ODaAm_STiPXqKM1XAhwlnQ",
      { contents: [{ parts: [{ text: userInput }] }] }
    );
    setUserOutput(res.data.candidates[0].content.parts[0].text);
  };

  return (
    <>
      <div>
        <h1 className="text-red-500">this is a chatbot</h1>
        <input
          className="border border-red-500"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={generate}>Generate</button>
        <pre>{userOutput}</pre>
      </div>
    </>
  );
}

export default App;
