import { AuthProvider } from '@guoyunhe/react-auth';
import { CircularProgress, CssBaseline } from '@mui/material';
import axios from 'axios';
import { DualThemeProvider } from 'mui-palette-mode';
import { Suspense } from 'react';
import { FetchConfigProvider, IndexedDBStore } from 'react-fast-fetch';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { darkTheme, lightTheme } from './themes';

const store = new IndexedDBStore({ limit: 10000 });
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function App() {
  return (
    <FetchConfigProvider store={store} fetcher={fetcher}>
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
          <AuthProvider>
            <CssBaseline enableColorScheme />
            <RouterProvider router={router} />
          </AuthProvider>
        </DualThemeProvider>
      </Suspense>
    </FetchConfigProvider>
  );
}
