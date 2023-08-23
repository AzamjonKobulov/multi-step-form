import React from 'react';

import StepNumber from './StepNumber';
import { Step } from '@/app/types/index';

interface StepsProps {
  move: number;
}

const steps: Step[] = [
  { number: 1, name: 'Name' },
  { number: 2, name: 'Contact' },
  { number: 3, name: 'Birth' },
  { number: 4, name: 'Submit' },
];

const StepProgress: React.FC<StepsProps> = ({ move }) => {
  return (
    <div className="flex items-center justify-center mt-16">
      {steps.map((step) => (
        <StepNumber key={step.number} step={step} move={move} />
      ))}
    </div>
  );
};

export default StepProgress;
