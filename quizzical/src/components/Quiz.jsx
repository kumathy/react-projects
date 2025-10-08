import { useState, useEffect } from "react";
import { decode } from "he";
import { clsx } from "clsx";

export default function Quiz(props) {
  const NUMBER_OF_QUESTIONS = 5;
  const [questions, setQuestions] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [error, setError] = useState("");

  function getApi() {
    const category = props.custom.category
      ? `&category=${props.custom.category}`
      : "";
    const difficulty = props.custom.difficulty
      ? `&difficulty=${props.custom.difficulty}`
      : "";
    return `https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}${category}${difficulty}&type=multiple`;
  }

  useEffect(() => {
    // Fetch API
    if (props.isQuizStarted) {
      fetch(getApi())
        .then((response) => {
          if (!response.ok) {
            // Deal with common error 429 (Too Many Requests)
            if (response.status === 429) {
              throw new Error(
                "Whoa! Looks like you've triggered requests too fast!\nPlease wait a moment and try again. 😊"
              );
            }
            throw new Error(
              `Something went wrong (error status: ${response.status}).\nPlease try again later.`
            );
          }
          return response.json();
        })
        .then((data) => {
          /// Initiate selectedAnswerIndex key to each question
          const updatedQuestions = data.results.map((question) => {
            // Spread to copy incorrect answers
            const allAnswers = [...question.incorrect_answers];
            // Pick random index for correct answer
            const randomIndex = Math.floor(
              Math.random() * (allAnswers.length + 1)
            );
            // Insert correct answer randomly
            allAnswers.splice(randomIndex, 0, question.correct_answer);

            return {
              ...question,
              allAnswers,
              selectedAnswerIndex: -1, // -1 === not selected yet
            };
          });
          setQuestions(updatedQuestions);
        })
        .catch((error) => {
          setError(error);
          console.error("Fetch error:", error);
        });
    }
  }, [props.isQuizStarted]);

  function selectAnswer(questionIndex, answerIndex) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            selectedAnswerIndex: answerIndex,
          };
        }
        return question;
      })
    );
  }

  function finishGame() {
    setIsGameOver(true);
  }

  function newGame() {
    props.setIsQuizStarted(false);
  }

  function getNumberOfCorrectAnswers() {
    let numberOfCorrectAnswers = 0;

    questions.forEach((question, questionIndex) => {
      const hasAnswered = question.selectedAnswerIndex !== -1;
      const isCorrect =
        question.allAnswers[question.selectedAnswerIndex] ===
        question.correct_answer;
      if (hasAnswered && isCorrect) {
        numberOfCorrectAnswers++;
      }
    });

    return numberOfCorrectAnswers;
  }

  const questionElements = questions.map((question, questionIndex) => {
    return (
      <section key={questionIndex}>
        <h1>{decode(question.question)}</h1>
        <div>
          {question.allAnswers.map((answer, answerIndex) => {
            const buttonClassName = clsx(
              "answer",
              answerIndex === question.selectedAnswerIndex && "selected",
              isGameOver && answer === question.correct_answer && "correct",
              isGameOver &&
                answerIndex === question.selectedAnswerIndex &&
                answer !== question.correct_answer &&
                "incorrect"
            );
            return (
              <button
                className={buttonClassName}
                key={answerIndex}
                onClick={() => selectAnswer(questionIndex, answerIndex)}
                disabled={
                  isGameOver && answerIndex !== question.selectedAnswerIndex
                }
              >
                {decode(answer)}
              </button>
            );
          })}
        </div>
        <hr></hr>
      </section>
    );
  });

  return questions.length !== 0 ? (
    <section className="quiz">
      {questionElements}
      <footer>
        {isGameOver && (
          <p>
            You scored {getNumberOfCorrectAnswers()}/{questions.length} correct
            answers
          </p>
        )}
        <button onClick={isGameOver ? newGame : finishGame}>
          {isGameOver ? "New game" : "Check answers"}
        </button>
      </footer>
    </section>
  ) : error.length !== 0 ? (
    <section className="error">
      <p className="error-message">{error.message}</p>
      <button onClick={newGame}>Go back</button>
    </section>
  ) : null;
}
