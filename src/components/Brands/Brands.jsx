const Brands = () => {
  const brands = [
    { src: "/assets/brand1.webp", alt: "Brand 1" },
    { src: "/assets/brand2.webp", alt: "Brand 2" },
    { src: "/assets/brand3.webp", alt: "Brand 3" },
    { src: "/assets/brand4.webp", alt: "Brand 4" },
  ];

  const allBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section className="overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {allBrands.map((brand, index) => (
          <li key={index} className="mx-8 flex-shrink-0">
            <img src={brand.src} alt={brand.alt} width={200} height={200} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brands;
