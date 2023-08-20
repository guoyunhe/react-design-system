import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

// Layout of static landing pages for guests
export default function LandingLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <TopNav />
      <Box sx={{ flex: '1 1 auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
