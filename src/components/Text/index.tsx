import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export interface IText {
  as: keyof JSX.IntrinsicElements;
  text: string;
}

const TextVariants = cva("text", {
  variants: {
    textSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    },
  },
  defaultVariants: {
    textSize: "md",
  },
});

export interface TextProps extends IText, VariantProps<typeof TextVariants> {
  className?: string;
}

export const Text = ({ text, as = "p", className, ...rest }: TextProps) => {
  const TextComponent = as;
  const variantClassName = TextVariants(rest);
  const mergedClassName = twMerge(variantClassName, className);

  return (
    <TextComponent className={mergedClassName} {...rest}>
      {text}
    </TextComponent>
  );
};
