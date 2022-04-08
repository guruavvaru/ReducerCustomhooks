import { useEffect, useState } from "react";
const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);
  return (
    currentTime.getHours() +
    ":" +
    currentTime.getMinutes() +
    ":" +
    currentTime.getSeconds()
  );
};

const Timer = () => {
  const currentTime = useTimer();
  const currentTime1 = useTimer();
  return <div>{currentTime1}</div>;
};

export default Timer;
