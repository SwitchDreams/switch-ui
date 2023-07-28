import { Disclosure } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface AccordingMenuType extends HTMLAttributes<any> {
  title: string;
  infos: string;
  size: "lg" | "md" | "sm";
}

export type AccordingMenuVariantProps = VariantProps<typeof accordingMenuVariants>;

export const accordingMenuVariants = cva("relative m-1 cursor-default select-none rounded pl-2", {
  variants: {
    size: {
      lg: "x-1 py-3 text-md",
      md: "x-0.5 py-2 text-md",
      sm: "x py-1 text-md",
    },
  },
});

export interface AccordingMenuProps
  extends Omit<AccordingMenuVariantProps, "size">,
    AccordingMenuType {}

const AccordingMenu = ({ title, infos, size = "md" }: AccordingMenuProps) => {
  return (
    <Disclosure>
      <Disclosure.Button className="border-b-1 border-gray-100 bg-primary-100 py-6 text-gray-900">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire team.
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default AccordingMenu;
