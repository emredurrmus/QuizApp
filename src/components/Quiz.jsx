import { useCallback, useState } from "react";
import QUESTIONS from "../data/questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const[userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isCompleted = (activeQuestionIndex === QUESTIONS.length);

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, selectedAnswer]
        });
    }, );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(isCompleted) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
    <div id="quiz">
        <Question
            key={activeQuestionIndex} 
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer} />
    </div>
    )
    
   
}