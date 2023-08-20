import {
  Computer as ComputerIcon,
  GitHub as GitHubIcon,
  Smartphone as SmartphoneIcon,
} from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { PaletteModeButton } from 'mui-palette-mode';
import { NavLink, useLocation } from 'react-router-dom';

export default function TopNav() {
  const location = useLocation();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          component={NavLink}
          to="/"
          sx={{ display: 'flex', color: 'inherit', textDecoration: 'none', mr: 3 }}
        >
          <Box
            component="img"
            src="/logo.svg"
            sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}
          />
          <Typography fontSize={20} color="inherit" component="div">
            React Design System
          </Typography>
        </Box>
        <Button
          variant={location.pathname === '/' ? 'contained' : 'text'}
          color="inherit"
          startIcon={<ComputerIcon />}
          disableElevation
          component={NavLink}
          to="/"
        >
          Desktop
        </Button>

        <Button
          variant={location.pathname === '/mobile' ? 'contained' : 'text'}
          color="inherit"
          startIcon={<SmartphoneIcon />}
          disableElevation
          component={NavLink}
          to="/mobile"
        >
          Mobile
        </Button>

        <Button
          variant="text"
          color="inherit"
          startIcon={<GitHubIcon />}
          component="a"
          href="https://github.com/guoyunhe/react-design-system"
          target="_blank"
        >
          GitHub
        </Button>
        <Box flex="1 1 auto" />
        <PaletteModeButton />
      </Toolbar>
    </AppBar>
  );
}
