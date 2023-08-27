import React from 'react';
var Typewriter = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'itpohgero' : _b, _c = _a.delay, delay = _c === void 0 ? 100 : _c, _d = _a.isLoop, isLoop = _d === void 0 ? false : _d, _e = _a.loopDelay, loopDelay = _e === void 0 ? 2000 : _e;
    var _f = React.useState(''), currentText = _f[0], setCurrentText = _f[1];
    var _g = React.useState(0), currentIndex = _g[0], setCurrentIndex = _g[1];
    React.useEffect(function () {
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
        return function () { };
    }, [currentIndex, currentText, delay, isLoop, loopDelay, text]);
    return currentText;
};
export default Typewriter;
//# sourceMappingURL=App.js.map