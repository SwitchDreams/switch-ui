import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ToastType extends HTMLAttributes<any> {
  variant?: "tonal" | "filled";
  title: string;
  color?: "primary" | "success" | "warning" | "error";
  message: string;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type ToastVariantProps = VariantProps<typeof toastVariants>;

export const toastVariants = cva(
  "toast-component flex h-auto w-[327px] justify-between gap-3 rounded-md bg-primary-50 px-4 py-5 text-sm md:w-[541px]",
  {
    variants: {
      color: {
        primary: "border-primary-100 bg-primary-25 text-primary-400",
        success: "border-success-200 bg-success-50 text-success-700",
        warning: "border-warning-200 bg-warning-50 text-warning-700",
        error: "border-error-200 bg-error-50 text-error-700",
      },
      variant: {
        tonal: "border",
        filled: "",
      },
    },
    compoundVariants: [
      {
        variant: "tonal",
        color: "primary",
        class: "bg-primary-300 text-white",
      },
      {
        variant: "tonal",
        color: "success",
        class: "bg-success-500 text-gray-950",
      },
      {
        variant: "tonal",
        color: "warning",
        class: "bg-warning-500 text-gray-950",
      },
      {
        variant: "tonal",
        color: "error",
        class: "bg-error-500 text-white",
      },
    ],
  },
);
export interface ToastProps extends Omit<ToastVariantProps, "color" | "variant">, ToastType {}

const Toast = ({
  variant = "tonal",
  title,
  color = "primary",
  message,
  onClose,
  className,
}: ToastProps) => {
  const [isClose, setIsClose] = useState(false);
  const toastClass = twMerge(toastVariants({ color, variant }), className);

  const closeToast = () => {
    setIsClose(true);
    if (onClose) onClose;
  };

  const defineIcon = (color: string) => {
    if (color == "primary" || color == "error") {
      return <ExclamationCircleIcon className="toast-icon exclamation-circle h-5 w-5" />;
    }
    if (color == "success") {
      return <CheckCircleIcon className="toast-icon check-circle h-5 w-5" />;
    }
    if (color == "warning") {
      return <ExclamationTriangleIcon className="toast-icon exclamation-triangle h-5 w-5" />;
    }
  };

  return (
    <div className={isClose ? "toast-component hidden" : toastClass}>
      {defineIcon(color)}
      <div className="w-11/12">
        <h1 className="font-semibold">{title}</h1>
        <p>{message}</p>
      </div>
      <div
        onClick={() => {
          closeToast();
        }}
        className="close-toast h-5 cursor-pointer"
      >
        <XMarkIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Toast;
