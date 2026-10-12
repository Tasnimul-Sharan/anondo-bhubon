import "../styles/index.css";
import "../styles/globals.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans_Bengali, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-bengali",
});

function PublicLayout({ children }) {
  useLenis();
  return <Layout>{children}<Analytics /></Layout>;
}

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${poppins.variable} ${notoSansBengali.variable} site-font-root`}
    >
      {Component.portalPage ? (
        <Component {...pageProps} />
      ) : (
        <PublicLayout><Component {...pageProps} /></PublicLayout>
      )}
    </div>
  );
}

export default MyApp;
