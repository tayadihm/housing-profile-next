const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-lg font-semibold">Contact Us</p>
        <p className="mt-2">Phone: +62 123 456 789</p>
        <p>Email: info@housingestate.com</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-green-500 hover:text-green-400">
            Facebook
          </a>
          <a href="#" className="text-green-500 hover:text-green-400">
            Instagram
          </a>
          <a href="#" className="text-green-500 hover:text-green-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
