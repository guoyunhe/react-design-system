import {
  Computer as ComputerIcon,
  GitHub as GitHubIcon,
  Menu as MenuIcon,
  Smartphone as SmartphoneIcon,
} from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { PaletteModeButton } from 'mui-palette-mode';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuButtonClick}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
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
          {t('Desktop')}
        </Button>

        <Button
          variant={location.pathname === '/mobile' ? 'contained' : 'text'}
          color="inherit"
          startIcon={<SmartphoneIcon />}
          disableElevation
          component={NavLink}
          to="/mobile"
        >
          {t('Mobile')}
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
