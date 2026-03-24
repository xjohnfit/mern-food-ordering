import RestaurantCard from "./RestaurantCard";
import { ArrowRight } from "lucide-react";

const restaurants = [
  {
    name: "Italian Bistro",
    cuisine: "Italian, Pizza, Pasta",
    rating: 4.8,
    deliveryTime: "25-30 min",
    priceRange: "$$",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    discount: "30% OFF",
  },
  {
    name: "Sushi Master",
    cuisine: "Japanese, Sushi",
    rating: 4.9,
    deliveryTime: "30-35 min",
    priceRange: "$$$",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
  },
  {
    name: "Burger House",
    cuisine: "American, Burgers",
    rating: 4.6,
    deliveryTime: "20-25 min",
    priceRange: "$",
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    discount: "20% OFF",
  },
  {
    name: "Taco Fiesta",
    cuisine: "Mexican, Tacos",
    rating: 4.7,
    deliveryTime: "25-30 min",
    priceRange: "$$",
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
  },
];

const FeaturedRestaurants = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Near You</h2>
            <p className="text-gray-600 text-lg">Discover the best rated restaurants in your area</p>
          </div>
          <button className="group hidden md:flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
