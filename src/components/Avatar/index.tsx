import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface AvatarType extends HTMLAttributes<any> {
  color?: "primary" | "gray";
  isOn?: boolean;
  name: string;
  avatarUrl?: string;
  size?: "xl" | "lg" | "md" | "sm" | "xs";
}

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;

export const avatarVariants = cva(
  "absolute inline-flex flex-col items-center justify-center gap-2 rounded-full hover:opacity-80",
  {
    variants: {
      color: {
        primary: ["bg-primary-25 text-primary-400"],
        gray: ["bg-gray-100 text-gray-600"],
      },
      size: {
        xl: "h-16 w-16 text-2xl",
        lg: "h-14 w-14 text-xl",
        md: "h-12  w-12 text-lg",
        sm: "h-10 w-10 text-md",
        xs: "h-8 w-8 text-sm",
      },
    },
  },
);

export const avatarOnlineVariants = cva(
  "online-circle relative h-4 w-4 rounded-[20px] border border-white bg-green-600",
  {
    variants: {
      size: {
        xl: "left-12 top-12",
        lg: "left-10 top-10",
        md: "left-9 top-9 h-3 w-3",
        sm: "left-7 top-7 h-3 w-3",
        xs: "left-6 top-6  h-2 w-2",
      },
    },
  },
);

export interface AvatarProps extends Omit<AvatarVariantProps, "color" | "size">, AvatarType {}

const Avatar = ({
  color = "primary",
  isOn = false,
  name,
  avatarUrl,
  size = "md",
  className,
}: AvatarProps) => {
  const avatarClass = twMerge(avatarVariants({ color, size }), className);
  const avatarOnlineClass = twMerge(avatarOnlineVariants({ size }), className);

  const getInitials = (name: string) => {
    const nameWords = name.trim().split(" ");

    if (nameWords.length === 1) {
      return nameWords[0].slice(0, 2).toUpperCase();
    } else {
      const firstNameInitial = nameWords[0][0].toUpperCase();
      const lastNameInitial = nameWords[nameWords.length - 1][0].toUpperCase();
      return firstNameInitial + lastNameInitial;
    }
  };

  return (
    <>
      <div className={avatarUrl ? `bg-${avatarUrl} overflow-hidden ${avatarClass}` : avatarClass}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="foto do usuário" />
        ) : (
          <div className="text-center font-medium leading-[31.20px]">{getInitials(name)}</div>
        )}
      </div>
      {isOn && <div className={avatarOnlineClass}></div>}
    </>
  );
};

export default Avatar;
