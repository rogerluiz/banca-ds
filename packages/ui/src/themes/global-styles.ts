import { globalCss } from './config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '100%',
    WebkitTextSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
  body: {
    fontFamily: '$roboto',
    fontSize: '$14',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: '$loContrast',
    color: '$hiContrast',
  },
});
