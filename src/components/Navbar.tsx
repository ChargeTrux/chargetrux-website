
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { 
      title: "How It Works", 
      path: "/fsaas",
      submenu: ["FS-as-a-Service"] 
    },
    {
      title: "Industries We Serve",
      path: "/industries",
      submenu: [
        {title: "Rental Fleet", path: "/industries?industry=rental"},
        {title: "Last-Mile Delivery", path: "/industries?industry=delivery"},
        {title: "Ports & Industrial", path: "/industries?industry=ports"},
        {title: "Valet & Events", path: "/industries?industry=hospitality"},
        {title: "Charging Infrastructure Developers", path: "/industries?industry=developers"}
      ],
    },
    { title: "Technology", path: "/technology" },
    { title: "Pricing", path: "/pricing" },
    { title: "ESG & Sustainability", path: "/sustainability" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-chargetrux-blue">
            <span className="text-chargetrux-blue">Charge</span>
            <span className="text-chargetrux-green">Trux</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isScrolled ? "text-gray-700" : "text-white"
                } hover:text-chargetrux-green transition-colors`}
              >
                {link.title}
                {link.submenu && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </Link>
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {link.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={typeof subItem === 'string' ? "#" : subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {typeof subItem === 'string' ? subItem : subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="default" className="bg-chargetrux-blue text-white hover:bg-chargetrux-blue/80">
            Schedule a Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <div key={index}>
                <Link
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={typeof subItem === 'string' ? "#" : subItem.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {typeof subItem === 'string' ? subItem : subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button
                variant="default"
                className="w-full bg-chargetrux-blue text-white hover:bg-chargetrux-blue/80"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
