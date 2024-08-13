import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { color } from 'framer-motion'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
  global:(props) => ({
    body :{
      color:mode('gray.800','whiteAlpha.900')(props),
      bg: mode('gray100','#101010')(props),
    }
  })
}   ;

const config  ={ 
  initialColorMode:'dark',
  useSystemColorMode: true , 
}

const colors = {
  gray :{
    light :  "#616161"  ,
    dark : "#1e1e1e"   ,
  }
}
const theme = extendTheme({config,styles,colors})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
 </StrictMode>,
)
