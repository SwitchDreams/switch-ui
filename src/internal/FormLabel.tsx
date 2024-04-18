import React from "react";

interface LabelProps {
  label?: string;
  name?: string;
}

export const FormLabel = ({ label, name }: LabelProps) => {
  return (
    label && (
      <label htmlFor={name} className="text-sm font-medium text-coolGray-900">
        {label}
      </label>
    )
  );
};

export default FormLabel;
