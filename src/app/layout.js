import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar.jsx";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100'>
          <div className='h-24'>
            <NavBar/>
          </div>
          <div className='h-[calc(100vh-6rem)]'>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
