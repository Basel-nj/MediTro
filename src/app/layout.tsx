import type { Metadata } from "next";
import "rsuite/dist/rsuite.min.css";
import "animate.css";
import "./globals.css";

export const metadata: Metadata = {
   title: "MediTro",
   description: "MediTro Elkood Task",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="">{children}</body>
      </html>
   );
}
