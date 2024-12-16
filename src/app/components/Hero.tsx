const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6 py-24 animate__animated animate__fadeIn">
        <h2 className="text-4xl md:text-6xl font-bold">
          Discover Your Dream Home
        </h2>
        <p className="mt-4 text-lg">
          Experience luxurious living with modern facilities and prime
          locations.
        </p>
        <a
          href="#features"
          className="mt-6 inline-block bg-green-600 px-8 py-3 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Hero;
