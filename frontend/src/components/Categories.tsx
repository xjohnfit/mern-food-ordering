import { Pizza, Coffee, Sandwich, IceCream, Salad, Drumstick } from "lucide-react";

const categories = [
  { name: "Pizza", icon: Pizza, color: "from-red-500 to-orange-500" },
  { name: "Burgers", icon: Sandwich, color: "from-yellow-500 to-orange-500" },
  { name: "Desserts", icon: IceCream, color: "from-pink-500 to-purple-500" },
  { name: "Salads", icon: Salad, color: "from-green-500 to-emerald-500" },
  { name: "Coffee", icon: Coffee, color: "from-amber-600 to-orange-600" },
  { name: "Chicken", icon: Drumstick, color: "from-orange-500 to-red-500" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What are you craving?</h2>
          <p className="text-gray-600 text-lg">Browse by your favorite categories</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-gray-50/80 transition-all hover:scale-105 active:scale-95"
              >
                <div className={`bg-gradient-to-br ${category.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
