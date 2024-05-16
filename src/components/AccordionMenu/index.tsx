import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AccordionMenuType extends HTMLAttributes<any> {
  title: string;
  children?: ReactNode;
  size?: "lg" | "md" | "sm";
}

export type AccordionMenuVariantProps = VariantProps<typeof accordionMenuVariants>;

const accordionMenuVariants = cva(
  "accordion-button flex w-full cursor-pointer items-center justify-between py-4 text-left font-medium text-gray-900",
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

const accordionInfosVariants = cva("accordion-infos text-gray-600", {
  variants: {
    size: {
      lg: "pb-6 text-md",
      md: "pb-5 text-sm",
      sm: "pb-4 text-xs",
    },
  },
});

export interface AccordionMenuProps
  extends Omit<AccordionMenuVariantProps, "size">,
    AccordionMenuType {}

export const AccordionMenu = /* @__PURE__ */ ({
  title,
  size = "md",
  children,
  className,
  ...rest
}: AccordionMenuProps) => {
  const accordionMenuClasses = twMerge(accordionMenuVariants({ size }), className);
  return (
    <Disclosure as="div" className="border border-x-0 border-t-0 border-gray-100" {...rest}>
      {({ open }) => (
        <>
          <DisclosureButton
            className={
              open
                ? `${accordionMenuClasses} accordion-button text-primary-300`
                : accordionMenuClasses
            }
          >
            {title}
            {open ? (
              <ChevronDownIcon strokeWidth="3" className="align-center flex h-4 w-4" />
            ) : (
              <ChevronUpIcon strokeWidth="3" className="align-center flex h-4 w-4" />
            )}
          </DisclosureButton>
          <DisclosurePanel className={accordionInfosVariants({ size })}>{children}</DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
