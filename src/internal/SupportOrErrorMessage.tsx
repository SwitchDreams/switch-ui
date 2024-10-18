import React from "react";
import { Text } from "src/components/Text";
import { twMerge } from "tailwind-merge";

interface ErrorMsgProps {
  error: boolean;
  supportText?: string;
  errorMsg?: string;
  supportTextClassName?: string;
}

export const SupportOrErrorMessage = ({
  error,
  supportText,
  errorMsg,
  supportTextClassName,
}: ErrorMsgProps) => {
  return error && errorMsg ? (
    <Text size="xs" as="span" className="text-error-500">
      {errorMsg}
    </Text>
  ) : (
    supportText && (
      <Text size="xs" as="span" className={twMerge("text-coolGray-600", supportTextClassName)}>
        {supportText}
      </Text>
    )
  );
};

export default SupportOrErrorMessage;
