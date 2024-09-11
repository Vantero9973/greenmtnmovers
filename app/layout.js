import "./globals.css";
import { Inter } from "next/font/google";
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T6XSHG53ZC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T6XSHG53ZC');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
