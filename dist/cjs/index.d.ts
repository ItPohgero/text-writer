import React from 'react';
interface DataProps {
    text?: string | string[];
    speed?: number;
    isLoop?: boolean;
    loopDelay?: number;
    textClassName?: string;
}
declare const Typewriter: React.FC<DataProps>;
export default Typewriter;
