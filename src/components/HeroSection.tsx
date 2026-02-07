import { motion } from "framer-motion";
import heroImage from "@/assets/hero-honey.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              🐝 ۱۰۰٪ طبیعی و خالص
            </motion.span>

            <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              عسل <span className="text-gradient-honey">طبیعی</span> از دل
              <br />
              کوهستان‌های ایران
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              بهترین عسل‌های طبیعی و ارگانیک را مستقیماً از زنبوردار به سفره شما
              می‌رسانیم. کیفیت تضمینی، ارسال سریع و قیمت مناسب.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-honey px-8 py-3.5 text-base font-bold text-primary-foreground shadow-honey transition-shadow hover:shadow-lg"
              >
                خرید عسل طبیعی
              </motion.a>
              <motion.a
                href="#categories"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-background px-8 py-3.5 text-base font-bold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                مشاهده دسته‌بندی‌ها
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "+۵۰۰۰", label: "مشتری راضی" },
                { value: "+۳۰", label: "نوع عسل" },
                { value: "۱۰۰٪", label: "تضمین کیفیت" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImage}
                alt="عسل طبیعی ایران"
                className="h-[300px] w-full object-cover md:h-[400px] lg:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-2xl bg-card p-4 shadow-card-hover md:-bottom-6 md:-left-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <p className="text-sm font-bold text-foreground">برترین کیفیت</p>
                  <p className="text-xs text-muted-foreground">تأیید شده</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
