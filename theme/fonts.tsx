import { Global } from '@emotion/react';

export const FontsGlobal = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400&display=swap');

      body {
        font-family: 'M PLUS ROUNDED 1C', sans-serif;
      }
    `}
  />
);
