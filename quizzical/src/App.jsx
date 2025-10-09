import { useState } from "react";
import { clsx } from "clsx";
import { FaGithub } from "react-icons/fa";
import { useLocalStorage } from "react-use";
import Title from "./components/Title";
import Quiz from "./components/Quiz";
import Toggle from "./components/Toggle";

export default function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [custom, setCustom] = useState({
    category: "",
    difficulty: "",
  });

  function toggleDarkMode() {
    setIsDark(() => !isDark);
    console.log(isDark);
  }

  return (
    <main className="app" data-theme={isDark ? "dark" : "light"}>
      <div className="quizzical-container">
        {!isQuizStarted && (
          <Toggle isChecked={isDark} toggleDarkMode={toggleDarkMode} />
        )}
        <div className={clsx("quizzical", isQuizStarted ? "" : "title-screen")}>
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
