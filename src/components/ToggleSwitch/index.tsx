import React, { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import { IBadgeProps } from "../Badge/Badge";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

interface ToggleSwitchCustomProps {
  enabled?: boolean;
  withIcon?: boolean;
  onChange?: () => {};
}

const switchVariants = cva("relative inline-flex h-6 w-11 items-center rounded-full", {
  variants: {
    enabled: {
      true: "bg-primary-200 hover:bg-primary-300",
      false: "bg-gray-100 hover:bg-gray-200",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
  },
});

type SwitchVariantsProps = VariantProps<typeof switchVariants>;

export interface ToggleSwitchProps
  extends Omit<SwitchVariantsProps, "enabled">,
    ToggleSwitchCustomProps {}

export const ToggleSwitch = ({
  enabled = false,
  onChange,
  disabled = false,
  withIcon = true,
}: ToggleSwitchProps) => {
  //const [enabled, setEnabled] = useState(enabled);

  return (
    <Switch checked={enabled} onChange={onChange} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button className={switchVariants({ enabled: checked, disabled })}>
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 rounded-full bg-white transition`}
          >
            {withIcon &&
              (checked ? (
                <CheckIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
              ) : (
                <XMarkIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
              ))}
          </span>
        </button>
      )}
    </Switch>
  );
};

export default ToggleSwitch;
