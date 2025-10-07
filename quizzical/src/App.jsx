import { useState } from "react";
import Title from "./components/Title";
import Quiz from "./components/Quiz";

export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [custom, setCustom] = useState({});

  return (
    <main className="quizzical">
      {isQuizStarted ? (
        <Quiz
          isQuizStarted={isQuizStarted}
          setIsQuizStarted={setIsQuizStarted}
          custom={custom}
        />
      ) : (
        <Title
          setIsQuizStarted={setIsQuizStarted}
          custom={custom}
          setCustom={setCustom}
        ></Title>
      )}
    </main>
  );
}
