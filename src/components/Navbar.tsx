
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const menuItems = [
    {
      title: "Home",
      path: "/",
      submenu: []
    },
    {
      title: "How It Works",
      path: "/how-it-works",
      submenu: [
        { title: "Fleet Support-as-a-Service", path: "/fsaas" },
        { title: "Our Hardware", path: "/hardware" },
        { title: "Service Models", path: "/service-models" },
        { title: "Fleet Integration", path: "/fleet-integration" },
      ]
    },
    {
      title: "Industries We Serve",
      path: "/industries",
      submenu: [
        { title: "Rental Fleet Operators", path: "/industries#rental-fleet" },
        { title: "Last-Mile Delivery", path: "/industries#last-mile" },
        { title: "Ports & Industrial Zones", path: "/industries#ports-industrial" },
        { title: "Valet, Hospitality & Events", path: "/industries#valet-events" },
        { title: "Charging Infrastructure Developers", path: "/industries#infrastructure" },
      ]
    },
    {
      title: "Technology",
      path: "/technology",
      submenu: [
        { title: "Power Platform", path: "/technology#power-platform" },
        { title: "Roadmap", path: "/technology#roadmap" },
        { title: "Reliability & Efficiency", path: "/technology#reliability" },
      ]
    },
    {
      title: "Pricing",
      path: "/pricing",
      submenu: []
    },
    {
      title: "ESG & Case Studies",
      path: "/sustainability",
      submenu: [
        { title: "Carbon-Free Charging", path: "/sustainability#carbon-free" },
        { title: "Data-Backed Reporting", path: "/sustainability#reporting" },
        { title: "Success Stories", path: "/sustainability#success-stories" },
      ]
    },
    {
      title: "Contact",
      path: "/contact",
      submenu: []
    }
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
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold">
            <span className={isScrolled ? "text-chargetrux-blue" : "text-white"}>Fleet</span>
            <span className={isScrolled ? "text-chargetrux-green" : "text-chargetrux-green"}>Spark</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu.length > 0 ? (
                    <>
                      <NavigationMenuTrigger 
                        className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-chargetrux-green`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`${navigationMenuTriggerStyle()} ${
                        isScrolled ? "text-gray-700" : "text-white"
                      } hover:text-chargetrux-green`}
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="ml-4 bg-chargetrux-green hover:bg-chargetrux-green/80">
            Request Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className={isScrolled ? "text-gray-700" : "text-white"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t overflow-y-auto max-h-[70vh]">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <div key={index} className="py-1">
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => item.submenu.length === 0 && setIsOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-chargetrux-green hover:bg-chargetrux-green/80">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
