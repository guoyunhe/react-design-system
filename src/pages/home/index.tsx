import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import designSystemListData from 'src/data/design-systems';
import featureDefineListData from 'src/data/features';
import FeatureCell from './FeatureCell';

export default function HomePage() {
  const { t } = useTranslation('home');

  return (
    <Box>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {designSystemListData.map((item) => (
              <TableCell key={item.name}>{item.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {featureDefineListData.map((fd) => (
            <TableRow key={fd.code} hover>
              <TableCell>{fd.name}</TableCell>
              {designSystemListData.map((item) => (
                <FeatureCell key={item.name} feature={item.features[fd.code]} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
