import React from 'react';
import { styled } from '../../themes/config';

export interface LogoIconProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Tamanho do icone `Sizes`
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Cor do icone
   * @default 'gray'
   */
  color?: 'primary' | 'secondary' | 'gray' | 'white' | 'black';
}

export const LogoIcon = function ({
  size = 'md',
  color = 'gray',
  ...rest
}: LogoIconProps): JSX.Element {
  return (
    <Container size={size} role="presentation" {...rest}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 170"
        aria-hidden="true"
        focusable="false"
        color={color}
      >
        <path d="M199.9 153.707h-74.563c-8.108 1.84-12.93 6.985-13.514 16.407H88.24c-1.113-8.537-5.458-14.176-13.514-16.407H.112v-.026H-.1V.05h81.293C88.4.374 93.488 3.273 99.53 11.63c4.4-8.193 12.93-11.484 20.297-11.58H199.9v153.657zM23.482 130.14h57.71c7.737.853 12.295 3.222 18.336 11.58 3.87-6.603 12.93-11.484 20.297-11.58h56.492V23.617h-50.98c-5.988.25-12.93 5.395-13.514 16.407H88.24c-.583-11.187-8.108-16.296-13.514-16.407H23.482V130.14z" />
      </SVG>
    </Container>
  );
};

LogoIcon.displayName = 'LogoIcon';

const Container = styled('div', {
  display: 'inline-block',
  position: 'relative',
  userSelect: 'none',

  variants: {
    size: {
      xs: {
        width: 19,
        height: 15,
      },
      sm: {
        width: 24,
        height: 21,
      },
      md: {
        width: 36,
        height: 31,
      },
      lg: {
        width: 50,
        height: 41,
      },
      xl: {
        width: 67,
        height: 56,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const SVG = styled('svg', {
  top: '0.04rem',
  left: 0,
  width: '100%',
  height: '100%',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  strokeLinejoin: 'round',
  strokeMiterlimit: 2,
  position: 'absolute',

  variants: {
    color: {
      primary: {
        fill: '$blue1',
      },
      secondary: {
        fill: '$yellow1',
      },
      gray: {
        fill: '$grayDark3',
      },
      white: {
        fill: '$loContrast',
      },
      black: {
        fill: '$hiContrast',
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});
