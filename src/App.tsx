import { CircularProgress, CssBaseline } from '@mui/material';
import { DualThemeProvider } from 'mui-palette-mode';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { darkTheme, lightTheme } from './themes';

export default function App() {
  return (
    <Suspense
      fallback={
        <CircularProgress
          size={48}
          sx={{
            display: 'block',
            position: 'fixed',
            left: '50%',
            top: '50%',
            m: -3,
          }}
        />
      }
    >
      <DualThemeProvider lightTheme={lightTheme} darkTheme={darkTheme} defaultPaletteMode="auto">
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </DualThemeProvider>
    </Suspense>
  );
}
