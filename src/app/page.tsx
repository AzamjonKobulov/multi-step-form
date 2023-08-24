'use client';

import { useState } from 'react';

import Steps from './components/common/StepsProgress';
import Name from './components/Name';
import Contact from './components/Contact';
import Birth from './components/Birth';
import Login from './components/Login';
import Button from './components/common/Button';
import SuccesMessage from './components/SuccesMessage';

export default function Home() {
  const [move, setMove] = useState<number>(1);

  const steps = [
    <Name key={1} />,
    <Contact key={2} />,
    <Birth key={3} />,
    <Login key={4} />,
  ];

  const handleIncMove = () => {
    move < 5 && setMove((prev) => prev + 1);
  };

  const handleDecMove = () => {
    move > 1 && setMove((prev) => prev - 1);
  };

  return (
    <div className="max-w-sm w-full px-7 pt-16 pb-10 text-center bg-white rounded-xl">
      <h1 className="text-4xl font-semibold">Signup form</h1>
      <Steps move={move} />
      <div className="flex overflow-hidden">
        {move < 5 ? (
          steps.map((step, index) => (
            <div
              key={step.key}
              // style={{
              //   transform: `translateX(${(index + 1 - move) * 100}%)`,
              // }}
              // className={`${
              //   index + 1 === move
              //     ? 'translate-x-0'
              //     : `translate-x-[${(index + 1 - move) * 100}%]`
              // } w-full shrink-0 transition-all duration-300`}
              className={`${
                move === index + 1 ? 'block' : 'hidden'
              } w-full shrink-0 transition-all duration-300`}
            >
              {step}
            </div>
          ))
        ) : (
          <SuccesMessage />
        )}
      </div>
      <div className="flex items-center space-x-4">
        {move > 1 && move < 5 ? (
          <Button onClick={() => handleDecMove()}>Prev</Button>
        ) : null}
        {move < 5 && (
          <Button onClick={() => handleIncMove()}>
            {move >= 4 ? 'Submit' : 'Next'}
          </Button>
        )}
      </div>
    </div>
  );
}
