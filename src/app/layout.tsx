import type { Metadata } from "next";
import { Roboto, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "船長の決断",
  description: "PW11Aの決断",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${roboto.variable} ${notoSansJp.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="bg-slate-100 dark:bg-slate-950">{children}</main>
          <footer className="bg-gradient-to-b from-slate-400 to-slate-500 py-8">
            <p className="text-center text-md text-slate-100 dark:text-slate-300">© 2025 HAL東京 船長の決断</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
