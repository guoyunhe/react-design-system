import FeatureTable from 'src/components/feature-table';
import mobileDesignSystemListData from 'src/data/design-systems/mobile';
import featureDefineListData from 'src/data/features';

export default function MobilePage() {
  return (
    <FeatureTable features={featureDefineListData} designSystems={mobileDesignSystemListData} />
  );
}
