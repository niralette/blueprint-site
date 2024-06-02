import { useEffect, useState } from 'react';
import { type Addon, getAddons } from '../../api/addons';
import { type Modloader } from '../../globals/modloader';

export interface AddonFilters {
  loader?: Modloader | undefined;
  version?: string | undefined;
}

export function useAddons() {
  const [addons, setAddons] = useState<Addon[]>([]);
  const [filters, setFilters] = useState<AddonFilters>({});

  const filteredAddons = addons
    .filter(addon =>
      filters.loader ? addon.modloaders.includes(filters.loader) : true,
    )
    .filter(addon =>
      filters.version ? addon.versions.includes(filters.version) : true,
    );

  const versions = [
    ...new Set(
      addons
        .flatMap(addon => addon.versions)
        .sort()
        .reverse(),
    ),
  ];

  useEffect(() => {
    getAddons().then(items => setAddons(items));
  }, []);

  function filterLoader(loader: AddonFilters['loader']) {
    setFilters(currentFilters => {
      return {
        ...currentFilters,
        loader,
      };
    });
  }

  function filterVersion(version: AddonFilters['version']) {
    setFilters(currentFilters => {
      return {
        ...currentFilters,
        version,
      };
    });
  }

  return {
    addons,
    filteredAddons,
    filters,
    filterLoader,
    filterVersion,
    versions,
  };
}
