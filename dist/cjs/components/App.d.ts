interface DataProps {
    text?: string | string[];
    delay?: number;
    isLoop?: boolean;
    loopDelay?: number;
    textClassName?: string;
}
declare const Typewriter: ({ text, delay, isLoop, loopDelay }: DataProps) => string;
export default Typewriter;
