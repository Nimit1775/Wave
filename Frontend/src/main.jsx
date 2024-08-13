import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom';

// Define global styles with color mode
const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#101010')(props), // Added dot between 'gray' and '100'
    },
  }),
};

// Theme configuration
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true, // This allows the app to follow system color mode
};

// Custom color definitions
const colors = {
  gray: {
    light: '#616161',
    dark: '#1e1e1e',
  },
};

// Extend the theme with custom configuration
const theme = extendTheme({ config, styles, colors });

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
