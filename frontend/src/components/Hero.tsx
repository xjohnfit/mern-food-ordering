import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-orange-50/50 via-white to-orange-50/30 py-20 md:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.06),transparent_50%)]"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-orange-200 px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">
                50% off on your first order
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Your Feast,{" "}
                <span className="bg-linear-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Delivered Instantly
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover extraordinary meals from top restaurants, delivered fresh to your door in minutes.
              </p>
            </div>

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="flex-1 relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-base shadow-sm"
                />
              </div>
              <Button className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 h-auto rounded-2xl font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all text-base">
                Find Restaurants
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-gray-200">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-medium">Restaurants</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900 flex items-center gap-1">
                  4.8 <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:block hidden">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&h=700&fit=crop"
                  alt="Delicious food"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating Card - Fast Delivery */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-5 backdrop-blur-sm border border-gray-100 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fast Delivery</div>
                    <div className="text-sm text-gray-600">Within 30 mins</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Top Rated */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl p-5 backdrop-blur-sm border border-gray-100 animate-float-delayed">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center">
                    <Star className="w-7 h-7 text-green-500 fill-green-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Top Rated</div>
                    <div className="text-sm text-gray-600">4.9/5 Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background blur effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-r from-orange-300/20 to-orange-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
