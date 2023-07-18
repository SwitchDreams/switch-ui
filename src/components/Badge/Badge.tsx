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
          ? " border-2 text-success600 border-success600 bg-success50"
          : outline
          ? " border-2 text-success600 border-success600"
          : opacity
          ? " text-success600 bg-success50"
          : " text-white bg-success600"
      break
    }
    case "danger": {
      className +=
        outline && opacity
          ? " border-2 text-error600 border-error600 bg-error50"
          : outline
          ? " border-2 text-error600 border-error600"
          : opacity
          ? " text-error600 bg-error50"
          : " text-white bg-error600"
      break
    }
    case "warning": {
      className +=
        outline && opacity
          ? " border-2 text-orange500 border-orange500 bg-orange50"
          : outline
          ? " border-2 text-orange500 border-orange500"
          : opacity
          ? " text-orange500 bg-orange50"
          : " text-black bg-orange500"
      break
    }
    default: {
      if (switchCore === "primary") {
        className =
          "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl text-primary300 bg-primary25"
      } else if (switchCore === "secondary") {
        className =
          "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl text-secondary800 bg-secondary25"
      } else {
        className =
          "h-7 w-fit text-xs font-medium flex justify-center items-center gap-1 px-3 rounded-3xl text-orange700 bg-orange25"
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
