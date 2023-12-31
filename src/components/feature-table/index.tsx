import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import FeatureCell from 'src/components/feature-cell';
import DesignSystem from 'src/types/DesignSystem';
import FeatureDefine from 'src/types/FeatureDefine';
import StickyColumnCell from './StickyColumnCell';

export interface FeatureTableProps {
  designSystems: DesignSystem[];
  features: FeatureDefine[];
}

export default function FeatureTable({ designSystems, features }: FeatureTableProps) {
  return (
    <TableContainer sx={{ flex: '1 1 auto', overflow: 'auto' }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <StickyColumnCell sx={{ top: 0, zIndex: 10 }}>Name</StickyColumnCell>
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
          <TableRow>
            <StickyColumnCell>Vendor</StickyColumnCell>
            {designSystems.map((item) => (
              <TableCell key={item.name}>{item.vendor}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <StickyColumnCell>GitHub Stars</StickyColumnCell>
            {designSystems.map((item) => (
              <TableCell key={item.name}>
                {item.github && (
                  <a href={`https://github.com/${item.github}`} target="_blank" rel="noreferrer">
                    <img src={`https://img.shields.io/github/stars/${item.github}`} />
                  </a>
                )}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <StickyColumnCell>NPM Downloads</StickyColumnCell>
            {designSystems.map((item) => (
              <TableCell key={item.name}>
                <a
                  href={`https://npmjs.com/package/${item.package}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={`https://img.shields.io/npm/dw/${item.package}`} />
                </a>
              </TableCell>
            ))}
          </TableRow>
          {features.map((fd) => (
            <TableRow key={fd.code} hover>
              <StickyColumnCell>{fd.name}</StickyColumnCell>
              {designSystems.map((item) => (
                <FeatureCell key={item.name} feature={item.features[fd.code]} featureDefine={fd} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
