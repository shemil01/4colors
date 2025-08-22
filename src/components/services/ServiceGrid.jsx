"use client";
import { motion } from "framer-motion";
import ServiceCard from "../ui/service-card";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
   
    <section className="py-20 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-brand-navy mb-4"
            data-testid="heading-services-grid"
          >
            Our Service Portfolio
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Tailored solutions designed to meet the unique demands of GCC
            enterprises
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              data-testid={`service-card-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
