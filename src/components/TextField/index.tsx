import React from "react";

import { TextFieldBase, TextFieldBaseProps } from "./TextFieldBase";

export interface TextFieldProps extends Omit<TextFieldBaseProps, "inputElement"> {}

const TextField = (props: TextFieldProps) => {
  return <TextFieldBase inputElement="input" {...props} />;
};

export default TextField;
