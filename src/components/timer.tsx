import React, { useState, useEffect } from "react";

interface TimerProps {
  reset: boolean;
}

const Timer: React.FC<TimerProps> = ({ reset }) => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    // Reinicia o cronômetro quando a prop 'reset' mudar
    setSeconds(0);
  }, [reset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <p>
        Tempo do Set: {Math.floor(seconds / 60).toString().padStart(2, "0")}:
        {(seconds % 60).toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
