import React from "react";

import { TextFieldBase, TextFieldBaseProps } from "./TextFieldBase";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextFieldProps extends Omit<TextFieldBaseProps, "inputElement"> {}

export const TextField = /* @__PURE__ */ (props: TextFieldProps) => {
  return <TextFieldBase inputElement="input" {...props} />;
};
