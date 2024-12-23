import React, { useState } from 'react';
import './App.css';

function App() {
    const questions = [
        "What is React?",
        "Which of the following is a feature of React?",
        "What is a component in React?",
        "What is JSX?"
    ];

    const options = [
        {
            optionValue: [
                "A JavaScript library for building user interfaces",
                "A programming language",
                "A database",
                "A web server"
            ]
        },
        {
            optionValue: [
                "Virtual DOM",
                "Two-way data binding",
                "Direct DOM manipulation",
                "None of the above"
            ]
        },
        {
            optionValue: [
                "A JavaScript function or class that optionally accepts inputs (props) and returns a React element",
                "A CSS file",
                "A HTML tag",
                "None of the above"
            ]
        },
        {
            optionValue: [
                "JavaScript XML",
                "JavaScript Extension",
                "Java Syntax Extension",
                "None of the above"
            ]
        }
    ];

    // Array to hold correct answers for each question
    const correctAnswers = [
       "A JavaScript library for building user interfaces",
       "Virtual DOM",
       "A JavaScript function or class that optionally accepts inputs (props) and returns a React element",
       "JavaScript XML"
    ];

    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    function CheckAnswer(selectedOption) {
        if (selectedOption === correctAnswers[counter]) {
            setScore(score + 1);
        }
    }

    function Change(selectedOption) {
        CheckAnswer(selectedOption);
        
        if (counter < questions.length - 1) {
            setCounter(counter + 1);
        } else {
            setQuizCompleted(true);
        }
    }

    return (
        <div className="container">
            <h1>My Quiz Application</h1>
            <div className="card">
                {quizCompleted ? (
                    <div>
                        <h2>Quiz Completed!</h2>
                        <h3>Your Score: {score} out of {questions.length}</h3>
                    </div>
                ) : (
                    <>
                        <h2>Question No: {counter + 1} / {questions.length}</h2>
                        <h2>{questions[counter]}</h2>
                        
                        <div id="option">
                            {options[counter].optionValue.map((option, index) => (
                                <li key={index} onClick={() => Change(option)}>{option}</li>
                            ))}
                        </div>
                    </>
                )}
                
                <br />
            </div>
        </div>
    );
}

export default App;
