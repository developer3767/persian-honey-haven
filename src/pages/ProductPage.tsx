import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Minus, Plus, ArrowRight, Leaf, MapPin, Scale, Heart } from "lucide-react";
import { useState } from "react";
import { products, formatPrice } from "@/lib/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">محصول یافت نشد</p>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">
              بازگشت به خانه
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">خانه</Link>
            <span>/</span>
            <span>محصولات</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[350px] w-full object-cover md:h-[450px] lg:h-[500px]"
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-3">
                {[product.image, product.image, product.image].map((img, i) => (
                  <button
                    key={i}
                    className={`overflow-hidden rounded-xl border-2 transition-colors ${
                      i === 0 ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="h-16 w-16 object-cover md:h-20 md:w-20" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {product.category}
                </span>
                <h1 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} از ۵ ({product.reviews} نظر)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-extrabold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="rounded-lg bg-destructive/10 px-2.5 py-1 text-xs font-bold text-destructive">
                      {discount}٪ تخفیف
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-secondary/50 p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">مبدأ</p>
                    <p className="text-sm font-medium text-foreground">{product.origin}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">طعم</p>
                    <p className="text-sm font-medium text-foreground">{product.taste}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">وزن</p>
                    <p className="text-sm font-medium text-foreground">{product.weight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">نوع</p>
                    <p className="text-sm font-medium text-foreground">ارگانیک</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="mb-3 text-sm font-bold text-foreground">خواص و فواید:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 rounded-xl border border-border bg-card">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-r-xl text-foreground transition-colors hover:bg-secondary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex h-10 w-12 items-center justify-center text-sm font-bold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-l-xl text-foreground transition-colors hover:bg-secondary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-honey px-8 py-3 text-base font-bold text-primary-foreground shadow-honey"
                >
                  <ShoppingCart className="h-5 w-5" />
                  افزودن به سبد خرید
                </motion.button>
              </div>

              {/* Back Link */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
                بازگشت به فروشگاه
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
