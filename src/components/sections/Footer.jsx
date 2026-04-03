export const Footer = () => (
  <footer className="bg-brand-light-green mt-32 pt-40 pb-20 px-6 md:px-20 rounded-t-[100px] relative overflow-hidden">
  
    <div className="absolute right-[-40px] top-[30%] w-48 h-80 bg-brand-purple rounded-l-full -z-0 opacity-100" />

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Newsletter Section */}
      <div className="text-center mb-40">
        {/* Red squiggly arrows indicators */}
        <div className="flex justify-center gap-1 mb-8">
          <div className="w-10 h-10 text-red-400 rotate-[-45deg]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-10 h-10 text-red-400 rotate-[-45deg] -translate-y-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="font-display text-6xl md:text-[90px] mb-10 leading-[0.9] tracking-tighter text-black">
          Subscribe to <br /> our newsletter
        </h2>
        <p className="text-gray-600 text-lg mb-12 font-medium">
          To make your stay special and even more memorable
        </p>

        <button className="bg-black text-white px-14 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors shadow-2xl">
          Subscribe Now
        </button>
      </div>

    
      <div className="w-full h-[1px] bg-gray-400/30 mb-20" />

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
    
        <div>
          <h4 className="font-display text-2xl mb-8 font-bold">Company</h4>
          <ul className="space-y-4 text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Studio</li>
            <li className="hover:text-black cursor-pointer">Service</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
          </ul>
        </div>

 
        <div>
          <h4 className="font-display text-2xl mb-8 font-bold">
            Terms & Policies
          </h4>
          <ul className="space-y-4 text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-black cursor-pointer">Explore</li>
            <li className="hover:text-black cursor-pointer">Accesibility</li>
          </ul>
        </div>

    
        <div>
          <h4 className="font-display text-2xl mb-8 font-bold">Follow Us</h4>
          <ul className="space-y-4 text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer">Instagram</li>
            <li className="hover:text-black cursor-pointer">LinkedIn</li>
            <li className="hover:text-black cursor-pointer">Youtube</li>
            <li className="hover:text-black cursor-pointer">Twitter</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-display text-2xl mb-8 font-bold">
            Terms & Policies
          </h4>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              1498w Fluton ste, STE <br /> 2D Chicago, IL 63867.
            </p>
            <p>(123) 456789000</p>
            <p className="text-black font-bold border-b border-black inline-block cursor-pointer">
              info@elementum.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
