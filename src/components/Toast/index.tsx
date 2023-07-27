

import { cva, type VariantProps } from "class-variance-authority";
import React, { ElementType, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ExclamationCircleIcon, XMarkIcon, CheckBadgeIcon, ExclamationTriangleIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";


interface ToastType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'tonal' | 'filled' ;
  title: string;
  color: 'primary' | 'success' | 'warning' | 'error';
  message: string;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type ToastVariantProps = VariantProps<typeof toastVariants>;

export const toastVariants = cva(
  "w-[541px] h-auto justify-between px-4 py-5 rounded-md flebg-primary-50 flex gap-3 text-sm", {
  variants: {
    color: {  
      primary: "bg-primary-25 border-primary-100 text-primary-400",
      success: "bg-success-50 border-success-200 text-success-700",
      warning: "bg-warning-50 border-warning-200 text-warning-700",
      error: "bg-error-50 border-error-200 text-error-700",
    },
    variant: {
      tonal: 'border',
      filled: '',
    }
  },
  compoundVariants: [
    {
      variant: 'tonal', color: 'primary', class: "bg-primary-300 text-white"
    },
    {
      variant: 'tonal', color: 'success', class: "bg-success-500 text-gray-950"
    },
    {
      variant: 'tonal', color: 'warning', class: "bg-warning-500 text-gray-950"
    },
    {
      variant: 'tonal', color: 'error', class: "bg-error-500 text-white"
    }
  ]
});
export interface ToastProps extends Omit<ToastVariantProps, 'color' | 'variant'>, ToastType {}

const Toast = ({
  variant = 'tonal',
  title,
  color='primary',
  message,
  onClose,
  className
}: ToastProps) => {
  const [isClose, setIsClose] = useState(false)
  const toastClass = twMerge(toastVariants({ color, variant}), className);

  const closeToast = () => {
    setIsClose(true)
  }

  const defineIcon = (color: string) => {
    if(color == 'primary' || color == 'error') {
      return <ExclamationCircleIcon className="h-5 w-5" />
    }
    if(color == 'success') {
      return <CheckBadgeIcon className="h-5 w-5" />
    }
    if(color == 'warning') {
      return <ExclamationTriangleIcon className="h-5 w-5" />
    }
  }

  return (
    <div className={isClose ? 'hidden' : toastClass}>
      {defineIcon(color)}
      <div className="w-11/12">
        <h1 className="font-semibold">{title}</h1>
        <p>{message}</p>
        <div className="flex gap-2">
          <div>action 1</div>
          <div>action 2</div>
        </div>
      </div>
      <div onClick={() => {closeToast(), onClose}} className="cursor-pointer">
        <XMarkIcon className="h-5 w-5" />
      </div>
    </div>
  )
}

export default Toast;