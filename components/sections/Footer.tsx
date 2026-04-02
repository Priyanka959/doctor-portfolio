import { Stethoscope, Globe, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../../data/contact";
import { doctor } from "../../data/doctor";

export default function Footer() {
  return (
    <footer className="bg-medical-dark text-white relative border-t-4 border-medical-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-serif text-2xl font-bold mb-6">
              <Stethoscope className="text-medical-accent" size={32} />
              <span>Skin Code</span>
            </div>
            <p className="text-gray-400 mb-6">
              {doctor.title}
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Phone, MapPin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-medical-accent hover:text-white hover:border-medical-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-white transition-colors relative group inline-block">
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-medical-accent transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Departments</h4>
            <ul className="space-y-3">
              {["Aesthetic Dermatology"].map((dept) => (
                <li key={dept}>
                  <p className="text-gray-400 hover:text-white transition-colors cursor-default">
                    {dept}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><strong className="text-white block mb-1">Address:</strong> {contactInfo.address.full}</li>
              <li><strong className="text-white block mb-1">Phone:</strong> {contactInfo.phone}</li>
              <li><strong className="text-white block mb-1">Email:</strong> {contactInfo.email}</li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Skin Code by Dr. Snigdha Hegde. All rights reserved.</p>
      </div>
    </footer>
  );
}