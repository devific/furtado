import { imagekitBaseUrl } from "@/config";

export function Hero() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?q=80&w=2070&auto=format&fit=crop')",
        }}
        className="bg-cover bg-center"
      >
        <div className="flex max-lg:flex-col justify-end mx-auto pt-20 lg:pt-44 gap-8">
          <div className="p-6 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 text-black">
              Experience Timeless Luxury in Goa
            </h1>
            <p className="lg:text-lg mb-4 lg:mb-6 text-black/70">
              Indulge in serene coastal living with our exclusive villas, where
              modern elegance meets the natural beauty of Goa.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/70 transition duration-300">
              Explore Villas
            </button>
          </div>
          <img
            src={`${imagekitBaseUrl}/ai/hero.png`}
            alt=""
            className="w-full lg:max-w-1/2 h-auto"
          />
        </div>
      </section>
      <section
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/16831872/pexels-photo-16831872.jpeg')",
        }}
        className="bg-cover bg-center"
      >
        <div className="flex max-lg:flex-col justify-end mx-auto pt-20 lg:pt-44 gap-8">
          <div className="p-6 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 text-white">
              Experience Timeless Luxury in Goa
            </h1>
            <p className="lg:text-lg mb-4 lg:mb-6 text-white/70">
              Indulge in serene coastal living with our exclusive villas, where
              modern elegance meets the natural beauty of Goa.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-white/70 transition duration-300">
              Explore Villas
            </button>
          </div>
          <img
            src={`${imagekitBaseUrl}/ai/hero.png`}
            alt=""
            className="w-full lg:max-w-1/2 h-auto"
          />
        </div>
      </section>
    </>
  );
}
