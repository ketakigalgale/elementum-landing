import { motion } from "framer-motion";
import { Highlight } from "../ui/Highlight";

export const Hero = () => {
  return (
    <section className="relative pt-44 pb-32 px-6 max-w-[1440px] mx-auto overflow-hidden">

      <div className="absolute right-[-20px] top-60 w-32 h-48 bg-brand-purple rounded-l-full opacity-90 -z-10 hidden lg:block" />

      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-[100px] font-bold leading-[0.95] tracking-tight mb-12"
        >
          The{" "}
          <span className="relative inline-block">
            thinkers
          
            <svg
              className="absolute -bottom-2 left-0 w-full h-4 text-brand-orange"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          and <br />
          doers were{" "}
          <span className="bg-brand-pink px-8 py-1 rounded-full italic font-medium">
            changing
          </span>{" "}
          <br />
          the <Highlight color="bg-brand-green">status</Highlight> Quo with
        </motion.h1>

        <p className="mt-12 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We are a team of strategists, designers, communicators, researchers.
          Together, <br className="hidden md:block" />
          we believe that progress only happens when you refuse to play things
          safe.
        </p>
      </div>

    
      <div className="mt-24 flex flex-wrap justify-center items-center gap-4 md:gap-0 relative min-h-[300px]">
        <img
          src="https://i.pravatar.cc/150?u=1"
          className="md:absolute md:left-[10%] md:top-10 w-24 h-24 rounded-full border-4 border-white shadow-xl -rotate-12"
        />
        <img
          src="https://i.pravatar.cc/150?u=2"
          className="md:absolute md:left-[22%] md:bottom-0 w-36 h-36 rounded-full border-4 border-white shadow-xl"
        />
        <img
          src="https://i.pravatar.cc/150?u=3"
          className="md:absolute md:left-[40%] md:top-0 w-44 h-44 rounded-full border-4 border-white shadow-2xl"
        />
        <img
          src="https://i.pravatar.cc/150?u=4"
          className="md:absolute md:right-[22%] md:bottom-10 w-40 h-40 rounded-full border-4 border-white shadow-xl rotate-6"
        />
        <img
          src="https://i.pravatar.cc/150?u=5"
          className="md:absolute md:right-[10%] md:top-20 w-32 h-32 rounded-full border-4 border-white shadow-lg rotate-12"
        />
      </div>
    </section>
  );
};
