"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Award, Leaf } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Presence",
      description: "Extensive network across Asia and key manufacturing regions",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "On-site inspection agents and international trade specialists",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "High production standards through rigorous quality control",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly and ethical sourcing practices",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Trusted Sourcing Partner Of{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Choice
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-xl lg:text-2xl italic text-muted-foreground border-l-4 border-primary pl-6">
              "Trend Setterzs is an established global supply chain manager and a
              sustainable virtual manufacturing group with razor-sharp focus on
              products and prices."
            </blockquote>

            <p className="text-lg leading-relaxed text-foreground">
              We provide sustainable sourcing for the fashion and hospitality
              industry. Our solid relationships with manufacturers and quality
              suppliers around the globe ensures that we maintain high production
              standards through our team of on-site inspection agents and
              international trade specialists.
            </p>

            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="text-primary border-primary">
                14+ Years Experience
              </Badge>
              <Badge variant="outline" className="text-accent border-accent">
                Global Network
              </Badge>
              <Badge variant="outline" className="text-success border-success">
                Sustainable Focus
              </Badge>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift glass-effect h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              number: "14+",
              label: "Years of Experience",
              description: "Proven track record in global sourcing",
            },
            {
              number: "50+",
              label: "Manufacturing Partners",
              description: "Trusted relationships worldwide",
            },
            {
              number: "1000+",
              label: "Successful Projects",
              description: "Delivered with excellence",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;