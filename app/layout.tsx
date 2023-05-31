import "./globals.css";
import { Figtree, Inter } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Sound Vibe - Web Player: Music for everyone",
  description:
    "Sound Vibe is a digital music service that gives you access to millions of songs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
