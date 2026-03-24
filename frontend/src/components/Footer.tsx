import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-white">Feastly</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Experience the joy of great food with Feastly. We deliver happiness, one meal at a time.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-5">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/help" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Safety</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">Privacy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-5">Stay Updated</h3>
            <p className="text-sm mb-5 text-gray-400">Get the latest news and special offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 text-sm placeholder:text-gray-500 transition-all"
              />
              <button className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 Feastly. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-orange-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-orange-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
