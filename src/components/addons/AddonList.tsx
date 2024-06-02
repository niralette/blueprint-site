import { type Addon } from '../../api/addons';
import neoforgeLogo from '../../assets/neoforge_46h.png';
import { DevinsBadge } from '../DevinsBadge';

export function AddonList({ addons }: { addons: Addon[] }) {
  return (
    <div>
      <h2 className="sr-only">Addons</h2>

      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5">
        {addons.map(addon => (
          <li className="grid" key={addon.id}>
            <ArticleCard addon={addon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticleCard({ addon }: { addon: Addon }) {
  const url = `https://modrinth.com/mod/${addon.slug}`;

  return (
    <article className="flex w-full flex-col rounded-xl bg-blue-200 p-5">
      <h3 className="mb-2 text-xl font-bold leading-tight">{addon.name}</h3>

      <img
        src={addon.icon}
        alt=""
        width={100}
        height={100}
        className="w-25 mb-2 aspect-square object-cover"
      />

      <div className="mb-2">
        <ul className="flex gap-2">
          {addon.modloaders.map(modloader => (
            <li key={modloader}>
              {modloader === 'neoforge' ? (
                <img
                  className="w-8"
                  src={neoforgeLogo}
                  alt={modloader}
                  height={46}
                  width={46}
                />
              ) : (
                <DevinsBadge
                  category="supported"
                  className="w-8"
                  format="png"
                  height={46}
                  name={modloader}
                  type="compact-minimal"
                  width={46}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-2">
        <ul className="flex flex-wrap gap-x-2 gap-y-1">
          {addon.versions.slice(0, 3).map(version => (
            <li className="shrink-0" key={version}>
              <span className="rounded border border-blue-700 bg-blue-600 px-1 py-0.5 font-mono text-xs text-white">
                {version}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mb-2">{addon.shortDescription}</p>

      <p className="mb-4 text-sm">{addon.authors}</p>

      <a
        className="mt-auto"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        <DevinsBadge
          className="h-8"
          category="available"
          format="png"
          height={46}
          name="modrinth"
          type="compact"
        />
      </a>
    </article>
  );
}
