import { XMarkIcon } from "@heroicons/react/24/solid"

export interface BadgeProps {
  label: string
  icon?: boolean
  iconSide?: "right" | "left"
  type?: "warning" | "danger" | "success" | "default"
  outline?: boolean
  opacity?: boolean
  switchCore?: "primary" | "secondary" | "tertiary"
}

export const Badge = ({
  label,
  icon = false,
  iconSide = "right",
  type = "default",
  outline = false,
  opacity = false,
  switchCore = "primary",
}: BadgeProps) => {
  let className =
    "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl"

  switch (type) {
    case "success": {
      className +=
        outline && opacity
          ? " border text-success-600 border-success-600 bg-success-50"
          : outline
          ? " border text-success-600 border-success-600"
          : opacity
          ? " text-success-600 bg-success-50"
          : " text-gray-white bg-success-600"
      break
    }
    case "danger": {
      className +=
        outline && opacity
          ? " border text-error-600 border-error-600 bg-error-50"
          : outline
          ? " border text-error-600 border-error-600"
          : opacity
          ? " text-error-600 bg-error-50"
          : " text-gray-white bg-error-600"
      break
    }
    case "warning": {
      className +=
        outline && opacity
          ? " border text-orange-500 border-orange-500 bg-orange-50"
          : outline
          ? " border text-orange-500 border-orange-500"
          : opacity
          ? " text-orange-500 bg-orange-50"
          : " text-black bg-orange-500"
      break
    }
    default: {
      if (switchCore === "primary") {
        className =
          "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl text-primary-300 bg-primary-25"
      } else if (switchCore === "secondary") {
        className =
          "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl text-secondary-800 bg-secondary-25"
      } else {
        className =
          "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl text-orange-700 bg-orange-25"
      }
    }
  }

  return (
    <div className={className}>
      {iconSide === "left" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
      <p>{label}</p>
      {iconSide === "right" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
    </div>
  )
}
