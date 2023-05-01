import { ComponentPropsWithoutRef } from 'react';
import { CSS } from '@stitches/react';

import { styled } from '../themes/config';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * O Conteudo do botão
   */
  children: React.ReactNode;
  css?: CSS;
}

export const Container = function ({ children, ...rest }: ContainerProps) {
  return <Div {...rest}>{children}</Div>;
};

Container.displayName = 'Container';

const Div = styled('div', {
  // Reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  outline: 'none',
  padding: 0,
  flexShrink: 0,

  // Custom
  width: '100%',
  mx: 'auto',
  px: '$12',

  '@sm': {
    maxWidth: '540px',
  },
  '@md': {
    maxWidth: '768px',
  },
  '@lg': {
    maxWidth: '1024px',
  },
  '@xl': {
    maxWidth: '1280px',
  },
});
