import React from 'react';
import { HiCheck } from 'react-icons/hi';

import { Step } from '../../types/index';

interface StepNumberProps {
  step: Step;
  move: number;
}

const StepNumber: React.FC<StepNumberProps> = ({ step, move }) => {
  const isDone = move > step.number;

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center font-medium space-y-1">
        <div className="flex items-center">
          <span
            className={`${
              isDone ? 'bg-pink-500 border-pink-500' : 'border-gray-300'
            } w-8 h-8 grid place-content-center relative border-2  rounded-full`}
          >
            <span
              className={`${
                isDone ? 'text-pink-500' : ''
              } absolute bottom-10 left-1/2 -translate-x-1/2`}
            >
              {step.name}
            </span>
            {isDone ? (
              <HiCheck className="text-white text-2xl" />
            ) : (
              <span>{step.number}</span>
            )}
          </span>
          {step.number !== 4 ? (
            <div className="h-1 w-12 relative bg-gray-300 rounded">
              {/* <span className="absolute inset-0 bg-pink-500"></span> */}
              <span
                className={`${isDone && 'inset-0 bg-pink-500'} absolute`}
              ></span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StepNumber;
