import Image from "next/image";

export default function CTASection() {
    
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
      
      <div className="absolute inset-0">
        <Image
          src="/Ctabg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
          width={400}
          height={400}
        />
      
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
      
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug max-w-3xl mx-auto">
          Ready to experience smarter & <br className="hidden md:block" /> more
          accurate recipes?
        </h2>

      
        <p className="text-gray-300 mt-6 max-w-2xl text-lg mx-auto">
          Gain an edge with our exclusive Cookbook, designed to provide you with
          tailored recipes, cooking tips, and inspiration across every cuisine
          and diet.
        </p>

        
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            Get Started Now
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
