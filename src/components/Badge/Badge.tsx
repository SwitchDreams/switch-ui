import { XMarkIcon } from "@heroicons/react/24/solid"
import React from "react"

export interface BadgeProps {
  label: string
  icon?: boolean
  iconSide?: "right" | "left"
}

export const Badge = ({ label, icon, iconSide = "right" }: BadgeProps) => {
  return (
    <div className="h-7 w-fit text-xs font-medium flex justify-center items-center bg-red-50 gap-1 px-3 rounded-3xl">
      {iconSide === "left" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
      <p>{label}</p>
      {iconSide === "right" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
    </div>
  )
}
