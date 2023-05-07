import 'highlight.js/styles/github.css';

import { ReactElement } from 'react';

import { styled } from '@banca-ds/ui';

import { Code } from './code';

interface StackProps {
  children?: ReactElement[] | ReactElement;
}

export function Stack({ children }: StackProps) {
  return <Container className="stack">{children}</Container>;
}

function StackPreview({ children }: StackProps) {
  return (
    <PreviewContent className="stack-preview">
      <Preview>{children}</Preview>
    </PreviewContent>
  );
}

StackPreview.displayName = 'StackPreview';

interface StackCodeProps {
  source: string;
}

function StackCode({ source }: StackCodeProps) {
  return (
    <div className="stack-code">
      <Code source={source} />
    </div>
  );
}

StackCode.displayName = 'StackCode';

Stack.Preview = StackPreview;
Stack.Code = StackCode;

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$loContrast',
  marginBottom: '$32',
  borderRadius: '$xs',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$grayLight2',
  position: 'relative',

  pre: {
    margin: 0,
    padding: '25px 25px',
  },
});

const PreviewContent = styled('div', {
  borderBottom: '1px solid $grayLight2',
});

const Preview = styled('div', {
  display: 'flex',
  padding: '$24',
  borderTopLeftRadius: '$xs',
  borderTopRightRadius: '$xs',
  backgroundSize: '20px 20px',
  backgroundPosition: '0px 0px, 10px 0px, 10px -10px, 0px 10px',
  backgroundImage: `linear-gradient(
      45deg,
      rgb(249, 249, 250) 25%,
      transparent 25%
    ),
    linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
    linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%)`,
});
