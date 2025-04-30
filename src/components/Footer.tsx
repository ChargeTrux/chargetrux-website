
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-chargetrux-darkblue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl font-bold">
                <span className="text-chargetrux-blue">Charge</span>
                <span className="text-chargetrux-green">Trux</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Mobile Level 3 charging solutions for commercial fleets. Delivered where and when you need it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/industries?industry=rental" className="text-gray-300 hover:text-chargetrux-green">Mobile Charging</Link></li>
              <li><Link to="/fsaas" className="text-gray-300 hover:text-chargetrux-green">Fleet Support-as-a-Service</Link></li>
              <li><Link to="/industries?industry=delivery" className="text-gray-300 hover:text-chargetrux-green">On-Demand Charging</Link></li>
              <li><Link to="/industries?industry=developers" className="text-gray-300 hover:text-chargetrux-green">Infrastructure Backup</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-chargetrux-green">ESG Reporting</Link></li>
            </ul>
          </div>
          
          {/* Industry Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-chargetrux-green">About Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-chargetrux-green">Careers</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-chargetrux-green">Contact</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-chargetrux-green">Press</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-chargetrux-green">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on mobile charging innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button className="bg-chargetrux-green hover:bg-chargetrux-green/80 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} ChargeTrux. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
