import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export interface IHelloWorld {
  text: string;
}

const helloWorldVariants = cva("button", {
  variants: {
    intent: {
      primary: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
      secondary: "border-gray-400 bg-white text-gray-800 hover:bg-gray-100",
    },
    size: {
      small: "px-2 py-1 text-sm",
      medium: "text-base px-4 py-2",
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
