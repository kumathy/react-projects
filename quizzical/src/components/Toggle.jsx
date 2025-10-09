export default function Toggle(props) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={props.toggleDarkMode}
        checked={props.isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
}
