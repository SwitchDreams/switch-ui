import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface AccordingMenuType extends HTMLAttributes<any> {
  title: string;
  infos: string;
  size?: "lg" | "md" | "sm";
}

export type AccordingMenuVariantProps = VariantProps<typeof accordingMenuVariants>;

export const accordingMenuVariants = cva(
  "according-button flex w-full cursor-pointer items-center justify-between py-4 text-left font-medium text-gray-900",
  {
    variants: {
      size: {
        lg: "py-5 text-lg",
        md: "py-4 text-md",
        sm: "py-3 text-sm",
      },
    },
  },
);

export const accordingInfosVariants = cva("according-infos text-gray-700", {
  variants: {
    size: {
      lg: "pb-6 text-md",
      md: "pb-5 text-sm",
      sm: "pb-4 text-xs",
    },
  },
});

export interface AccordingMenuProps
  extends Omit<AccordingMenuVariantProps, "size">,
    AccordingMenuType {}

const AccordingMenu = ({ title, infos, size = "md", className }: AccordingMenuProps) => {
  const accordingMenuClasses = twMerge(accordingMenuVariants({ size }), className);
  return (
    <Disclosure as="div" className="border border-x-0 border-t-0 border-gray-100">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={
              open
                ? `${accordingMenuClasses} according-button text-primary-300`
                : accordingMenuClasses
            }
          >
            {title}
            {open ? (
              <ChevronDownIcon stroke-width="3" className="align-center flex h-4 w-4" />
            ) : (
              <ChevronUpIcon stroke-width="3" className="align-center flex h-4 w-4" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className={accordingInfosVariants({ size })}>{infos}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AccordingMenu;
