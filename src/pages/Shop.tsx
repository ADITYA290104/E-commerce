import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const allProducts = [
  { id: 1, image: product1, name: "Performance Tank", price: 45, originalPrice: 65 },
  { id: 2, image: product2, name: "Elite Sports Bra", price: 38, originalPrice: 55 },
  { id: 3, image: product3, name: "Urban Tech Hoodie", price: 89 },
  { id: 4, image: product4, name: "Flex Jacket Pro", price: 120, originalPrice: 150 },
  { id: 5, image: product5, name: "Compression Tee", price: 42 },
  { id: 6, image: product6, name: "Active Core Set", price: 95, originalPrice: 130 },
  { id: 7, image: product1, name: "Sprint Short Pro", price: 52 },
  { id: 8, image: product2, name: "Training Leggings", price: 68, originalPrice: 85 },
  { id: 9, image: product3, name: "Zip-Up Jacket", price: 105 },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-4">
              ALL PRODUCTS
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our complete range of premium athletic wear
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
