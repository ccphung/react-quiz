import { useQuiz } from "../contexts/QuizContext";

function RestartButton() {
  const { dispatch } = useQuiz();
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
