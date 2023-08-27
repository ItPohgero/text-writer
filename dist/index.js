"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Typewriter = ({ text, delay = 100, isLoop = false, loopDelay = 2000, textClassName = 'text-slate-700' }) => {
    const [currentText, setCurrentText] = (0, react_1.useState)('');
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const textArray = Array.isArray(text) ? text : [text];
        const currentTextLength = currentText.length;
        if (currentIndex < textArray.length) {
            if (currentTextLength < textArray[currentIndex].length) {
                const timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + textArray[currentIndex][currentTextLength]);
                }, delay);
                return () => clearTimeout(timeout);
            }
            else if (currentIndex === textArray.length - 1 && isLoop) {
                setTimeout(() => {
                    setCurrentText('');
                    setCurrentIndex(0);
                }, loopDelay);
            }
            else {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setCurrentText('');
            }
        }
    }, [currentIndex, currentText, delay, isLoop, loopDelay, text]);
    return react_1.default.createElement("span", { className: textClassName }, currentText);
};
exports.default = Typewriter;
