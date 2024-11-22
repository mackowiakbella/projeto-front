import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Coca-Cola",
  description: "Site sobre a Coca-Cola",
  charset: 'UTF-8',
  author: 'Isabella Mackowiak',
  keywords: 'Coca-Cola'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}