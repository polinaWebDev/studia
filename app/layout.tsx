import Header from "@/components/Header/Header";
import "./../src/styles/global.css"
import "./../src/styles/reset.css"
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Header/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
