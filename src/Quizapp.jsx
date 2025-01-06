import React, { useState } from 'react';
import { data } from './data';
import './quizstyle.css';

export default function Quizapp() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinish] = useState(false);

    const correctAnswers = ['Option2', 'Option2', 'Option2', 'Option2', 'Option2', 'Option3', 'Option1', 'Option2', 'Option2', 'Option2'];


    const handleNext = () => {
        if (index < data.length - 1) {
            if (correctAnswers[index] === option) {
                setScore(score + 1);
            }
            setIndex(index + 1);
            setOption('');
        } else {
            setFinish(true);
        }
    };

    const handleSelect = (optn) => {
        setOption(optn);
    };

    if (finished) {
        return (
            <div className="scorePage">
                <h1>Quiz Finished</h1>
                <h3>Your Score is {score} out of {data.length}</h3>
            </div>
        );
    }

    return (
        <div className="quiz">
            <h1>{data[index].Question}</h1>
            <ul>
                <li
                    className={option === 'Option1' ? 'selected' : ''}
                    onClick={() => handleSelect('Option1')}
                >
                    {data[index].Option1}
                </li>
                <li
                    className={option === 'Option2' ? 'selected' : ''}
                    onClick={() => handleSelect('Option2')}
                >
                    {data[index].Option2}
                </li>
                <li
                    className={option === 'Option3' ? 'selected' : ''}
                    onClick={() => handleSelect('Option3')}
                >
                    {data[index].Option3}
                </li>
                <li
                    className={option === 'Option4' ? 'selected' : ''}
                    onClick={() => handleSelect('Option4')}
                >
                    {data[index].Option4}
                </li>
            </ul>
            <button onClick={handleNext} disabled={!option}>
                Next
            </button>
            <h5>Question {index + 1} of {data.length}</h5>
        </div>
    );
}
