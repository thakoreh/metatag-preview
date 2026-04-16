import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetaTag Preview - Preview How Your Website Looks on Social Media",
  description:
    "Free tool to preview and generate meta tags for Twitter/X, Facebook, LinkedIn, Google, and Slack. See exactly how your links will look before sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
