import React from "react";

import { TextFieldBase, TextFieldBaseProps } from "../TextField/TextFieldBase";

export interface TextAreaProps
  extends Omit<TextFieldBaseProps, "leftIcon" | "rightIcon" | "inputElement"> {}

const TextArea = (props: TextAreaProps) => {
  return <TextFieldBase inputElement="textarea" className="h-32" {...props} />;
};

export default TextArea;
