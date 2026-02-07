import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/products";

export default function TestimonialsSection() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            نظرات مشتریان
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
            مشتریان ما <span className="text-gradient-honey">چه می‌گویند</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />

              <p className="mb-6 text-sm leading-relaxed text-card-foreground">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
