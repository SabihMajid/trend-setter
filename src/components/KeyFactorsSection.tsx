"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Globe2 } from "lucide-react";

const KeyFactorsSection = () => {
  const factors = [
    {
      icon: Clock,
      title: "Dynamic Business Models",
      description: "Positioned to operate on short lead times, low margins and flexible volume.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Highly competitive product prices and service fees.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Globe2,
      title: "Global Sourcing Presence",
      description: "Existing sourcing and production presence in key low-cost and duty-free countries of the world.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            These key factors enable us to work with{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              fashion companies
            </span>{" "}
            around the world:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover-lift relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${factor.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${factor.gradient} flex items-center justify-center mb-6`}>
                    <factor.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {factor.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFactorsSection;