import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import FooterComponent from "../components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Mountain Movers: Expert Moving Services",
  description:
    "Green Mountain Movers: Your reliable Denver metro area moving experts. Stress-free relocations with top-notch service. Get a quote today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FooterComponent />
      </body>
      <GoogleAnalytics gaId="G-T6XSHG53ZC" />
    </html>
  );
}
