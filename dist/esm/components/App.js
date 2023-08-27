import React, { useState, useEffect } from 'react';
var Typewriter = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'itpohgero' : _b, _c = _a.delay, delay = _c === void 0 ? 100 : _c, _d = _a.isLoop, isLoop = _d === void 0 ? false : _d, _e = _a.loopDelay, loopDelay = _e === void 0 ? 2000 : _e, _f = _a.textClassName, textClassName = _f === void 0 ? '' : _f;
    var _g = useState(''), currentText = _g[0], setCurrentText = _g[1];
    var _h = useState(0), currentIndex = _h[0], setCurrentIndex = _h[1];
    useEffect(function () {
        var textArray = Array.isArray(text) ? text : [text];
        var currentTextLength = currentText.length;
        if (currentIndex < textArray.length) {
            if (currentTextLength < textArray[currentIndex].length) {
                var timeout_1 = setTimeout(function () {
                    setCurrentText(function (prevText) { return prevText + textArray[currentIndex][currentTextLength]; });
                }, delay);
                return function () { return clearTimeout(timeout_1); };
            }
            else if (currentIndex === textArray.length - 1 && isLoop) {
                setTimeout(function () {
                    setCurrentText('');
                    setCurrentIndex(0);
                }, loopDelay);
            }
            else {
                setCurrentIndex(function (prevIndex) { return prevIndex + 1; });
                setCurrentText('');
            }
        }
        return function () {
            // Cleanup if needed
        };
    }, [currentIndex, currentText, delay, isLoop, loopDelay, text]);
    return React.createElement("span", { className: textClassName }, currentText);
};
export default Typewriter;
//# sourceMappingURL=App.js.map