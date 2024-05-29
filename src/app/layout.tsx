import "./style/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from './components/themeProvider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSansKr.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Heetae | Frontend Engineer",
  description: "김희태의 포트폴리오 웹 사이트",
  icons: {
    icon: [
      "/assets/favicon/favicon.ico",
      "favicon-16x16.png",
      "favicon-32x32.png"
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};