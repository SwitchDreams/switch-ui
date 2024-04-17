import React from "react";

interface ErrorMsgProps {
  error: boolean;
  supportText: string | undefined;
  errorMsg: string | undefined;
}

interface LabelProps {
  label: string | undefined;
  name: string | undefined;
}

export const ErrorMsg = ({ error, supportText, errorMsg }: ErrorMsgProps) => {
  return error && errorMsg ? (
    <span className="text-sm text-error-500">{errorMsg}</span>
  ) : (
    supportText && <span className="text-sm text-coolGray-600">{supportText}</span>
  );
};

export const LabelText = ({ label, name }: LabelProps) => {
  return (
    label && (
      <label htmlFor={name} className="text-sm font-medium text-coolGray-900">
        {label}
      </label>
    )
  );
};
