import { AddonFilters } from '../components/addons/AddonFilters';
import { AddonList } from '../components/addons/AddonList';
import { useAddons } from '../components/addons/hooks';

export function Addons() {
  const { filters, filteredAddons, filterVersion, versions } = useAddons();

  return (
    <div className="container mx-auto">
      <AddonFilters
        filters={filters}
        versions={versions}
        onFilterVersion={filterVersion}
      />

      <AddonList addons={filteredAddons} />
    </div>
  );
}
