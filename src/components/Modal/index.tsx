import "react-spring-bottom-sheet/dist/style.css";

import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import Button, { ButtonProps } from "../Button";

export interface ModalProps {
  confirmLabel?: string;
  cancelLabel?: string;
  children?: ReactNode;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelOutline?: boolean;
  confirmOutline?: boolean;
  iconConfirm?: React.ElementType<ButtonProps> | undefined;
  error?: boolean;
  loading?: boolean;
  buttons?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
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
  onClose,
}: ModalProps) => {
  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };
  const handleDismiss = () => {
    handleClose();
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-screen bg-gray-500 opacity-40 max-md:hidden ${
          !open && "hidden"
        }`}
        onClick={() => {
          setOpen(!open);
          if (onClose) {
            onClose();
          }
        }}
      />
      <div
        className={`fixed left-1/2 top-1/2 z-[100] h-auto min-w-[40rem] max-w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white max-md:hidden ${
          !open && "hidden"
        }`}
      >
        <div className="relative z-50 h-full w-full gap-12 p-5">
          <XMarkIcon
            className="absolute right-4 top-4 h-6 w-6 cursor-pointer text-gray-500"
            onClick={() => {
              setOpen(!open);
              if (onClose) {
                onClose();
              }
            }}
          />
          <div className="h-fit">{children}</div>
          {buttons && (
            <div className="mt-8 flex gap-4">
              <Button
                label={cancelLabel}
                onClick={onClickCancel}
                className={`w-full rounded-md border ${
                  error
                    ? "border-gray-400 bg-white text-gray-400 hover:bg-gray-300"
                    : "text-primary-500"
                } py-3 ${cancelOutline && "btn-outline"} ${!cancelLabel && "hidden"}`}
              />
              <Button
                label={confirmLabel}
                className={`w-full rounded-md ${
                  error ? "bg-error-500 hover:bg-error-400" : "bg-primary-500"
                } py-3 text-white ${confirmOutline && "btn-outline"} ${!confirmLabel && "hidden"}`}
                onClick={onClickConfirm}
                iconSide="left"
                disabled={loading}
                icon={iconConfirm && iconConfirm}
              />
            </div>
          )}
        </div>
      </div>
      <BottomSheet
        className="z-50 bg-white md:hidden"
        open={open}
        onDismiss={handleDismiss}
        snapPoints={({ maxHeight }) => [maxHeight * 0.85]}
      >
        <div className="flex flex-col items-center gap-4 p-8">
          <div className="h-fit min-h-[25rem]">{children}</div>
          <div className="mt-auto w-full">
            {buttons && (
              <div className="absolute bottom-8 flex w-[85%] flex-col gap-2 max-md:p-1">
                <Button
                  label={cancelLabel}
                  onClick={onClickCancel}
                  className={`btn-outline w-full rounded-md border border-primary-500 py-3 text-primary-500 ${
                    error
                      ? "border-gray-400 bg-white text-gray-400 hover:bg-gray-300"
                      : "text-primary-500"
                  } ${!cancelLabel && "hidden"}`}
                />
                <Button
                  label={confirmLabel}
                  className={`w-full rounded-md py-3 text-white ${
                    error ? "bg-error-500 hover:bg-error-400" : "bg-primary-500"
                  } ${!confirmLabel && "hidden"}`}
                  iconSide="left"
                  icon={iconConfirm && iconConfirm}
                  onClick={onClickConfirm}
                  disabled={loading}
                />
              </div>
            )}
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

export default Modal;
