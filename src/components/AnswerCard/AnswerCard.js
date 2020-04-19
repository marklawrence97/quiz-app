import React from "react";

const AnswerCard = ({
  answer,
  handleAnswerClick,
  selected_answer,
  correct,
  reveal,
  correct_answer,
}) => {
  // Render the correct answer green
  if (answer === correct_answer && reveal) {
    return (
      <div
        className="ui raised segment"
        onClick={(e) => handleAnswerClick(answer, e)}
        style={{ backgroundColor: "green" }}
      >
        <p>{answer}</p>
      </div>
    );
  }

  // If user was wrong render their wrong answer red
  if (answer === selected_answer && reveal && !correct) {
    return (
      <div
        className="ui raised segment"
        onClick={(e) => handleAnswerClick(answer, e)}
        style={{ backgroundColor: "red" }}
      >
        <p>{answer}</p>
      </div>
    );
  }

  // If the user has selected this answer render it grey
  if (answer === selected_answer) {
    return (
      <div
        className="ui raised segment"
        onClick={(e) => handleAnswerClick(answer, e)}
        style={{ backgroundColor: "grey" }}
      >
        <p>{answer}</p>
      </div>
    );
  }

  return (
    <div
      className="ui raised segment"
      onClick={(e) => handleAnswerClick(answer, e)}
    >
      <p>{answer}</p>
    </div>
  );
};

export default AnswerCard;
