import { Box, Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import FeatureCell from 'src/components/feature-cell';
import FeatureDefine from 'src/types/FeatureDefine';
import Report from 'src/types/Report';

export interface FeatureTableProps {
  reports: Report[];
  features: FeatureDefine[];
}

export default function FeatureTable({ reports, features }: FeatureTableProps) {
  return (
    <Box>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {reports.map((item) => (
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
              {reports.map((item) => (
                <FeatureCell key={item.name} feature={item.features[fd.code]} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
