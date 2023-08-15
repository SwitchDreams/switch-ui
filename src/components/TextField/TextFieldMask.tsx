import React from "react";
import InputMask from "react-input-mask";

import { TextFieldBase, TextFieldBaseProps } from "./TextFieldBase";

export interface TextFieldProps extends Omit<TextFieldBaseProps, "inputElement"> {}

const TextField = (props: TextFieldProps) => {
  return <TextFieldBase inputElement={InputMask} {...props} />;
};

export default TextField;
