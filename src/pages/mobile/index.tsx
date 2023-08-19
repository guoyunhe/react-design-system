import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import FeatureCell from 'src/components/feature-cell';
import mobileDesignSystemListData from 'src/data/design-systems/mobile';
import featureDefineListData from 'src/data/features';

export default function MobilePage() {
  return (
    <Box>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {mobileDesignSystemListData.map((item) => (
              <TableCell key={item.name}>{item.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {featureDefineListData.map((fd) => (
            <TableRow key={fd.code} hover>
              <TableCell>{fd.name}</TableCell>
              {mobileDesignSystemListData.map((item) => (
                <FeatureCell key={item.name} feature={item.features[fd.code]} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
