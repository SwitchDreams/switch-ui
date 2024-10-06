import React from "react";
import { Text } from "src/components/Text";

interface ErrorMsgProps {
  error: boolean;
  supportText?: string;
  errorMsg?: string;
}

export const SupportOrErrorMessage = ({ error, supportText, errorMsg }: ErrorMsgProps) => {
  return error && errorMsg ? (
    <Text size="xs" as="span" className="text-error-500">
      {errorMsg}
    </Text>
  ) : (
    supportText && (
      <Text size="xs" as="span" className="text-coolGray-600">
        {supportText}
      </Text>
    )
  );
};

export default SupportOrErrorMessage;
