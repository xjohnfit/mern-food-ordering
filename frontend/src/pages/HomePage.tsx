import Layout from "@/layouts/layout";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";

const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-0">
        <Hero />
        <Categories />
        <FeaturedRestaurants />
      </div>
    </Layout>
  );
};

export default HomePage;
