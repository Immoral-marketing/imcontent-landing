"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
const logo = "/assets/4b809f1bb00613cd9fd4d3b0f6724cf9516b9d57.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    // First navigate to home if not already there
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src={logo} alt="imcontent" className="h-8 lg:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-black hover:text-[#9520ea] transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9520ea] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/quienes-somos"
              className="text-black hover:text-[#9520ea] transition-all duration-300 relative group"
            >
              Quiénes somos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9520ea] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/servicios"
              className="text-black hover:text-[#9520ea] transition-all duration-300 relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9520ea] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-[#9520ea] transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9520ea] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-2.5 bg-[#9520ea] text-white hover:bg-black transition-all duration-300 rounded-full"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#9520ea] transition-colors rounded-full hover:bg-black/5"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-black/5">
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-black hover:text-[#9520ea] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/quienes-somos"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-black hover:text-[#9520ea] transition-colors"
              >
                Quiénes somos
              </Link>
              <Link
                href="/servicios"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-black hover:text-[#9520ea] transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-black hover:text-[#9520ea] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-black hover:text-[#9520ea] transition-colors"
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
