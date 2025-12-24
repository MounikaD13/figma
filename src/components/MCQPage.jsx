import React, { useState } from "react";
import '../styles/MCQPage.css';

const questions = [
  {
    id: 1,
    question:
      "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide Within 1 Month. She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroy The Approaching Comet. In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation?",
    options: [
      { id: "a", label: "Double" },
      { id: "b", label: "Double" },
      { id: "c", label: "Double" },
      { id: "d", label: "Double" },
    ],
  },
  {
    id: 2,
    question:
      "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide Within 1 Month. She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroy The Approaching Comet. In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation?",
    options: [
      { id: "a", label: "Double" },
      { id: "b", label: "Double" },
      { id: "c", label: "Double" },
      { id: "d", label: "Double" },
    ],
  },
  {
    id: 3,
    question:
      "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide Within 1 Month. She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroy The Approaching Comet. In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation?",
    options: [
      { id: "a", label: "Double" },
      { id: "b", label: "Double" },
      { id: "c", label: "Double" },
      { id: "d", label: "Double" },
    ],
  },
  {
    id: 4,
    question:
      "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide Within 1 Month. She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroy The Approaching Comet. In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation?",
    options: [
      { id: "a", label: "Double" },
      { id: "b", label: "Double" },
      { id: "c", label: "Double" },
      { id: "d", label: "Double" },
    ],
  },
  {
    id: 5,
    question:
      "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide Within 1 Month. She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroy The Approaching Comet. In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation?",
    options: [
      { id: "a", label: "Double" },
      { id: "b", label: "Double" },
      { id: "c", label: "Double" },
      { id: "d", label: "Double" },
    ],
  },
];

const MCQPage = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions");
      return;
    }
    console.log("Submitted Answers:", answers);
  };
  const spanColor = {
        color: "#e41f3a"
    }

  return (
    <div className="mcq-wrapper">
      <h2 className="mcq-title">
        <span style={spanColor}>MCQ</span> Questions
      </h2>

      {questions.map((q) => (
        <div className="container mcq-card" key={q.id}>
          <p className="mcq-question">
            {q.id}. {q.question}
          </p>

          <div className="row">
            {q.options.map((opt) => (
              <div className="col-md-6" key={opt.id}>
                <label className="radio-option">
                  <input
                    type="radio"
                    name={`q${q.id}`}       // groups per question
                    value={opt.id}
                    checked={answers[q.id] === opt.id}
                    onChange={() => handleChange(q.id, opt.id)}
                  />
                  {opt.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MCQPage;