import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            محصولات ویژه
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
            برترین عسل‌های <span className="text-gradient-honey">طبیعی</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            مجموعه‌ای از بهترین و خالص‌ترین عسل‌های ایران، مستقیماً از زنبوردار
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
