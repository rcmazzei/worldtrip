import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    "highlight": "#FFBA08",
    dark: {
      "black": "#000000",
      "text": "#47585B",
      "info": "#999999",
    },
    light: {
      "white": "#FFFFFF",
      "text": "#F5F8FA",
      "info": "#DADADA",
    }
  }
});