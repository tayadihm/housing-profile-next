import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Housing Estate</h1>
        <div className="space-x-6">
          <Link href="#home" className="hover:text-green-500 transition">
            Home
          </Link>
          <Link href="#features" className="hover:text-green-500 transition">
            Features
          </Link>
          <Link href="#gallery" className="hover:text-green-500 transition">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-green-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
