import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/TransitionProvider"

export const metadata = {
  title: "Abhinav Krishna B | Portfolio",
  description: "Developer portfolio of Abhinav Krishna B",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
