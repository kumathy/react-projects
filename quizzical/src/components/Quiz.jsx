import { useState, useEffect } from "react"
import { decode } from "he"

export default function Quiz() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error, status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setQuestions(data.results);
                // console.log(data.results);
            })
            .catch(err => console.error("Fetch error:", err));
    }, [])

    const questionElements = questions.map((question, index) => {
        // console.log(question.incorrect_answers);
        // console.log(question.correct_answer);
        const randomIndex = Math.floor(Math.random() * question.incorrect_answers.length + 1);
        // console.log(randomIndex);

        const answers = [...question.incorrect_answers]; // copy
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
            <button>Check answers</button>
        </section>

    )
}