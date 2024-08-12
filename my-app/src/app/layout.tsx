import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        footer
      </body>
    </html>
  );
}
