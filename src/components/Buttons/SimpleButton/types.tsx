import React, { ElementType } from "react";
export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantType;
  size: SizeType;
  disabled: boolean;
  label: string;
  iconSide?: 'left' | 'right';
  icon?: ElementType;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type VariantType = 
| 'primary' 
| 'primary' 
| 'primary-outlined' 
| 'gray-outlined' 
| 'primary-text' 
| 'gray-test'
| 'primary-link'
| 'gray-link';


export type SizeType = 
| 'xl'
| 'lg' 
| 'md' 
| 'sm' 
| 'xs';

export const classGenerator = (variant: VariantType, size: SizeType, disabled: boolean) => {
  const background = backgroundColorDefault[variant];
  const backgroundHover = backgroundColorHover[variant];
  const backgroundPrecessed = backgroundColorActive[variant];
  const backgroundFocus = backgroundColorFocused[variant];
  const textSizeValue = textSize[size];
  const textColorHex = textColor[variant];
  const padding = variantPadding[size];
  const border = borderColor[variant];
  const backgroundOpacity = disabled ? 'opacity-40' : '';

  const classNames = `${background} ${textSizeValue} ${textColorHex} ${padding} ${backgroundHover} ${backgroundPrecessed} ${backgroundFocus} ${backgroundOpacity} ${border}`;
  return classNames;
}

export const textSize: { [id: string]: string } = {
  'xl': 'text-base',
  'lg': 'text-sm',
  'md': 'text-sm',
  'small': 'text-sm',
  'extra-small': 'text-xl',
};

export const variantPadding: { [id: string]: string } = {
  'xl': 'w-182',
  'lg': 'w-155',
  'md': 'w-147',
  'small': 'w-139',
  'extra-small': 'w-108',
};

const backgroundColorDefault: { [id: string]: string } = {
  'primary': 'bg-primary-300',
  'tonal': 'bg-primary-25',
  'primary-outlined': 'bg-white',
  'gray-outlined': 'bg-white',
  'primary-text': 'bg-white',
  'gray-test': 'bg-white',
  'primary-link':'bg-white',
  'gray-link': 'bg-white',
};

const backgroundColorHover: { [id: string]: string } = {
  'primary': 'hover:bg-primary-400',
  'tonal': 'hover:bg-primary-50',
  'primary-outlined': 'hover:bg-primary-25',
  'gray-outlined': 'hover:bg-gray-50',
  'primary-text': 'hover:bg-primary-25',
  'gray-test': 'hover:bg-gray-50',
  'primary-link':'hover:bg-white',
  'gray-link': 'hover:bg-white',
};

const backgroundColorActive: { [id: string]: string } = {
  'primary': 'active:bg-primary-500',
  'tonal': 'active:bg-primary-100',
  'primary-outlined': 'active:bg-primary-100',
  'gray-outlined': 'active:bg-gray-100',
  'primary-text': 'active:bg-primary-50',
  'gray-test': 'active:bg-gray-100',
  'primary-link':'active:bg-white',
  'gray-link': 'active:bg-white',
};

const backgroundColorFocused: { [id: string]: string } = {
  'primary': 'focus:bg-primary-300',
  'tonal': 'focus:bg-primary-25',
  'primary-outlined': 'focus:bg-white',
  'gray-outlined': 'focus:bg-white',
  'primary-text': 'focus:bg-white',
  'gray-test': 'focus:bg-white',
  'primary-link':'focus:bg-white',
  'gray-link': 'focus:bg-white',
};

const borderColor: { [id: string]: string } = {
  'primary': 'border-none',
  'tonal': 'border-none',
  'primary-outlined': 'border border-solid border-primary-50',
  'gray-outlined': ' border border-solid border-gray-100',
  'primary-text': 'border-none',
  'gray-test': 'border-none',
  'primary-link':'border-none',
  'gray-link': 'border-none',
};

const textColor: { [id: string]: string } = {
  'primary': 'text-white',
  'tonal': 'text-primary-500',
  'primary-outlined': 'text-primary-300',
  'gray-outlined': 'text-gray-800',
  'primary-text': 'text-primary-300',
  'gray-test': 'text-gray-800',
  'primary-link':'text-primary-300',
  'gray-link': 'text-gray-800',
};

