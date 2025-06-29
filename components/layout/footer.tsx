'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Mail, Rss, Plus } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-mostafa-maaly/', icon: Linkedin },
    { name: 'Email', href: 'mo7amedm0stafa127@gmail.com', icon: Mail },
    { name: 'RSS feed', href: '#', icon: Rss },
    { name: 'Add to Feedly', href: '#', icon: Plus },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center  gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear}
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hidden sm:inline">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}