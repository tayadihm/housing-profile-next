const Gallery = () => {
  const images = ['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg'];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
