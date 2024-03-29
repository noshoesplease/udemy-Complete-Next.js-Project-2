import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="root-layout-container">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
