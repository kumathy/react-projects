export default function Title(props) {
  function startQuiz() {
    props.setIsQuizStarted(true);
  }

  function selectCategory(event) {
    props.setCustom((prevCustom) => ({
      ...prevCustom,
      category: event.target.value,
    }));
  }

  function selectDifficulty(event) {
    props.setCustom((prevCustom) => ({
      ...prevCustom,
      difficulty: event.target.value,
    }));
  }

  return (
    <main className="title">
      <h1>Quizzical</h1>
      <p>Put your trivia knowledge to the test!</p>
      <section>
        <select onChange={selectCategory}>
          <option value="">Any Category</option>
          <option value="9">General</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Threatres</option>
          <option value="14">Television</option>
          <option value="15">Video games</option>
          <option value="16">Board games</option>
          <option value="17">Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Arts</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Gadgets</option>
          <option value="31">Anime</option>
          <option value="32">Cartoon</option>
        </select>

        <select onChange={selectDifficulty}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium"> Medium</option>
          <option value="hard">Hard</option>
        </select>
      </section>
      <button onClick={startQuiz}>Start quiz</button>
    </main>
  );
}
