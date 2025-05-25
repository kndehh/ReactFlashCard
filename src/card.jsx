import React, { useState } from "react";
import "./Card.css";

export default function Card({ question, answer, difficulty }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getDifficultyClass = (diff) => {
    const lowerDiff = diff ? diff.toLowerCase() : "";
    switch (lowerDiff) {
      case "easy":
        return "difficultyEasy";
      case "medium":
        return "difficultyMedium";
      case "hard":
        return "difficultyHard";
      default:
        return "";
    }
  };

  return (
    <div
      className={`cardContainer ${isFlipped ? "flipped" : ""}`}
      onClick={toggleFlip}
    >
      <div className="cardSide cardFront">
        <span className="cardQuestionNumber">Question {question.number}</span>
        <p className="cardQuestionText">{question.text}</p>
        <span
          className={`cardDifficultyBadge ${getDifficultyClass(difficulty)}`}
        >
          {difficulty}
        </span>
      </div>
      <div className="cardSide cardBack">
        <span className="cardAnswerLabel">Answer :</span>
        <span
          className={`cardDifficultyBadge ${getDifficultyClass(difficulty)}`}
        >
          {difficulty}
        </span>
        <p className="cardQuestionTextOnBack">{question.text}</p>
        <p className="cardAnswerText">{answer.text}</p>
      </div>
    </div>
  );
}
