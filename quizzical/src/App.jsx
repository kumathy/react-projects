import { useState } from "react";
import { useLocalStorage } from "react-use";
import { useWindowSize } from "react-use";
import { clsx } from "clsx";
import { FaGithub } from "react-icons/fa";
import Title from "./components/Title";
import Quiz from "./components/Quiz";
import Toggle from "./components/Toggle";
import Confetti from "react-confetti";

export default function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { width, height } = useWindowSize();
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [custom, setCustom] = useState({
    category: "",
    difficulty: "",
  });

  function toggleDarkMode() {
    setIsDark(() => !isDark);
  }

  return (
    <main className="app" data-theme={isDark ? "dark" : "light"}>
      {isWon && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1000}
          recycle={false}
          gravity={1.5}
        />
      )}
      <div className="quizzical-container">
        <Toggle isChecked={isDark} toggleDarkMode={toggleDarkMode} />
        <div className={clsx("quizzical", isQuizStarted ? "" : "title-screen")}>
          {isQuizStarted ? (
            <Quiz
              isQuizStarted={isQuizStarted}
              setIsQuizStarted={setIsQuizStarted}
              isWon={isWon}
              setIsWon={setIsWon}
              custom={custom}
            />
          ) : (
            <Title
              setIsQuizStarted={setIsQuizStarted}
              custom={custom}
              setCustom={setCustom}
            ></Title>
          )}
        </div>
      </div>
      {!isQuizStarted ? (
        <footer className="quizzical-footer">
          <a
            href="https://github.com/anh-tran2106/react-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub />
            Source
          </a>
        </footer>
      ) : null}
    </main>
  );
}
