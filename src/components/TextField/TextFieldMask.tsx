import InputMask from "@mona-health/react-input-mask";
import React from "react";

import { TextFieldBase, TextFieldBaseProps } from "./TextFieldBase";

export interface TextFieldProps extends Omit<TextFieldBaseProps, "inputElement"> {}

const TextFieldMask = (props: TextFieldProps) => {
  return <TextFieldBase inputElement={InputMask} {...props} />;
};

export default TextFieldMask;
