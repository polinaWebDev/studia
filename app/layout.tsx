import Header from "@/components/Layout/Header/Header";
import "./../src/styles/global.css"
import "./../src/styles/reset.css"
import "./../src/styles/typography.variables.css"
import Footer from "@/components/Layout/Footer/Footer";

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
