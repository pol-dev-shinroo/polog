import { useState, useEffect, useCallback } from "react";

interface CounterProps {
  end: number;
}
const useCounter = ({ end }: CounterProps) => {
  const [count, setCount] = useState(0);
  const increment = end / 50;
  const interval = 50 / end;

  const intervalCallback = useCallback(() => {
    if (count < end) {
      setCount(count + increment);
    }
  }, [count, end, increment]);

  useEffect(() => {
    const intervalId = setInterval(intervalCallback, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [interval, intervalCallback]);

  return { count };
};
export default useCounter;
