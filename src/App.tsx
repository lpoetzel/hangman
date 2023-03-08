import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordtoGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordtoGuess);
  return <div>hi</div>;
}

export default App;
