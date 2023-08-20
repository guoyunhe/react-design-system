import { Check, Close } from '@mui/icons-material';
import { TableCell } from '@mui/material';
import Feature from 'src/types/Feature';

export interface FeatureCellProps {
  feature?: Feature;
}

export default function FeatureCell({ feature }: FeatureCellProps) {
  return (
    <TableCell>
      {feature?.available ? (
        <>
          {feature.document ? (
            <a href={feature.document} target="_blank" rel="noreferrer">
              <Check color="success" />
            </a>
          ) : (
            <Check color="success" />
          )}
        </>
      ) : (
        <Close color="error" />
      )}
    </TableCell>
  );
}
