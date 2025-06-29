import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Blog | Stories That Inspire',
    template: '%s | The Blog',
  },
  description: 'Discover amazing stories, insights, and perspectives from writers around the world. Join our community of readers and explore content that matters.',
  keywords: ['blog', 'stories', 'writing', 'community', 'articles'],
  authors: [{ name: 'The Blog Team' }],
  creator: 'The Blog',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the-blog.example.com',
    siteName: 'The Blog',
    title: 'The Blog | Stories That Inspire',
    description: 'Discover amazing stories, insights, and perspectives from writers around the world.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Blog | Stories That Inspire',
    description: 'Discover amazing stories, insights, and perspectives from writers around the world.',
    creator: '@theblog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}