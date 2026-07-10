import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '職涯時光軸', href: '#timeline' },
    { name: '精選專案', href: '#projects' },
    { name: '核心技能', href: '#skills' },
    { name: 'PM 儀表板', href: '#dashboard' },
    { name: '側邊專案', href: '#sideprojects' },
    { name: '聯絡方式', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-gray-200/80 py-3.5' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:bg-[#4F7DF7] transition-colors">
            E.
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm tracking-tight flex items-center gap-1.5">
              Eric Chang
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                PMP & PM
              </span>
            </div>
            <div className="text-[11px] text-gray-500 font-medium">Information Integration & Gov Digital</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-gray-900 text-white hover:bg-[#4F7DF7] transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            下載履歷
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-900 text-white"
          >
            <Download className="w-4 h-4" />
            下載完整履歷
          </button>
        </div>
      )}
    </header>
  );
}
