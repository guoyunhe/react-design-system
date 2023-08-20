import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

// Layout of static landing pages for guests
export default function LandingLayout() {
  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="hidden">
      <TopNav />
      <Outlet />
    </Box>
  );
}
