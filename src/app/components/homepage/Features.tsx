import { FaPizzaSlice, FaHamburger, FaFish, FaIceCream, FaBreadSlice, FaCarrot } from "react-icons/fa";

export default function Features() {
  const recipes = [
    {
      title: "Margherita Pizza",
      badge: "Italian Classic",
      desc: "Fresh tomatoes, mozzarella, and basil on a crispy thin crust.",
      icon: <FaPizzaSlice className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Cheeseburger",
      badge: "American Favorite",
      desc: "Juicy grilled beef patty with melted cheese, lettuce, and pickles.",
      icon: <FaHamburger className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Grilled Salmon",
      badge: "Healthy Choice",
      desc: "Tender salmon fillet with lemon butter sauce and herbs.",
      icon: <FaFish className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Vanilla Ice Cream",
      badge: "Sweet Treat",
      desc: "Creamy vanilla scoop topped with chocolate syrup and nuts.",
      icon: <FaIceCream className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Garlic Bread",
      badge: "Perfect Side",
      desc: "Golden baked bread slices brushed with garlic butter.",
      icon: <FaBreadSlice className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Veggie Stir Fry",
      badge: "Vegan Delight",
      desc: "Colorful mix of fresh vegetables sautéed in soy sauce.",
      icon: <FaCarrot className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 relative">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        Discover delicious recipes <br className="hidden md:block" /> for every craving
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center relative">
        {/* Left side */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {recipes.slice(0, 3).map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-[#111] rounded-xl border border-gray-800 hover:border-green-400 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-green-500">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{r.title}</h3>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                  {r.badge}
                </span>
                <p className="text-gray-400 mt-2 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center glowing circle */}
        <div className="relative flex items-center justify-center my-12 md:my-0 md:w-1/3">
          <div className="animate-pulse absolute w-72 h-72 bg-blue-500/60 rounded-full blur-3xl"></div>
          <div className="w-48 h-48 bg-black border border-blue-400 rounded-full flex items-center justify-center relative z-10">
            <span className="text-4xl">🍴</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {recipes.slice(3).map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-[#111] rounded-xl border border-gray-800 hover:border-green-400 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-green-500">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{r.title}</h3>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                  {r.badge}
                </span>
                <p className="text-gray-400 mt-2 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
