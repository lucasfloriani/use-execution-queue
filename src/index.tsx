import { useCallback, useEffect, useState } from "react";

interface HookProps {
  intervalTime: number;
}

export const useExecutionQueue = (
  { intervalTime }: HookProps = { intervalTime: 1000 }
) => {
  const [queue, setQueue] = useState<Array<Function>>([]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (queue.length > 0) {
        const next = queue.shift();
        if (next) next();
      }
      setQueue(queue);
    }, intervalTime);

    return () => clearInterval(intervalID);
  }, [intervalTime, queue]);

  const addToQueue = useCallback(
    (fn: Function) =>
      setQueue((previousQueue: Array<Function>) => [...previousQueue, fn]),
    []
  );

  return { queue, addToQueue };
};
