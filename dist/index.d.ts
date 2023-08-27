interface DataProps {
    text: string | string[];
    delay?: number;
    isLoop?: boolean;
    loopDelay?: number;
    textClassName?: string;
}
declare const Typewriter: ({ text, delay, isLoop, loopDelay, textClassName }: DataProps) => any;
export default Typewriter;
