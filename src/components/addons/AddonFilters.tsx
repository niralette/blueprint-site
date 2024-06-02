import type { AddonFilters } from './hooks';

export function AddonFilters({
  filters,
  versions,
  onFilterVersion,
}: {
  filters: AddonFilters;
  versions: string[];
  onFilterVersion: (version: string | undefined) => void;
}) {
  return (
    <div>
      <label htmlFor="version">Version</label>

      <select
        name="version"
        id="version"
        value={filters.version}
        onSelect={event => onFilterVersion(event.currentTarget.value)}
      >
        <option value={undefined}>All versions</option>

        {versions.map(version => (
          <option key={version}>{version}</option>
        ))}
      </select>
    </div>
  );
}
