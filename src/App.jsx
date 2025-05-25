import React from "react";
import Card from "./card.jsx";
import reactLogo from "./assets/react.svg";

export default function App() {
  const cardData = [
    {
      cardId: 1,
      question: {
        number: 1,
        text: "What does a useEffect dependency array do?",
      },
      answer: {
        text: "Re-runs the useEffect function whenever any dependency changes.",
      },
      difficulty: "Easy",
    },
    {
      cardId: 2,
      question: {
        number: 2,
        text: "List all of React's Component Lifecycles!",
      },
      answer: {
        text: "A React component has three main lifecycle stages : mount, update and unmount",
      },
      difficulty: "Medium",
    },
    {
      cardId: 3,
      question: {
        number: 3,
        text: "What is a Higher Order Component?",
      },
      answer: {
        text: "A function that takes a component and returns an enhanced component version.",
      },
      difficulty: "Hard",
    },
    {
      cardId: 4,
      question: {
        number: 4,
        text: "What is The Compound Component Pattern?",
      },
      answer: {
        text: "A pattern enabling related components to share state implicitly, promoting flexible design.",
      },
      difficulty: "Hard",
    },
    {
      cardId: 5,
      question: {
        number: 5,
        text: "What is prop drilling and how to fix it?",
      },
      answer: {
        text: "Prop drilling refers to passing props through several layers; the Context API can streamline this.",
      },
      difficulty: "Easy",
    },
    {
      cardId: 6,
      question: {
        number: 6,
        text: "What is the usage of the useRef hook?",
      },
      answer: {
        text: "It maintains a mutable value between renders without causing re-renders, useful for DOM refs.",
      },
      difficulty: "Medium",
    },
  ];

  return (
    <div className="App">
      <div className="mainContentWrapper">
        <span className="appSubtitle">From Beginner to Advanced Questions</span>
        <div className="appTitleHeader">
          <img src={reactLogo} alt="logo react" className="appLogo" />
          <h1 className="appTitleMain">The React Flash Cards.</h1>
        </div>
        <span className="appDescription">
          Test your react knowledge by answering the flashcards below
        </span>
        <div className="cardsGrid">
          {cardData.map((card) => (
            <Card
              key={card.cardId}
              question={card.question}
              answer={card.answer}
              difficulty={card.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
