import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-white font-bold text-lg mb-1">BONITA RIZKA D.</h5>
          <p className="text-xs">© 2024 All Rights Reserved.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;