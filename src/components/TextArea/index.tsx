import React from "react";

import { TextFieldBase, TextFieldBaseProps } from "../TextField/TextFieldBase";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextAreaProps
  extends Omit<TextFieldBaseProps, "leftIcon" | "rightIcon" | "inputElement"> {}

const TextArea = (props: TextAreaProps) => {
  return <TextFieldBase inputElement="textarea" className="h-32 pt-2" {...props} />;
};

export default TextArea;
