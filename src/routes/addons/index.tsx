import { useLoaderData } from 'react-router-dom';
import { AddonFilters } from '../../components/addons/AddonFilters';
import { AddonList } from '../../components/addons/AddonList';
import { useAddons } from '../../components/addons/hooks';
import { Addon } from '../../api/addons';

export function Addons() {
  const { addons } = useLoaderData() as { addons: Addon[] };
  const { filters, filteredAddons, filterVersion, versions } =
    useAddons(addons);

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
