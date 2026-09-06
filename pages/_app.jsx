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

function MyApp({ Component, pageProps }) {
  useLenis();

  return (
    <div
      className={`${poppins.variable} ${notoSansBengali.variable} site-font-root`}
    >
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>
  );
}

export default MyApp;
