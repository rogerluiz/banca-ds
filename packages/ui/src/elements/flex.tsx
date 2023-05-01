import { ComponentPropsWithRef } from 'react';
import { CSS } from '@stitches/react';

import { styled } from '../themes/config';

type GapSpaces = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Direction = 'row' | 'column' | 'rowReverse' | 'columnReverse';

export interface FlexProps extends ComponentPropsWithRef<'div'> {
  /**
   * O Conteudo do botão
   */
  children: React.ReactNode;
  /**
   * Define como os flex items são colocados no
   * flex container definindo o eixo principal e a direção
   *
   * @default 'row'
   */
  direction?: Direction;
  /**
   * Define o valor de alinhamento próprio em todos os filhos diretos como um grupo
   *
   * @default 'stretch'
   */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /**
   * Define como o navegador distribui o espaço entre e ao redor
   * dos itens de conteúdo ao longo do eixo principal de um flex container,
   *
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between';
  /**
   * Define se o flex container é single-line ou multi-line e a direção do cross-axis
   * @default 'noWrap'
   */
  wrap?: 'noWrap' | 'wrap' | 'wrapReverse';
  /**
   * Define o tamanho sa lacuna entra colunas e linhas
   */
  gap?: GapSpaces;
  /**
   * Define a margem inferior
   */
  marginBottom?: 1 | 2 | 3 | 4 | 5;
  css?: CSS;
}

/**
 * Flex component
 */
export const Flex = function ({
  children,
  direction,
  align,
  justify,
  wrap,
  gap,
  marginBottom,
  css,
  ...rest
}: FlexProps) {
  return (
    <StyledFlex
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      gap={gap}
      marginBottom={marginBottom}
      css={css as any}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};

Flex.displayName = 'Flex';

const StyledFlex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      1: {
        gap: '$4',
      },
      2: {
        gap: '$8',
      },
      3: {
        gap: '$12',
      },
      4: {
        gap: '$16',
      },
      5: {
        gap: '$20',
      },
      6: {
        gap: '$24',
      },
      7: {
        gap: '$28',
      },
      8: {
        gap: '$32',
      },
      9: {
        gap: '$36',
      },
    },
    marginBottom: {
      1: {
        marginBottom: '$4',
      },
      2: {
        marginBottom: '$8',
      },
      3: {
        marginBottom: '$12',
      },
      4: {
        marginBottom: '$16',
      },
      5: {
        marginBottom: '$20',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});
