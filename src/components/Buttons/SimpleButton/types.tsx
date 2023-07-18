export interface SimpleButtonProps {
  variant: VariantType;
  size: SizeType;
  status?: StatusType;
  label: string;
  iconSide?: 'left';
  icon?: '';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type VariantType = 
| 'tonal' 
| 'primary' 
| 'primary-outlined' 
| 'gray-outlined' 
| 'primary-text' 
| 'gray-test'
| 'primary-link'
| 'gray-link';

export type StatusType = 
| 'default'
| 'hover' 
| 'pressed' 
| 'focused' 
| 'disabled';

export type SizeType = 
| 'extra-large'
| 'large' 
| 'medium' 
| 'small' 
| 'extra-small';

export const BackgroundColor = ({status, variant} : SimpleButtonProps) => {
  if(status =='default') {
    return backgroundColorDefault[variant];
  }
  if(status =='hover') {
    return backgroundColorHover[variant];
  }
  if(status =='pressed') {
    return backgroundColorPressed[variant];
  }
  if(status =='focused' || 'disabled') {
    return backgroundColorFocused[variant];
  }
}

export const variantHeight: { [id: string]: string } = {
  'extra-large': '56',
  'large': '48',
  'medium': '44',
  'small': '40',
  'extra-small': '34',
};

export const backgroundColorDefault: { [id: string]: string } = {
  'tonal': 'primary-300',
  'primary': 'primary-25',
  'primary-outlined': 'white',
  'gray-outlined': 'white',
  'primary-text': 'white',
  'gray-test': 'white',
  'primary-link':'white',
  'gray-link': 'white',
};

export const backgroundColorHover: { [id: string]: string } = {
  'tonal': 'primary-400',
  'primary': 'primary-50',
  'primary-outlined': 'primary-25',
  'gray-outlined': 'gray-50',
  'primary-text': 'primary-25',
  'gray-test': 'gray-50',
  'primary-link':'white',
  'gray-link': 'white',
};

export const backgroundColorPressed: { [id: string]: string } = {
  'tonal': 'primary-500',
  'primary': 'primary-100',
  'primary-outlined': 'primary-100',
  'gray-outlined': 'gray-100',
  'primary-text': 'primary-50',
  'gray-test': 'gray-100',
  'primary-link':'white',
  'gray-link': 'white',
};

export const backgroundColorFocused: { [id: string]: string } = {
  'tonal': 'primary-300',
  'primary': 'primary-25',
  'primary-outlined': 'white',
  'gray-outlined': 'white',
  'primary-text': 'white',
  'gray-test': 'white',
  'primary-link':'white',
  'gray-link': 'white',
};

export const borderColor: { [id: string]: string } = {
  'tonal': 'none',
  'primary': 'none',
  'primary-outlined': 'primary-50',
  'gray-outlined': 'gray-100',
  'primary-text': 'none',
  'gray-test': 'none',
  'primary-link':'none',
  'gray-link': 'none',
};

export const textColor: { [id: string]: string } = {
  'tonal': 'white',
  'primary': 'primary-500',
  'primary-outlined': 'primary-50',
  'gray-outlined': 'gray-800',
  'primary-text': 'primary-300',
  'gray-test': 'gray-800',
  'primary-link':'primary-300',
  'gray-link': 'gray-800',
};

