import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Lashed By Vienna",
  description: "Vienna's Lash Webiste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-emerald-50">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
