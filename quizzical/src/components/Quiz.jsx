import { useState, useEffect } from "react";
import { decode } from "he";
import { clsx } from "clsx";

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch API
    if (props.isQuizStarted) {
      fetch(
        "https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple"
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error, status: ${res.status}`);
          }
          return res.json();
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
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [props.isQuizStarted]);

  function selectAnswer(questionIndex, answerIndex) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => {
        // console.log("This is section: ", index);
        // console.log(
        //   "question.selectedAnswerIndex: ",
        //   question.selectedAnswerIndex
        // );
        // console.log("questionIndex :", questionIndex);
        // console.log("answerIndex: ", answerIndex);

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

  const questionElements = questions.map((question, questionIndex) => {
    return (
      <section key={questionIndex}>
        <h1>{decode(question.question)}</h1>
        <div>
          {question.allAnswers.map((answer, answerIndex) => {
            const buttonClassName = clsx(
              "answer",
              question.selectedAnswerIndex === answerIndex && "selected"
            );
            return (
              <button
                className={buttonClassName}
                key={answerIndex}
                onClick={() => selectAnswer(questionIndex, answerIndex)}
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

  return (
    <section className="quiz">
      {questionElements}
      {questions.length !== 0 && <button>Check answers</button>}
    </section>
  );
}
