import clipboard from '../assets/clipboard.webp';
import coupling from '../assets/minecart_coupling.webp';
import logo from '../assets/logo.webp';
import schematic from '../assets/schematic.webp';

interface Link {
  icon: string;
  title: string;
  url: string;
}

export function Header() {
  const links: Link[] = [
    {
      icon: coupling,
      title: 'Addons',
      url: '/addons',
    },
    {
      icon: schematic,
      title: 'Schematics',
      url: '/schematics',
    },
    {
      icon: clipboard,
      title: 'About',
      url: '/about',
    },
  ];

  return (
    <header className="mb-10 bg-white shadow">
      <div className="container mx-auto flex h-16 w-full items-center justify-between">
        <a className="flex items-center gap-3 font-minecraft text-xl" href="/">
          <img className="inline-block h-10" src={logo} alt="Blueprint Logo" />
          <span>Blueprint</span>
        </a>

        <nav>
          <ul className="flex items-center gap-5">
            {links.map(link => (
              <li key={link.url}>
                <a className="flex gap-2" href={link.url}>
                  <img
                    className="inline-block h-6"
                    src={link.icon}
                    alt=""
                    aria-hidden="true"
                  />

                  <span>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
