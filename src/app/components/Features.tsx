const features = [
  {
    title: 'Prime Location',
    description: 'Strategic access to major cities and roads.',
  },
  {
    title: 'Modern Design',
    description: 'Luxurious homes with contemporary architecture.',
  },
  {
    title: 'Sustainable Living',
    description: 'Eco-friendly development and green spaces.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-base-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-primary">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition transform hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
