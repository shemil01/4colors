import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/contact" },
  ];

  const productLinks = [
    { name: "Ink Cartridges", href: "/products?category=ink-cartridges" },
    { name: "Toner Cartridges", href: "/products?category=toner-cartridges" },
    { name: "Ink Bottles", href: "/products?category=ink-bottles" },
    { name: "Printers", href: "/products?category=printers" },
    { name: "Accessories", href: "/products?category=accessories" },
    { name: "Compatible Products", href: "/products?category=compatible" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Warranty", href: "/warranty" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-brand-dark-navy text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center">
                  <span className="text-brand-navy font-bold text-xl">4C</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Four Colours</h3>
                  <p className="text-brand-gold">Premium Printing Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading provider of premium printing solutions across the GCC region. 
                Trusted by corporations for over 15 years with unmatched service quality 
                and genuine products from authorized distributors.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 bg-brand-navy rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all"
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-brand-gold transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h3 className="text-lg font-bold mb-6">Products</h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-brand-gold transition-colors"
                      data-testid={`footer-product-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="bg-brand-navy" />
        
        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © 2024 Four Colours. All rights reserved. Premium printing solutions across the GCC.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-brand-gold text-sm transition-colors"
                data-testid={`footer-legal-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
