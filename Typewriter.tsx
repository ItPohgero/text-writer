import React, { useState, useEffect } from 'react';

type DataProps =  {
    text: string | string[];
    delay?: number;
    isLoop?: boolean;
    loopDelay?: number;
    textClassName?: string;
}
const Typewriter = ({ text, delay = 100, isLoop = false, loopDelay = 2000, textClassName = 'text-slate-700' }: DataProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const textArray = Array.isArray(text) ? text : [text];
        const currentTextLength = currentText.length;

        if (currentIndex < textArray.length) {
            if (currentTextLength < textArray[currentIndex].length) {
                const timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + textArray[currentIndex][currentTextLength]);
                }, delay);

                return () => clearTimeout(timeout);
            } else if (currentIndex === textArray.length - 1 && isLoop) {
                setTimeout(() => {
                    setCurrentText('');
                    setCurrentIndex(0);
                }, loopDelay);
            } else {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setCurrentText('');
            }
        }
    }, [currentIndex, currentText, delay, isLoop, loopDelay, text]);

    return <span className={textClassName}>{currentText}</span>;
};

export default Typewriter;
