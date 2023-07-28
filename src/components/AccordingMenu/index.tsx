import { Disclosure } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

interface AccordingMenuType extends HTMLAttributes<any> {
  title: string;
  infos: string;
  size?: "lg" | "md" | "sm";
}

export type AccordingMenuVariantProps = VariantProps<typeof accordingMenuVariants>;

export const accordingMenuVariants = cva("w-full font-medium text-left flex justify-between items-center py-4 text-gray-900 cursor-pointer", {
  variants: {
    size: {
      lg: "py-5 text-lg",
      md: "py-4 text-md",
      sm: "py-3 text-sm",
    },
  },
});

export const accordingInfosVariants = cva("text-gray-700", {
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
  const accordingMenuClasses = twMerge(accordingMenuVariants({size }), className)
  return (
    <Disclosure as='div' className="border border-gray-100 border-x-0 border-t-0">
      {({ open }) => (
        <>
        <Disclosure.Button className={open ? `${accordingMenuClasses} text-primary-300` : accordingMenuClasses}>
          {title}
          {
            open ? <ChevronDownIcon stroke-width="3" className="w-4 h-4 flex align-center"/> : <ChevronUpIcon stroke-width="3" className="w-4 h-4 flex align-center"/>
          }
        </Disclosure.Button>
        <Disclosure.Panel className={accordingInfosVariants({size})}>
          {infos}
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AccordingMenu;
