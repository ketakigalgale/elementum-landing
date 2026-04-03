import { ArrowRight } from "lucide-react";
import { Highlight } from "../ui/Highlight";

const SERVICES = [
  {
    id: "01",
    label: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    id: "02",
    label: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: "03",
    label: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export const Services = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <h2 className="font-display text-5xl md:text-[80px] mb-20 leading-none">
      What we <Highlight color="bg-brand-green">can</Highlight> <br /> offer
      you!
    </h2>

    <div className="border-t border-gray-200">
      {SERVICES.map((item) => (
        <div
          key={item.id}
          className="group border-b border-gray-200 py-16 flex flex-col md:grid md:grid-cols-[1fr_2fr_auto] items-center gap-8 cursor-pointer hover:bg-gray-50 transition-all duration-500"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold leading-tight max-w-[150px]">
            {item.label}
          </p>
          <h3 className="font-display text-4xl md:text-6xl font-medium text-center md:text-left group-hover:translate-x-4 transition-transform duration-700">
            {item.title}
          </h3>
          <ArrowRight className="w-10 h-10 stroke-1 group-hover:translate-x-2 transition-transform" />
        </div>
      ))}
    </div>
  </section>
);
