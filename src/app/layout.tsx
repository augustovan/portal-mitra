import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Missão | A missão de criar um Brasil melhor",
  description: "Junte-se à nova geração que busca transformar o Brasil.",
  icons: {
    icon: "https://framerusercontent.com/images/B3xd7KNHHVS63sxBw8BsJdMzXQ.png",
    apple: "https://framerusercontent.com/images/B3xd7KNHHVS63sxBw8BsJdMzXQ.png",
  },
  openGraph: {
    type: "website",
    title: "Missão | A missão de criar um Brasil melhor",
    description: "Junte-se à nova geração que busca transformar o Brasil.",
    images: ["https://framerusercontent.com/images/kznCcPtI72eM4Qlypdik16T0A.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Missão | A missão de criar um Brasil melhor",
    description: "Junte-se à nova geração que busca transformar o Brasil.",
    images: ["https://framerusercontent.com/images/kznCcPtI72eM4Qlypdik16T0A.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WHL32T5P');
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHL32T5P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
