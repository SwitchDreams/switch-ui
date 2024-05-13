import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Element = "dt" | "dd" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "legend";

export interface IText extends HTMLAttributes<any> {
  as?: Element;
  children?: ReactNode;
  className?: string;
}

const TextVariants = cva("font-default", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-xs md:text-sm",
      md: "text-sm md:text-md",
      lg: "text-md md:text-lg",
      xl: "text-lg md:text-xl",
      "2xl": "text-xl md:text-2xl",
      "3xl": "text-2xl md:text-3xl",
      "4xl": "text-3xl md:text-4xl",
      "5xl": "text-4xl md:text-5xl",
      "6xl": "text-5xl md:text-6xl",
      "7xl": "text-6xl md:text-7xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TextProps extends IText, VariantProps<typeof TextVariants> {}

export const Text = ({ children, size = "md", as = "p", className, ...rest }: TextProps) => {
  const TextComponent = as;
  const variantClassName = TextVariants({ size });

  return (
    <TextComponent className={twMerge(variantClassName, className)} {...rest}>
      {children}
    </TextComponent>
  );
};
