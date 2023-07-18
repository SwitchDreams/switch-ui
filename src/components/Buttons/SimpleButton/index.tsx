import { SimpleButtonProps, classGenerator } from "./types"

const SimpleButton = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  label,
  iconSide,
  icon: Icon,
  onClick
}: SimpleButtonProps) => {
  return (
    <button className={classGenerator(variant, size, disabled) + " rounded-md"}>
      {(Icon && iconSide == 'right') && <Icon className="" />}
      <p>{label}</p>
      {(Icon && iconSide == 'left') && <Icon className="" />}
    </button>
  )
}

export default SimpleButton;