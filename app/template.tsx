

import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function RootTempalte({ children }: { children: React.ReactNode}) {
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
        <ThemeProvider theme={theme}>
          { children }
        </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default RootTempalte