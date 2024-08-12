import "./globals.scss";
import Header from "./components/header/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="main">
          <Header/>
          {children}
          footer
        </main>
      </body>
    </html>
  );
}
