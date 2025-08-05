"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ClientsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  // Using placeholder client logos - in real implementation these would be actual client logos
  const clients = [
    { name: "Woolworth", logo: "W" },
    { name: "Weatherproof", logo: "WP" },
    { name: "Vigoss", logo: "V" },
    { name: "True Religion", logo: "TR" },
    { name: "Makito", logo: "M" },
    { name: "Ole Larson", logo: "OL" },
    { name: "Gringo", logo: "G" },
    { name: "Joylu", logo: "J" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [clients.length]);

  return (
    <section id="clients" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            {t("ourClients")}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t("clientsTitle").split("Global Brands")[0]}{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Global Brands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("clientsDescription")}
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-white rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center group hover-lift"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-white font-bold text-xl">{client.logo}</span>
                </div>
                <h3 className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6">
            {clients.slice(currentSlide * 4, (currentSlide + 1) * 4).map((client, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white rounded-lg shadow-soft flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">{client.logo}</span>
                  </div>
                  <h3 className="text-foreground font-semibold text-xs">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;