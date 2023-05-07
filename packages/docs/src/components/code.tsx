import { useEffect } from 'react';

import { Highlight, themes } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/github';

interface CodeProps {
  source: string;
}

export function Code({ source }: CodeProps) {
  return (
    <Highlight theme={themes.github} code={source} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        console.log(tokens);

        return (
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
}
