import { useState } from "react";
import { clsx } from "clsx";
import { FaGithub } from "react-icons/fa";
import Title from "./components/Title";
import Quiz from "./components/Quiz";

export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [custom, setCustom] = useState({
    category: "",
    difficulty: "",
  });

  return (
    <main>
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
            custom={custom}
            setCustom={setCustom}
          ></Title>
        )}
      </main>
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
