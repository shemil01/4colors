"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Lightbulb,
  Monitor,
  Wrench,
  Cog,
  BookOpen,
  Building,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  const getIconComponent = (iconName) => {
    const iconMap = {
      consultation: Lightbulb,
      managed: Monitor,
      support: Wrench,
      installation: Cog,
      training: BookOpen,
      corporate: Building,
    };
    return iconMap[iconName] || Wrench;
  };

  const Icon = getIconComponent(service.icon);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] text-white cursor-pointer group rounded-2xl overflow-hidden shadow-lg h-full">
        <CardContent className="p-8 text-center h-full flex flex-col">
          {/* Icon Container */}
          <motion.div
            variants={itemVariants}
            className="w-20 h-20 bg-[#FFF200] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold transition-colors"
          >
            <Icon className="w-10 h-10 text-[#00AEEF] group-hover:text-white transition-colors" />
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-200 mb-6 leading-relaxed flex-grow"
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          {service.features && service.features.length > 0 && (
            <motion.ul
              variants={itemVariants}
              className="text-sm text-gray-300 mb-6 space-y-2"
            >
              {service.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2 flex-shrink-0"></span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Button */}
          <Button
            className="text-[#00AEEF] bg-transparent hover:bg-[#FFF200] font-semibold py-2 h-auto group-hover:underline mt-auto"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
