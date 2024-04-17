import React from "react";

interface ErrorMsgProps {
  error: boolean;
  supportText?: string;
  errorMsg?: string;
}

export const ErrorMessage = ({ error, supportText, errorMsg }: ErrorMsgProps) => {
  return error && errorMsg ? (
    <span className="text-sm text-error-500">{errorMsg}</span>
  ) : (
    supportText && <span className="text-sm text-coolGray-600">{supportText}</span>
  );
};

export default ErrorMessage;
