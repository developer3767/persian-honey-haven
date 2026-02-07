import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-3xl bg-gradient-honey p-8 text-center shadow-honey md:p-12"
        >
          <span className="mb-3 inline-block text-4xl">📬</span>
          <h2 className="mb-3 text-2xl font-extrabold text-primary-foreground md:text-3xl">
            عضو خبرنامه شوید
          </h2>
          <p className="mb-8 text-sm text-primary-foreground/80">
            از تخفیف‌ها و محصولات جدید باخبر شوید. هر هفته جوایز ویژه!
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید..."
              className="flex-1 rounded-xl border-0 bg-primary-foreground/20 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-card-foreground shadow-lg transition-colors hover:bg-background"
            >
              <Send className="h-4 w-4" />
              عضویت
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
