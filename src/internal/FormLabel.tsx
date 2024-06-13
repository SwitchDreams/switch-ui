import React from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  label?: string;
  name?: string;
  className?: string;
}

export const FormLabel = ({ label, name, className }: LabelProps) => {
  return (
    label && (
      <label htmlFor={name} className={twMerge("text-sm font-medium text-coolGray-900", className)}>
        {label}
      </label>
    )
  );
};

export default FormLabel;
