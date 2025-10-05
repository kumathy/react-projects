import { useState, useEffect } from "react"

export default function Quiz() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results);
            })
    }, [])

    const questionElements = questions.map((question, index) => {
        return (
            <section key={index}>
                <h1>{question.question}</h1>
                <button>Answer 1</button>
                <button>Answer 2</button>
                <button>Answer 3</button>
                <button>Answer 4</button>
                <hr></hr>
            </section>
        )
    })

    return (
        <main>
            {questionElements}

            <button>Check answers</button>
        </main>

    )
}