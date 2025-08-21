'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSectionsOpen(false);
    }
  };

  const toggleSections = () => {
    setSectionsOpen(!sectionsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSectionsOpen(false);
  };

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Mobile menu button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="text-white hover:text-purple-200 focus:outline-none focus:text-purple-200 p-2 transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          // Close icon (X)
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Menu icon (hamburger)
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 top-16 bg-scouts-purple shadow-lg z-50 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="px-4 py-6 space-y-2">
            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-white hover:bg-purple-600 transition-colors"
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-white hover:bg-purple-600 transition-colors"
            >
              About
            </Link>

            {/* Sections */}
            <div>
              <button
                onClick={toggleSections}
                className="w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-white hover:bg-purple-600 transition-colors flex items-center justify-between"
                aria-expanded={sectionsOpen}
              >
                Sections
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${sectionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {sectionsOpen && (
                <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-left-2 duration-200">
                  <Link
                    href="/about/sections/squirrels"
                    onClick={closeMenu}
                    className="block px-4 py-2 rounded-lg text-base text-purple-100 hover:bg-purple-600 transition-colors"
                  >
                    Squirrels (4-6)
                  </Link>
                  <Link
                    href="/about/sections/beavers"
                    onClick={closeMenu}
                    className="block px-4 py-2 rounded-lg text-base text-purple-100 hover:bg-purple-600 transition-colors"
                  >
                    Beavers (6-8)
                  </Link>
                  <Link
                    href="/about/sections/cubs"
                    onClick={closeMenu}
                    className="block px-4 py-2 rounded-lg text-base text-purple-100 hover:bg-purple-600 transition-colors"
                  >
                    Cubs (8-10½)
                  </Link>
                  <Link
                    href="/about/sections/scouts"
                    onClick={closeMenu}
                    className="block px-4 py-2 rounded-lg text-base text-purple-100 hover:bg-purple-600 transition-colors"
                  >
                    Scouts (10½-14)
                  </Link>
                </div>
              )}
            </div>

            {/* FAQ */}
            <Link
              href="/faq"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-white hover:bg-purple-600 transition-colors"
            >
              FAQ
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-white hover:bg-purple-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
