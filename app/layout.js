import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T6XSHG53ZC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T6XSHG53ZC');
          `}
        </Script>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
