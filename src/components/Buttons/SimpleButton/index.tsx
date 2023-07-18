import { ButtonType, classGenerator } from "./types";

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  label,
  iconSide,
  icon: Icon,
  onClick
}: ButtonType) => {
  return (
    <button className={classGenerator(variant, size, disabled) + " rounded-md flex items-center justify-center"}>
      {(Icon && iconSide == 'right') && <Icon className="" />}
      {label}
      {(Icon && iconSide == 'left') && <Icon className="" />}
    </button>
  )
}

export default Button;