export const Testimonial = () => (
  <section className="py-40 px-6 max-w-7xl mx-auto text-center relative overflow-visible">
   
    <img
      src="https://i.pravatar.cc/150?u=8"
      className="absolute left-0 top-20 w-20 h-20 rounded-full grayscale opacity-50"
    />
    <img
      src="https://i.pravatar.cc/150?u=9"
      className="absolute right-0 top-10 w-24 h-24 rounded-full"
    />
    <img
      src="https://i.pravatar.cc/150?u=10"
      className="absolute right-[5%] bottom-0 w-48 h-48 rounded-full border-8 border-white shadow-2xl"
    />

    <h2 className="font-display text-5xl md:text-7xl mb-24">
      What our customer <br />
      says{" "}
      <span className="relative">
        About Us
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-orange" />
      </span>
    </h2>

    <div className="max-w-4xl mx-auto bg-[#f2f8f3] p-16 md:p-24 rounded-[60px] relative">
      <span className="absolute top-10 left-10 text-9xl text-brand-green/40 font-serif leading-none">
        “
      </span>
      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium relative z-10">
        Elementum delivered the site within the timeline as they requested. In
        the end, the client found a 50% increase in traffic within days since
        its launch. They also had an impressive ability to use technologies that
        the company hasn't used.
      </p>
      <span className="absolute bottom-4 right-16 text-9xl text-brand-green/40 font-serif leading-none">
        ”
      </span>
    </div>
  </section>
);
