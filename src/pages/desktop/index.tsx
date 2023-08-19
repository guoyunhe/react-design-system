import FeatureTable from 'src/components/feature-table';
import designSystemListData from 'src/data/design-systems';
import featureDefineListData from 'src/data/features';

export default function DesktopPage() {
  return <FeatureTable features={featureDefineListData} reports={designSystemListData} />;
}
