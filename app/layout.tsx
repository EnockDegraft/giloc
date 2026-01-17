import "@/app/globals.css";
import { Suspense } from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Loading } from "@/components/loading";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata = {
  title: "Global Integrity Leaders Of Change",
  description:
    "Empowering young entrepreneurs, developing trustworthy leaders, and nurturing talents across Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <Loading size="large" />
              </div>
            }
          >
            {children}
          </Suspense>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
