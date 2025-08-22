"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu,  } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50"
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-4"
            data-testid="logo-link"
          >
            <Image src={"/logo.jpg"} width={80} height={80} alt="logo image" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-gold"
                    : "text-brand-navy hover:text-brand-gold"
                }`}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Toggle */}

            {/* CTA Button */}
            <Button
              asChild
              className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold shadow-lg"
              data-testid="cta-quote"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid="mobile-menu-trigger"
                >
                  <Menu className="w-6 h-6 text-brand-navy" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Logo in Mobile */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                      <span className="text-brand-gold font-bold text-lg">
                        4C
                      </span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-brand-navy">
                        Four Colours
                      </h2>
                      <p className="text-xs text-brand-gray">
                        Premium Printing
                      </p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors py-2 ${
                          isActive(item.href)
                            ? "text-brand-gold border-l-2 border-brand-gold pl-4"
                            : "text-brand-navy hover:text-brand-gold pl-4"
                        }`}
                        data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Language Toggle */}
                  <div className="flex items-center space-x-2 px-4">
                    <Button size="sm" className="bg-brand-navy text-white">
                      EN
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-brand-navy font-arabic"
                    >
                      عربي
                    </Button>
                  </div>

                  {/* Mobile CTA */}
                  <div className="px-4">
                    <Button
                      asChild
                      className="w-full bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid="mobile-cta-quote"
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
