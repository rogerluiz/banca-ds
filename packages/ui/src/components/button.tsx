import { CSS } from '@stitches/react';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { styled } from '../themes/config';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  /**
   * The color of the button
   * @default blue
   */
  color?: 'blue' | 'yellow' | 'dark';
  css?: CSS;
}
/**
 * The button component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, ...rest }, ref) => {
    return <Base ref={ref} color={color} {...rest} />;
  },
);

Button.displayName = 'Button';

const Base = styled('button', {
  all: 'unset',
  appearance: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: '$16',
  py: '$8',

  variants: {
    variant: {},
    color: {
      blue: {
        color: '$blue5',
        backgroundColor: '$blue1',
      },
      yellow: {
        color: '$yellow5',
        backgroundColor: '$yellow1',
      },
      dark: {
        color: '$loContrast',
        backgroundColor: '$dark1',
      },
    },
  },

  defaultVariants: {
    color: 'blue',
  },
});
