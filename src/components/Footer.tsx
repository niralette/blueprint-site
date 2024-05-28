import logo from '../assets/logo.webp';

export function Footer() {
  return (
    <footer className="mt-10 bg-black py-4 text-white">
      <div className="container mx-auto">
        <h2 className="sr-only">Footer</h2>

        <div>
          <img className="h-10" src={logo} alt="Blueprint Logo" />
        </div>

        <p className="font-bold">Create Addons</p>

        <p className="text-xs">
          Found a bug? Report it to{' '}
          <a href="mailto:blueprint-site@proton.me">blueprint-site@proton.me</a>
        </p>

        <p className="text-xs">
          Not an official Minecraft service. Not approved by or associated with
          Mojang or Microsoft
        </p>
      </div>
    </footer>
  );
}
