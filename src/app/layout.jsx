import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestPopup from "@/components/RequestPopup";
import { GoogleAnalytics } from "@next/third-parties/google";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "Marketing Services for Growing and Scaling Your Brand | Lyxiom",
  description:
    "Explore expert marketing solutions for building, growing, and scaling your brand. Get personalised strategies to elevate your business with measurable success.",
  openGraph: {
    title: "Marketing Services for Growing and Scaling Your Brand | Lyxiom",
    description:
      "Explore expert marketing solutions for building, growing, and scaling your brand. Get personalised strategies to elevate your business with measurable success.",
    images: "https://lyxiom.com/images/meta.png",
  },
};

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redHat.className}>
        <GoogleAnalytics gaId="G-25627GPZPG" />
        <Preloader />
        <Header />
        <main className="site">{children}</main>
        <Footer />
        <RequestPopup />
      </body>
    </html>
  );
}
