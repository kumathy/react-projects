export default function Title(props) {
  function startQuiz() {
    props.setIsQuizStarted(true);
  }

  return (
    <main className="title">
      <h1>Quizzical</h1>
      <p>Put your trivia knowledge to the test!</p>
      <button onClick={startQuiz}>Start quiz</button>
    </main>
  );
}
