import { render, screen } from "@testing-library/react";
import { describe, it, vitest } from 'vitest';
import Toast from '../index';

const onClickMock = vitest.fn();

describe('Toast Component', () => {
  const compontent = (
    variant: 'tonal' | 'filled',
    color: 'primary' | 'success' | 'warning' | 'error',
  ) => {
    return (
      <Toast
        variant= {variant}
        title= 'title'
        color= {color}
        message= 'message'
        onClose={onClickMock}
      />
    )
  }
  
  describe('test component colors', () => {
    it('test the primary color with tonal variant', () => {
      const {container} = render(compontent('tonal', 'primary'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-primary-300 text-white");
    }),
    it('test the primary color with filled variant', () => {
      const {container} = render(compontent('filled', 'primary'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-primary-25 border-primary-100 text-primary-400");
    })
    it('test the success color with tonal variant', () => {
      const {container} = render(compontent('tonal', 'success'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-success-500 text-gray-950");
    }),
    it('test the success color with filled variant', () => {
      const {container} = render(compontent('filled', 'success'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-success-50 border-success-200 text-success-700");
    })
    it('test the warning color with tonal variant', () => {
      const {container} = render(compontent('tonal', 'warning'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-warning-500 text-gray-950");
    })
    it('test the warning color with filled variant', () => {
      const {container} = render(compontent('filled', 'warning'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-warning-50 border-warning-200 text-warning-700");
    })
    it('test the error color with tonal variant', () => {
      const {container} = render(compontent('tonal', 'error'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-error-500 text-white");
    })
    it('test the errpr color with filled variant', () => {
      const {container} = render(compontent('filled', 'error'));
      const toastElement = container.querySelector('.toast-component')
      expect(toastElement).toHaveClass("bg-error-50 border-error-200 text-error-700");
    })
  })
});
