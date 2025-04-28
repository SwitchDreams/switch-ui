import { XMarkIcon } from "@heroicons/react/24/solid";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Button, { ButtonProps } from "../Button";

export interface IModalProps {
  confirmLabel?: string;
  cancelLabel?: string;
  children: ReactNode;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelOutline?: boolean;
  confirmOutline?: boolean;
  iconConfirm?: React.ElementType<ButtonProps> | undefined;
  error?: boolean;
  loading?: boolean;
  buttons?: boolean;
  handleClose?: () => void;
  className?: string;
}

const ModalVariants = cva(
  "fixed z-100 h-auto w-full rounded-lg bg-white max-md:bottom-0 md:left-1/2 md:top-1/2 md:min-w-[40rem] md:max-w-[52rem] md:-translate-x-1/2 md:-translate-y-1/2",
  {
    variants: {
      open: {
        true: "",
        false: "hidden",
      },
    },
  },
);

const BgVariants = cva("fixed right-0 top-0 z-50 h-full w-screen bg-gray-500 opacity-40", {
  variants: {
    open: {
      true: "",
      false: "hidden",
    },
  },
});

const CancelButtonVariants = cva("w-full rounded-md border py-3", {
  variants: {
    error: {
      true: "border-gray-400 bg-white text-gray-400 hover:bg-gray-300",
      false: "text-primary-500",
    },
    cancelOutline: {
      true: "btn-outline",
    },
  },
});

const ConfirmButtonVariants = cva("w-full rounded-md py-3 text-white", {
  variants: {
    error: {
      true: "bg-error-500 hover:bg-error-400",
      false: "bg-primary-500",
    },
    confirmOutline: {
      true: "btn-outline",
    },
  },
});

type ModalVariantProps = VariantProps<typeof ModalVariants>;

export interface ModalProps extends ModalVariantProps, IModalProps {}

const Modal = ({
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  children,
  onClickCancel,
  onClickConfirm,
  open,
  setOpen,
  cancelOutline = true,
  confirmOutline,
  iconConfirm,
  error,
  loading = false,
  buttons = true,
  className,
}: ModalProps) => {
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={` ${twMerge(BgVariants({ open }))} `} onClick={handleClose} />
      <div className={`${twMerge(ModalVariants({ open }), className)}`}>
        <div className="relative z-50 h-full w-full gap-12 p-5">
          <XMarkIcon
            data-testid="close-button"
            className="absolute right-4 top-4 h-6 w-6 cursor-pointer text-gray-500"
            onClick={handleClose}
          />
          <div className="h-fit">{children}</div>
          {buttons && (
            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <Button
                label={cancelLabel}
                onClick={onClickCancel}
                className={`${twMerge(CancelButtonVariants({ error, cancelOutline }))} ${
                  !cancelLabel && "hidden"
                }`}
              />
              <Button
                label={confirmLabel}
                className={`${twMerge(ConfirmButtonVariants({ error, confirmOutline }))} ${
                  !confirmLabel && "hidden"
                }`}
                onClick={onClickConfirm}
                iconSide="left"
                disabled={loading}
                icon={iconConfirm && iconConfirm}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
