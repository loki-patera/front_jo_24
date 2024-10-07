import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/navigation/Navbar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Billetterie JO 2024",
  description: "Ce site est un projet d'étude et n'est pas un site officiel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellowxlightjo`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
