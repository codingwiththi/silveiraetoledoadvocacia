import Header from "@/components/header";
import "./globals.css";
import { Inter, Roboto_Slab } from "next/font/google";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Silveira & Toledo Advogados",
  description: "Silveira & Toledo Advogados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
