import { Check, Close } from '@mui/icons-material';
import { TableCell, Typography } from '@mui/material';
import Feature from 'src/types/Feature';
import FeatureDefine from 'src/types/FeatureDefine';

export interface FeatureCellProps {
  feature?: Feature;
  featureDefine?: FeatureDefine;
}

export default function FeatureCell({ feature, featureDefine }: FeatureCellProps) {
  const { available = false, document } = feature || {};
  const { min, max } = featureDefine || {};
  const color =
    available === true ||
    (typeof available === 'number' && typeof min === 'number' && available >= min) ||
    (typeof available === 'number' && typeof max === 'number' && available <= max)
      ? 'green'
      : 'red';

  return (
    <TableCell>
      <Typography
        color={color}
        component={document ? 'a' : 'span'}
        href={document}
        target="_blank"
        rel="noreferrer"
      >
        {available === true && <Check />}
        {available === false && <Close />}
        {typeof available === 'number' && available}
      </Typography>
    </TableCell>
  );
}
