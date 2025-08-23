export default function RecipeHighlights() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
          Discover Recipes That Delight Every Taste
        </h2>
        <p className="text-gray-400">
          Watch, cook, and see what foodies are saying about each recipe.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-center">
        
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden border border-gray-700 shadow-lg mt-5">
        
          <iframe
            className="relative w-full aspect-video rounded-xl border border-gray-800"
            src="https://www.youtube.com/embed/1APwq1df6Mw" 
            title="Recipe Demo"
            allowFullScreen
          />
        </div>

     

        
        <div className="w-full md:w-1/3 flex flex-col gap-6 opacity-100">
          <h3 className="text-xl font-bold">What Home Chefs Are Saying</h3>

          <div className="p-4 rounded-lg border border-green-800 bg-green-950/50">
            <p className="font-semibold text-green-400">🍴 7 out of 10 loved it</p>
            <p className="text-gray-300 text-sm">Tasty, easy-to-follow, and a family favorite</p>
          </div>

          <div className="p-4 rounded-lg border border-yellow-800 bg-yellow-950/40">
            <p className="font-semibold text-yellow-400">🌶️ 2 out of 10 said it needed more spice</p>
            <p className="text-gray-300 text-sm">Good flavor but could use a stronger kick</p>
          </div>

          <div className="p-4 rounded-lg border border-red-800 bg-red-950/40">
            <p className="font-semibold text-red-400">👎 1 out of 10 didn’t work out</p>
            <p className="text-gray-300 text-sm">Difficulty following steps or missing ingredients</p>
          </div>

          
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 transition text-black font-semibold py-3 px-6 rounded-full shadow-lg">
            Explore More Delicious Recipes
          </button>

          <p className="text-xs text-gray-500 mt-3">
            Real feedback from real food lovers — find your perfect recipe today.
          </p>
        </div>
      </div>
    </section>
  );
}
