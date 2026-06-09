// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Shlok Singh — Mechanical Engineering Portfolio",
  description:
    "Diploma in Mechanical Engineering at DSEU Okhla-I. Bridging core engineering with digital design, AutoCAD, SolidWorks, Python and modern web.",
  keywords: ["Shlok Singh", "DSEU", "Mechanical Engineering", "AutoCAD", "SolidWorks", "Portfolio"],
  authors: [{ name: "Shlok Singh" }],
  openGraph: {
    title: "Shlok Singh — Mechanical Engineering Portfolio",
    description: "Bridging engineering precision with digital innovation.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
