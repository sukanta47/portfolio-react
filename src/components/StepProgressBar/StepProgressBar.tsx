import React from "react";
import "./StepProgressBar.scss";

interface StepProgressBarProps {
  totalSteps: number;
  value: number;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  totalSteps,
  value,
}) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);
  const f = value % 1;
  const stepValue = Math.floor(value);
  return (
    <div className="step-progress-bar">
      {steps.map((step) => (
        <div key={step} className={`step-box`}>
          <div
            className={`step-box ${step <= stepValue ? "active" : ""}`}
            style={
              f && step === stepValue + 1
                ? {
                    backgroundImage:"linear-gradient(to right, #3b82f6, #e0e0e0)",
                  }
                : undefined
            }
          ></div>
        </div>
      ))}
      <p className="text-xs ml-1">{value}</p>
    </div>
  );
};

export default StepProgressBar;
