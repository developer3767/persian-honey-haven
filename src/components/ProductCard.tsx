import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {discount && (
              <span className="absolute left-3 top-3 rounded-lg bg-destructive px-2.5 py-1 text-xs font-bold text-destructive-foreground">
                {discount}٪ تخفیف
              </span>
            )}
            {product.inStock && (
              <span className="absolute right-3 top-3 rounded-lg bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
                موجود
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <h3 className="text-base font-bold text-card-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviews} نظر)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
                {product.originalPrice && (
                  <p className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-honey transition-colors hover:bg-accent"
              >
                <ShoppingCart className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
