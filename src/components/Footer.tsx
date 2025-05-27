
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900">Himanshu Singh</h3>
            <p className="text-sm text-gray-600">B.Tech CSE-AIML Student | ML & AI Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Himanshu7921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-singh-552411251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:himanshusr451tehs@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:9930170357"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Himanshu Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
