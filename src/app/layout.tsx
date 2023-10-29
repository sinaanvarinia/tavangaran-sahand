import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "گروه صنعتی توانگران سهند",
  description: "created by sina anvarinia",
  // icons: {
  //   icon: "/public/favicon/android-chrome-192x192.png",
  //   apple: "/public/favicon/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
   
      <body className="">{children}</body>
    </html>
  );
}
