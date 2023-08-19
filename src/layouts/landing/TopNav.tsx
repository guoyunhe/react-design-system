import {
  AutoAwesome as AutoAwesomeIcon,
  Menu as MenuIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { PaletteModeButton } from 'mui-palette-mode';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation();

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
          style={{ display: 'flex', color: 'inherit', textDecoration: 'none' }}
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
        <Stack direction="row" ml={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/features"
            startIcon={<AutoAwesomeIcon />}
          >
            {t('Features')}
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<SupportAgentIcon />}
            component="a"
            href="https://t.me/resume_maker_support"
            target="_blank"
          >
            {t('Support')}
          </Button>
        </Stack>
        <Box flex="1 1 auto" />
        <PaletteModeButton />
      </Toolbar>
    </AppBar>
  );
}
