import { Box, Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import FeatureCell from 'src/components/feature-cell';
import DesignSystem from 'src/types/DesignSystem';
import FeatureDefine from 'src/types/FeatureDefine';

export interface FeatureTableProps {
  designSystems: DesignSystem[];
  features: FeatureDefine[];
}

export default function FeatureTable({ designSystems, features }: FeatureTableProps) {
  return (
    <Box>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {designSystems.map((item) => (
              <TableCell key={item.name}>
                <Link href={item.website} target="_blank" rel="noreferrer">
                  {item.name}
                </Link>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {features.map((fd) => (
            <TableRow key={fd.code} hover>
              <TableCell>{fd.name}</TableCell>
              {designSystems.map((item) => (
                <FeatureCell key={item.name} feature={item.features[fd.code]} featureDefine={fd} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
