import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/Toggler";
import { Toaster } from "react-hot-toast";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
// Font files can be colocated inside of `pages`
const PoppinsRegular = localFont({ src: '../fonts/Poppins/Poppins-Regular.ttf' })

export const metadata: Metadata = {
  title: "Invoice Mate",
  description:
    "A web app which keep your all invoices at one place in a digital format",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PoppinsRegular.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Navbar />
          {children}
          <div className="fixed bottom-5 right-5">
            <ModeToggle />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
