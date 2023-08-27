import React, { useState, useEffect } from 'react'

interface DataProps {
  text?: string | string[]
  speed?: number
  isLoop?: boolean
  loopDelay?: number
  textClassName?: string
}

const Typewriter: React.FC<DataProps> = ({
  text = 'itpohgero',
  speed = 100,
  isLoop = false,
  loopDelay = 2000,
  textClassName = '',
}) => {
  const [currentText, setCurrentText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const textArray = Array.isArray(text) ? text : [text]
    const currentTextLength = currentText.length

    if (currentIndex < textArray.length) {
      if (currentTextLength < textArray[currentIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + textArray[currentIndex][currentTextLength])
        }, speed)

        return () => clearTimeout(timeout)
      } else if (currentIndex === textArray.length - 1 && isLoop) {
        setTimeout(() => {
          setCurrentText('')
          setCurrentIndex(0)
        }, loopDelay)
      } else {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1)
          setCurrentText('')
        }, loopDelay)
      }
    }

    return () => {
      // Cleanup if needed
    }
  }, [currentIndex, currentText, speed, isLoop, loopDelay, text])

  return <span className={textClassName}>{currentText}</span>
}

export default Typewriter
