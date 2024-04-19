import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Belajar Dasar Pemrograman Web - Dicoding",
  description: "Portfolio | Belajar Dasar Pemrograman Web - Dicoding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F2F2] text-[#4F4F4F]`}>
        <header className="flex h-16 w-full flex-col justify-center">
          <nav className="container flex items-center min-h-16 w-full mx-auto gap-6 px-4 py-0">
            <div className="w-1/2"></div>
            <div className="shrink-0">
              <a href="/" className="text-2xl font-semibold" aria-label="Homepage">
                Portfolio
              </a>
            </div>
            <div className="w-1/2"></div>
          </nav>
        </header>
        <main className="container px-2 mx-auto gap-4 flex flex-col-reverse lg:flex-row min-h-[calc(100vh_-_8rem)]">
          {children}
        </main>
        <footer className="h-16 w-full">
          <div className="container min-h-16 w-full mx-auto items-center justify-center flex px-4 py-0">
            <p className="text-[#BDBDBD] text-center">
              created by&nbsp;
              <a
                href="https://github.com/imranwijaya"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Github"
              >
                <span className="font-bold underline">imranwijaya</span>
              </a>
              &nbsp;- dicoding.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
