import { useState } from "react"
import Title from "./components/Title"
import Quiz from "./components/Quiz"

export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <main className="quizzical">
      {isQuizStarted ? <Quiz /> : <Title setIsQuizStarted={setIsQuizStarted}></Title>}
    </main>
  )
}