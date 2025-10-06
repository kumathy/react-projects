import { useState, useEffect } from "react";
import { decode } from "he";

export default function Quiz(props) {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Fetch API 
        if (props.isQuizStarted) {
            fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple")
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error, status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    setQuestions(data.results);
                })
                .catch(err => console.error("Fetch error:", err));
                
            // Initiate selectedAnswerIndex key to each question
            setQuestions(prevQuestions => prevQuestions.map(question => (
                {...question, selectedAnswerIndex: -1} // -1 === not selected yet
            ))
        );

        }
    }, [props.isQuizStarted])

    const questionElements = questions.map((question, index) => {
        const randomIndex = Math.floor(Math.random() * question.incorrect_answers.length + 1);

        const answers = [...question.incorrect_answers]; // spread to copy
        answers.splice(randomIndex, 0, question.correct_answer);

        // console.log(answers);
        return (
            <section key={index}>
                <h1>{decode(question.question)}</h1>
                <div>
                    {answers.map(answer => (
                        <button key={answer}>{decode(answer)}</button>
                    ))}
                </div>
                <hr></hr>
            </section>
        )
    })

    return (
        <section className="quiz">
            {questionElements}
            {questions.length !== 0 && <button>Check answers</button>}
        </section>

    )
}