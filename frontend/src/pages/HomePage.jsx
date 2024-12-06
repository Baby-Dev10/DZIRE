import React from "react";
import CategoryItem from "../components/CategoryItem";
const categories = [
  { href: "/crop top", name: "Crop Tops", imageUrl: "/crop top.jpg" },
  {
    href: "/ oversized t-shirt",
    name: "Oversized T-shirts",
    imageUrl: "/oversized T-shirt.jpg",
  },
  {
    href: "/full sleeves",
    name: "Full Sleeves T-shirts",
    imageUrl: "/full sleeves.jpg",
  },
  { href: "/hoodie", name: "Hoodies", imageUrl: "/hoodie.jpg" },
  { href: "/joggers", name: "Joggers", imageUrl: "/joggers.jpg" },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Discover the latest trends in eco-friendly fashion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
