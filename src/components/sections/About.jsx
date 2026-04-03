import { Highlight } from "../ui/Highlight";

export const About = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 max-w-[1440px] mx-auto overflow-visible">
      
      <div className="absolute top-[15%] left-0 w-full h-[80%] -z-10 pointer-events-none opacity-40">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50 150 C 400 600, 800 0, 1500 400"
            stroke="#F87171"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-48">
        <div className="flex-1 z-10">
          <h2 className="font-display text-5xl md:text-[80px] font-bold leading-[0.9] tracking-tighter mb-10 text-black">
            Tomorrow{" "}
            <span className="relative inline-block">
              should
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                />
              </svg>
            </span>{" "}
            <br />
            be better than <Highlight color="bg-brand-green">today</Highlight>
          </h2>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-8">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
          <button className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest group">
            <span className="border-b-2 border-black pb-1">Read more</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        <div className="relative flex-1 flex justify-center">
          <div className="absolute top-4 right-[10%] w-32 h-32 bg-brand-pink -rotate-12 -z-10 rounded-2xl" />
          <div className="w-72 h-72 md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000"
              className="w-full h-full object-cover"
              alt="Team Meeting"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
        <div className="flex-1 z-10">
          <h2 className="font-display text-5xl md:text-[80px] font-bold leading-[0.9] tracking-tighter mb-10 text-black">
            <Highlight color="bg-brand-green">See</Highlight> how we can <br />
            help you{" "}
            <span className="relative inline-block">
              progress
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-8">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social research.
          </p>
          <button className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest group">
            <span className="border-b-2 border-black pb-1">Read more</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        <div className="relative flex-1 flex justify-center">
          <div className="absolute -bottom-8 left-[10%] w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[120px] border-b-brand-pink rotate-[15deg] -z-10" />
          <div className="w-72 h-72 md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000"
              className="w-full h-full object-cover"
              alt="Creative Work"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
