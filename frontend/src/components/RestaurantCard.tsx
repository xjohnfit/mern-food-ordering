import { Star, Clock, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  distance: string;
  image: string;
  discount?: string;
}

const RestaurantCard = ({
  name,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
  distance,
  image,
  discount,
}: RestaurantCardProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-4/3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-4 left-4 bg-linear-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            {discount}
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all active:scale-95">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title & Cuisine */}
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-1.5 group-hover:text-orange-600 transition-colors">{name}</h3>
          <p className="text-sm text-gray-600 line-clamp-1">{cuisine}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex flex-col items-center gap-1 p-2 bg-gray-50 rounded-xl">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="font-bold text-gray-900">{rating}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-gray-50 rounded-xl">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-700">{deliveryTime.split(' ')[0]}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-gray-50 rounded-xl">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-700">{distance.split(' ')[0]}</span>
          </div>
        </div>

        {/* Order Button */}
        <Button className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all font-semibold">
          View Menu
        </Button>
      </div>
    </div>
  );
};

export default RestaurantCard;
