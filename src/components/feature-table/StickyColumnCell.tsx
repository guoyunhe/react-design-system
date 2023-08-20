import { TableCell, styled } from '@mui/material';

const StickyColumnCell = styled(TableCell)(({ theme }) => ({
  background: theme.palette.background.paper,
  position: 'sticky',
  left: 0,
  borderRightWidth: 2,
  borderRightStyle: 'solid',
  borderRightColor: theme.palette.divider,
}));

export default StickyColumnCell;
