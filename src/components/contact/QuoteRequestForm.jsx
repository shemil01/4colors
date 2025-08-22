"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, FileText, User, Mail, Building, Phone, Package } from "lucide-react";

export default function QuoteRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Quote request submitted successfully!");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
        {/* Decorative header with icon */}
        <CardHeader className=" text-black pb-8 relative">
          <div className="absolute top-4 right-4 opacity-20">
            <FileText size={48} />
          </div>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FileText className="text-[#FFF200]" />
            Request a Quote
          </CardTitle>
          <p className="text-[#00AEEF] text-sm font-normal mt-2">
            Fill out the form below and we'll get back to you with a customized quote
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input 
                  className="pl-10 py-6 border-slate-200 focus:border-[#0A1F44] focus:ring-[#0A1F44]" 
                  placeholder="Full Name *" 
                  required 
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input 
                  type="email" 
                  className="pl-10 py-6 border-slate-200 focus:border-[#0A1F44] focus:ring-[#0A1F44]" 
                  placeholder="Email Address *" 
                  required 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input 
                  className="pl-10 py-6 border-slate-200 focus:border-[#0A1F44] focus:ring-[#0A1F44]" 
                  placeholder="Company Name" 
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input 
                  className="pl-10 py-6 border-slate-200 focus:border-[#0A1F44] focus:ring-[#0A1F44]" 
                  placeholder="Phone Number" 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <Package className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <Input 
                className="pl-10 py-6 border-slate-200 focus:border-[#0A1F44] focus:ring-[#0A1F44]" 
                placeholder="Product Interest" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Textarea
                rows={4}
                className="py-4 border-slate-200 focus:border-[#0A1F44] focus:ring-[#0A1F44]"
                placeholder="Tell us about your printing requirements (quantity, dimensions, materials, deadlines, etc.)..."
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                type="submit" 
                className="w-full bg-[#FFF200] hover:bg-yellow-400 text-[#0A1F44] font-semibold text-lg py-6 transition-all duration-300 shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0A1F44] mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Send Quote Request
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-slate-500 text-center"
            >
              * Required fields. We respect your privacy and will never share your information with third parties.
            </motion.p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}