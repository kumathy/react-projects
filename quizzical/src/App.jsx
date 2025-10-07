import { useState } from "react";
import { clsx } from "clsx";
import Title from "./components/Title";
import Quiz from "./components/Quiz";

export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [custom, setCustom] = useState({});

  return (
    <main className={clsx("quizzical", isQuizStarted ? "" : "title-screen")}>
      {isQuizStarted ? (
        <Quiz
          isQuizStarted={isQuizStarted}
          setIsQuizStarted={setIsQuizStarted}
          custom={custom}
        />
      ) : (
        <Title
          setIsQuizStarted={setIsQuizStarted}
          setCustom={setCustom}
        ></Title>
      )}
    </main>
  );
}
