function RestartButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart the quiz
    </button>
  );
}

export default RestartButton;
