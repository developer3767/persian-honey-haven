import { motion } from "framer-motion";
import { categories } from "@/lib/products";

export default function CategoriesSection() {
  return (
    <section id="categories" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            دسته‌بندی‌ها
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
            انواع <span className="text-gradient-honey">عسل</span> ایرانی
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            تنوع بی‌نظیر عسل‌های طبیعی از سراسر ایران
          </p>
        </motion.div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/30 hover:shadow-card-hover"
            >
              <span className="text-4xl">{category.icon}</span>
              <span className="text-sm font-bold text-card-foreground">{category.name}</span>
              <span className="text-xs text-muted-foreground">{category.count} محصول</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
