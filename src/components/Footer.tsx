"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TS</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-background">
                  TREND SETTERZS
                </h3>
                <p className="text-xs text-background/70">{t("sustainableSourcing")}</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-background" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-background mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { name: t("about"), href: "#about" },
                { name: t("services"), href: "#services" },
                { name: t("objectives"), href: "#objectives" },
                { name: t("clients"), href: "#clients" },
                { name: t("contact"), href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-background mb-6">{t("contactInfo")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">{t("email")}</p>
                  <a 
                    href="mailto:Nabeel@Trendsetterzs.com"
                    className="text-background hover:text-primary transition-colors"
                  >
                    Nabeel@Trendsetterzs.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">{t("callUs")}</p>
                  <a 
                    href="tel:+923452612998"
                    className="text-background hover:text-primary transition-colors"
                  >
                    +92-345-2612998
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">{t("address")}</p>
                  <p className="text-background/80 text-sm leading-relaxed">
                    {t("fullAddress").split(", ").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t("fullAddress").split(", ").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trend Setterzs. {t("allRightsReserved")}
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-background/30 text-background hover:bg-background hover:text-foreground transition-colors"
          >
            {t("backToTop")}
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;