import React, { useState, useEffect } from 'react';

const PARTY_DATE = new Date('2026-06-27T19:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +PARTY_DATE - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, bg, rotate }: { value: number; label: string; bg: string; rotate: string }) => (
    <div className={`flex flex-col items-center sticker-sm ${rotate}`}>
      <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border-4 border-groovy-brown ${bg}`}>
        <span className="font-groovy text-2xl md:text-3xl text-groovy-brown">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="mt-2 font-retro text-xs md:text-sm text-groovy-cream tracking-wider uppercase bg-groovy-brown px-3 py-1 rounded-full">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center flex-wrap mt-8 gap-3 md:gap-5">
      <TimeUnit value={timeLeft.days} label="Dias" bg="bg-groovy-cream" rotate="-rotate-2" />
      <TimeUnit value={timeLeft.hours} label="Horas" bg="bg-groovy-yellow" rotate="rotate-1" />
      <TimeUnit value={timeLeft.minutes} label="Min" bg="bg-groovy-pink" rotate="-rotate-1" />
      <TimeUnit value={timeLeft.seconds} label="Seg" bg="bg-groovy-turquoise" rotate="rotate-2" />
    </div>
  );
};

export default Countdown;
