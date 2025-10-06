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
          setQuestions(data.results);
        })
        .catch((err) => console.error("Fetch error:", err));

      // Initiate selectedAnswerIndex key to each question
      setQuestions(
        (prevQuestions) =>
          prevQuestions.map((question) => ({
            ...question,
            selectedAnswerIndex: -1,
          })) // -1 === not selected yet
      );
    }
  }, [props.isQuizStarted]);

  function selectAnswer(questionIndex, answerIndex) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => {
        console.log("This is section: ", index);
        console.log(
          "question.selectecAnswerIndex: ",
          question.selectedAnswerIndex
        );
        console.log("questionIndex :", questionIndex);
        console.log("answerIndex: ", answerIndex);

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
    const randomIndex = Math.floor(
      Math.random() * question.incorrect_answers.length + 1
    );

    const answers = [...question.incorrect_answers]; // spread to copy
    answers.splice(randomIndex, 0, question.correct_answer);

    const buttonClassName = clsx(
      "answer"
      // question.selectedAnswerIndex === -1 && "selected"
    );

    return (
      <section key={questionIndex}>
        <h1>{decode(question.question)}</h1>
        <div>
          {answers.map((answer, answerIndex) => (
            <button
              className={buttonClassName}
              key={answerIndex}
              onClick={() => selectAnswer(questionIndex, answerIndex)}
            >
              {decode(answer)}
            </button>
          ))}
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
