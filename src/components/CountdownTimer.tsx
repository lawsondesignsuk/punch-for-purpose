"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownTimerProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (target: number): TimeLeft => {
  const total = Math.max(0, target - Date.now());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <div className="grid grid-cols-4 gap-3 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="rounded-lg border border-white/15 bg-white/5 p-3">
          <p className="text-2xl font-black text-white">{String(value).padStart(2, "0")}</p>
          <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
        </div>
      ))}
    </div>
  );
}
