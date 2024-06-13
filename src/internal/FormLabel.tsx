import React from "react";

interface LabelProps {
  label?: string;
  name?: string;
  className?: string;
}

export const FormLabel = ({ label, name, className }: LabelProps) => {
  return (
    label && (
      <label
        htmlFor={name}
        className={`${className ? className : "text-sm font-medium text-coolGray-900"}`}
      >
        {label}
      </label>
    )
  );
};

export default FormLabel;
