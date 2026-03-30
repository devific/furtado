import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EnquiryFormDialog from "../EnquiryFormDialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Villas", path: "/villas" },
    { name: "Pool", path: "/pool" },
    { name: "Experiences", path: "/experiences" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isTransparent = isHome && !scrolled && !mobileMenuOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 flex items-center",
          isTransparent ? "bg-black/5" : "bg-white border-b border-brand-rule",
          scrolled && !isTransparent ? "shadow-md" : "",
        )}
      >
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-1 z-50",
              isTransparent ? "text-white" : "text-brand-black",
            )}
          >
            <span className="font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
              Furtado's Hospitality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    active
                      ? isTransparent
                        ? "text-white"
                        : "text-brand-black"
                      : isTransparent
                        ? "text-white/70 hover:text-white"
                        : "text-brand-black/70 hover:text-brand-black",
                  )}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className={cn(
                        "absolute left-0 -bottom-1 h-[2px] w-full",
                        isTransparent ? "bg-white" : "bg-brand-accent",
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <EnquiryFormDialog>
              <Button
                variant={isTransparent ? "outlineWhite" : "secondary"}
                className="rounded-full px-6 py-2.5 text-sm font-medium"
              >
                Plan Your Stay →
              </Button>
            </EnquiryFormDialog>
          </div>

          <div className="flex gap-2 items-center">
            {/* Mobile CTA */}

            <EnquiryFormDialog>
              <Button
                variant={isTransparent ? "outlineWhite" : "secondary"}
                className="rounded-full px-6 p  y-2.5 text-sm font-medium hidden cursor-pointer"
              >
                Plan Your Stay →
              </Button>
            </EnquiryFormDialog>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden z-50 p-2 -mr-2 cursor-pointer",
                isTransparent ? "text-white" : "text-brand-black",
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-brand-black" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-5 pb-10 flex flex-col"
          >
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 text-2xl font-bold"
            >
              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "block",
                        active
                          ? "text-brand-accent"
                          : "text-brand-black hover:text-brand-accent",
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-auto ">
              <EnquiryFormDialog>
                <Button className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer w-full">
                  Plan Your Stay →
                </Button>
              </EnquiryFormDialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
