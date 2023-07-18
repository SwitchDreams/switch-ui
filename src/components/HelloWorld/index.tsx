import { cva, type VariantProps } from "class-variance-authority";
import React, { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export interface IHelloWorld {
  text: string;
}

const helloWorldVariants = cva("button", {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface HelloWorldProps
  extends Omit<HTMLProps<HTMLDivElement>, "size">,
    IHelloWorld,
    VariantProps<typeof helloWorldVariants> {}

export const HelloWorld = ({ intent, size, text, className, ...rest }: HelloWorldProps) => {
  return (
    <div className={twMerge(helloWorldVariants({ intent, size }), className)} {...rest}>
      This is test text: {text}
    </div>
  );
};
