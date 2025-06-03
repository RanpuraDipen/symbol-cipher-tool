import { useState } from "react";
import { encodeText, decodeText } from "./api";
import { Toast, showToast } from "./Toast";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = async () => {
    try {
      const result = await encodeText(input);
      setOutput(result);
    } catch (err) {
      showToast(err.code || "NETWORK_ERROR");
    }
  };

  const handleDecode = async () => {
    try {
      const result = await decodeText(input);
      setOutput(result);
    } catch (err) {
      showToast(err.code || "NETWORK_ERROR");
    }
  };

  return (
    <div className="app-container">
      <h1>Symbol Cipher Tool Encoder/Decoder</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <div className="buttons">
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode}>Decode</button>
      </div>
      <textarea value={output} readOnly placeholder="Output will appear here" />
      <Toast />
    </div>
  );
}

export default App;
