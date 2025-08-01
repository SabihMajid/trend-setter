"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Palette, Cog, HeadphonesIcon } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "research",
      title: "Research & Development",
      icon: Search,
      subtitle: "RESEARCH & DEVELOPMENT",
      description: "In Trend Setterzs, we believe that Research & Development is the foundation of any collection. Our R&D teams in different locations source and develop the latest fabrics, finishes and washes ahead of the market. The team works closely with our extensive network of mills in order to provide customers with quality products in their desired price.",
      development: "Our Technical Support Teams ensure that samples are created and developed safely according to customers' product required specification.",
    },
    {
      id: "design", 
      title: "Design",
      icon: Palette,
      subtitle: "DESIGN STUDIO",
      description: "Our team of designers travel around the world to look for design inspirations and novel ideas that breathe new designs to our customers specification. We add value to our customers' inhouse design teams and enhance their product while keeping true to their brand identity.",
    },
    {
      id: "production",
      title: "Production",
      icon: Cog,
      subtitle: "SOURCING & PRODUCTION CONTROL",
      sourcing: "Our presence in Asia enables us to manage our manufacturing operations effectively.",
      production: "We have experienced technical experts on-site who monitor and control the quality at our factories.",
      quality: "With our experienced and skilled on-site Quality Control teams, we can provide our partners with the transparency and controls needed to measure the quality of each order.",
    },
    {
      id: "operations",
      title: "Operations Support",
      icon: HeadphonesIcon,
      subtitle: "OPERATIONS EXCELLENCE",
      description: "In Trend Setterzs, these teams collaborate with their counterparts to ensure that operations are carried out smoothly and with efficiency across the supply chain.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            THE FOUNDATION OF ANY{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              COLLECTION
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The company's services are engaged in offering sourcing in apparel, home textiles, 
            fashion accessories, footwear, decorative accessories and other goods, enabling clients 
            to get access to quality supply chain management services.
          </p>
        </motion.div>

        <Tabs defaultValue="research" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 mb-8">
              {services.map((service, index) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center p-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <service.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {services.map((service, index) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-effect shadow-elegant">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold text-foreground">
                      {service.subtitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {service.description && (
                      <p className="text-lg leading-relaxed text-foreground">
                        {service.description}
                      </p>
                    )}
                    
                    {service.development && (
                      <div className="bg-muted/50 p-6 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">DEVELOPMENT</h4>
                        <p className="text-foreground">{service.development}</p>
                      </div>
                    )}

                    {service.sourcing && (
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-primary/10 p-6 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">SOURCING</h4>
                          <p className="text-foreground">{service.sourcing}</p>
                        </div>
                        <div className="bg-accent/10 p-6 rounded-lg">
                          <h4 className="font-semibold text-accent mb-2">PRODUCTION CONTROL</h4>
                          <p className="text-foreground">{service.production}</p>
                        </div>
                        <div className="bg-success/10 p-6 rounded-lg">
                          <h4 className="font-semibold text-success mb-2">QUALITY</h4>
                          <p className="text-foreground">{service.quality}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;