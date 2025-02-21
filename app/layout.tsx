import "./globals.css";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunitoSans.variable}>
        <div className="header">
          <h1>Euxton Methodist Scouts</h1>
            <Link className="navigationLink" href="/">Home</Link><br/>
            <Link className="navigationLink" href="/about">About</Link>
            <Link className="navigationLink" href="/about/sections/squirrels">Squirrels</Link>
            <Link className="navigationLink" href="/about/sections/beavers">Beavers</Link>
            <Link className="navigationLink" href="/about/sections/cubs">Cubs</Link>
            <Link className="navigationLink" href="/about/sections/scouts">Scouts</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
