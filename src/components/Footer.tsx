import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "خانه", href: "/" },
    { label: "محصولات", href: "/#products" },
    { label: "دسته‌بندی‌ها", href: "/#categories" },
    { label: "درباره ما", href: "/#about" },
  ],
  services: [
    { label: "ارسال رایگان", href: "#" },
    { label: "ضمانت بازگشت", href: "#" },
    { label: "مشاوره رایگان", href: "#" },
    { label: "عسل سفارشی", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍯</span>
              <span className="text-xl font-bold text-gradient-honey">عسل‌سرا</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              فروشگاه آنلاین عسل طبیعی ایران. ارائه‌دهنده بهترین و خالص‌ترین
              عسل‌ها مستقیماً از زنبوردار.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-card-foreground">دسترسی سریع</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-card-foreground">خدمات ما</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-card-foreground">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                info@asalsara.ir
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                تهران، ایران
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © ۱۴۰۴ عسل‌سرا. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
