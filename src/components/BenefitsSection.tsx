import { motion } from "framer-motion";
import { Shield, Leaf, Truck, Award } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "۱۰۰٪ طبیعی و ارگانیک",
    description: "تمامی عسل‌های ما بدون هیچ‌گونه افزودنی شیمیایی و کاملاً خالص هستند.",
  },
  {
    icon: Shield,
    title: "تضمین کیفیت",
    description: "هر بسته عسل با آزمایش‌های استاندارد کنترل کیفیت شده و گواهی اصالت دارد.",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "ارسال به تمام نقاط ایران با بسته‌بندی ویژه در کمتر از ۳ روز کاری.",
  },
  {
    icon: Award,
    title: "مستقیم از زنبوردار",
    description: "بدون واسطه و مستقیماً از زنبورداران حرفه‌ای و مورد اعتماد.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="about" className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            چرا عسل‌سرا؟
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
            دلایل اعتماد <span className="text-gradient-honey">هزاران</span> مشتری
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-bold text-card-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
